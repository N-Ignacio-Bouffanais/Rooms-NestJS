import { useAppStore } from "../../store/app";
import axios from "../../libs/axios";
import { RxCross2 } from "react-icons/rx";
import { useMutation, useQuery } from "@tanstack/react-query";
import queryClient from "../../queryClient";
import { Subject } from "../../types/subject.type";

function SubjectsTake() {
  const firstname = useAppStore((state) => state.firstname);
  const lastname = useAppStore((state) => state.lastname);
  const email = useAppStore((state) => state.email);
  const { setSubjects, selectSubject } = useAppStore();
  const { inscrpModal, setModal } = useAppStore();

  const TakeSubject = async () => {
    return await axios.patch(`estudiante/`, {
      email,
      subjectName: selectSubject,
    });
  };

  const GetSubjects = async () => {
    const response = await axios.get(`estudiante/${firstname}-${lastname}`);
    const Allsubjects = response.data;
    console.log(Allsubjects)
    return Allsubjects;
  };

  const {
    isPending,
    isError,
    data: Allsubjects,
    error,
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
                  Agregar {selectSubject}?
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
                  Si
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
      <div className="h-[100dvh] w-[100dvw]">
        <div className="mx-auto w-[90dvw] sm:w-[85dvw] md:w-[80dvw]">
          <h1 className="text-4xl font-bold my-8">
            Professor:{`${firstname} ${lastname}`}
          </h1>
          <p className="my-6 font-semibold text-xl">
            Select the class you want to take:
          </p>
          <table className="w-full">
            <tbody>
              <tr className="text-left">
                <th className="text-gray-600 font-semibold text-lg">
                  Professor
                </th>
                <th className="text-gray-600 font-semibold text-lg">Class</th>
              </tr>
              {Array.isArray(Allsubjects) ? (
                Allsubjects.map((subject: Subject) => (
                  <tr key={subject.id}>
                    <td>
                      <p>{subject.professorId}</p>
                    </td>
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

export default SubjectsTake;
