import { useAppStore } from "../../store/app";
import axios from "../../libs/axios"
import { useMutation, useQuery } from "@tanstack/react-query";
import { Subject } from "../../types/subject.type";
import queryClient from "../../queryClient";
import { RxCross2 } from "react-icons/rx";

function Subjects() {
  const firstname = useAppStore((state) => state.firstname);
  const lastname = useAppStore((state) => state.lastname);
  const email = useAppStore((state) => state.email);
  const { setSubjects, selectSubject } = useAppStore();
  const { inscrpModal, setModal } = useAppStore();

  const TakeSubject = async () => {
    return await axios.patch(`profesor/`, {
      email,
      subjectName: selectSubject,
    });
  };

  const GetSubjects = async () => {
    const res = await axios.get(`profesor/${firstname}-${lastname}`);
    const subjects = res.data;
    console.log(subjects)
    return subjects;
  };

  const {
    data: Allsubjects,
    error,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["mysubjects"],
    queryFn: GetSubjects,
  });

  const { mutateAsync: UpdateSubject } = useMutation({
    mutationFn: TakeSubject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Allsubjects"] });
    },
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {inscrpModal && (
        <div className="fixed inset-0 bg-zinc-900/20 z-10">
          <div className="container flex items-center justify-center h-full max-w-lg mx-auto">
            <div className="relative bg-white w-72 sm:w-full h-fit p-4 rounded-lg">
              <div className="absolute top-3 right-3">
                <button onClick={() => setModal(true)}>
                  <RxCross2 className="w-7 h-7" />
                </button>
              </div>
              <div className="flex justify-center my-4">
                <p className="text-xl text-center font-bold">
                  Add {selectSubject}?
                </p>
              </div>
              <div className="flex justify-center my-3">
                <button
                  onClick={() => {
                    setModal(true);
                    UpdateSubject();
                  }}
                  className="rounded-lg font-semibold mx-2 text-white w-12 h-10 bg-[#0177fb]"
                >
                  Yes
                </button>
                <button
                  className="rounded-lg font-semibold mx-2 text-white w-12 h-10 bg-[#fb3b52]"
                  onClick={() => setModal(true)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col">
        <div className="w-[90dvw] mx-auto">
          <h1 className="flex justify-start font-bold text-2xl text-blue-900 my-6">
            Professor:{`${firstname} ${lastname}`}
          </h1>
          <p className="my-6 font-semibold text-xl">
            Select the class you want to take:
          </p>
          <table className="w-full">
            <tbody>
              <tr className="text-left">
                <th className="text-gray-600 font-semibold text-lg">
                  Students
                </th>
                <th className="text-gray-600 font-semibold text-lg">Class</th>
              </tr>
              {Array.isArray(Allsubjects) ? (
                Allsubjects.map((subject: Subject) => (
                  <tr key={subject.id}>
                    <td>0/{subject.limit}</td>
                    <td className="flex h-10 my-3 ">
                      <button
                        className="w-full font-semibold text-lg text-left "
                        id={subject.name}
                        onClick={(e) => {
                          setModal(false);
                          setSubjects((e.target as HTMLButtonElement).id);
                        }}
                      >
                        {subject.name}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>Error at the time to get data from server</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Subjects