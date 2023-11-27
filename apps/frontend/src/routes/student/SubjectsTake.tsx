import { useAppStore } from "../../store/app";
import axios from "../../libs/axios";
import { RxCross2 } from "react-icons/rx";
import { useMutation, useQuery } from "@tanstack/react-query";
import queryClient from "../../queryClient";
import { Subject } from "../../types/subject.type";
import BackButton from "../../components/BackButton";
import Loading from "../../components/Loading";

function SubjectsTake() {
  const firstname = useAppStore((state) => state.firstname);
  const lastname = useAppStore((state) => state.lastname);
  const email = useAppStore((state) => state.email);
  const { setSubjects, selectSubject } = useAppStore();
  const { inscrpModal, setModal } = useAppStore();

  const TakeSubject = async () => {
    return await axios.patch(`student/`, {
      email,
      subjectName: selectSubject,
    });
  };

  const GetSubjects = async () => {
    const response = await axios.get(`student/${firstname}-${lastname}`);
    const Allsubjects = response.data;
    console.log(Allsubjects);
    return Allsubjects;
  };

  const {
    isLoading,
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

  if (isLoading) {
    return <Loading/>
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {inscrpModal && (
        <div className="fixed inset-0 bg-zinc-900/40 z-10">
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
      <div className="flex flex-col bg-slate-200 dark:bg-slate-950">
        <div className="mx-auto w-[90dvw] sm:w-[85dvw] md:w-[80dvw]">
          <h1 className="flex justify-center font-bold text-2xl mt-10 mb-6 dark:text-white">
            Student: {`${firstname} ${lastname}`}
          </h1>
          <div className="bg-white rounded-2xl p-5 mb-10 dark:bg-[#1f222b]">
            <table className="w-full">
              <tbody>
                <tr className="text-xl grid grid-cols-2 h-12 items-center font-bold dark:text-white">
                  <th className="font-bold text-xl dark:text-white">
                    Professor
                  </th>
                  <th className="font-bold text-xl dark:text-white">Class</th>
                </tr>
                {Array.isArray(Allsubjects) ? (
                  Allsubjects.map((subject: Subject) => (
                    <tr
                      key={subject.id}
                      className="font-semibold text-lg grid grid-cols-2 auto-rows-auto dark:text-white"
                    >
                      <td className="flex justify-center items-center col-span-1">
                        {subject.professor?.firstname}{" "}
                        {subject.professor?.lastname}
                      </td>
                      <td className="flex justify-center items-center col-span-1">
                        <button
                          className="w-full text-lg dark:text-blue-500 "
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
        <div className="flex justify-center mb-8">
          <BackButton redirectTo="/student/dashboard" />
        </div>
      </div>
    </>
  );
}

export default SubjectsTake;
