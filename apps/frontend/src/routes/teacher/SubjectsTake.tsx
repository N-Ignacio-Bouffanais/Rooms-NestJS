import { useAppStore } from "../../store/app";
import axios from "../../libs/axios"
import { useMutation, useQuery } from "@tanstack/react-query";
import { Subject } from "../../types/subject.type";
import queryClient from "../../queryClient";
import { RxCross2 } from "react-icons/rx";
import BackButton from "../../components/BackButton";

function Subjects() {
  const firstname = useAppStore((state) => state.firstname);
  const lastname = useAppStore((state) => state.lastname);
  const email = useAppStore((state) => state.email);
  const { setSubjects, selectSubject } = useAppStore();
  const { inscrpModal, setModal } = useAppStore();

  const GetSubjects = async () => {
    const res = await axios.get(`professor/${firstname}-${lastname}`);
    const subjects = res.data;
    console.log(subjects);
    return subjects;
  };

  const TakeSubject = async () => {
    return await axios.patch(`professor/`, {
      email,
      subjectName: selectSubject,
    });
  };

  const {
    data: Allsubjects,
    error,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["Allsubjects"],
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
      <div className="flex flex-col bg-slate-200 dark:bg-slate-950">
        <div className="w-[90dvw] mx-auto">
          <h1 className="flex justify-center font-bold text-2xl mt-10 mb-6 dark:text-white">
            Professor: {`${firstname} ${lastname}`}
          </h1>
          <div className="bg-white rounded-2xl p-5 mb-10 dark:bg-[#1f222b]">
            <table className="w-full">
              <tbody>
                <tr className="text-center">
                  <th className="font-bold text-xl dark:text-white">
                    Students
                  </th>
                  <th className="font-bold text-xl dark:text-white">Class</th>
                </tr>
                {Array.isArray(Allsubjects) ? (
                  Allsubjects.map((subject: Subject) => (
                    <tr key={subject.id} className="text-center font-semibold">
                      <td className="dark:text-white">{subject.student.length}/{subject.limit}</td>
                      <td className="flex h-10 my-3 ">
                        <button
                          className="w-full text-lg dark:text-blue-500"
                          id={subject.name}
                          onClick={(e) => {
                            setSubjects((e.target as HTMLButtonElement).id);
                            setModal(false);
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
        <div className="flex justify-center mb-8">
          <BackButton redirectTo="/professor/dashboard" />
        </div>
      </div>
    </>
  );
}

export default Subjects