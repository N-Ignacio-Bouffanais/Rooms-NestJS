import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/app";
import axios from "../../libs/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import queryClient from "../../queryClient";
import { Subject } from "../../types/subject.type";
import BackButton from "../../components/BackButton";
import { RxCross2 } from "react-icons/rx";

function MyStudents() {
  const navigate = useNavigate();
  const firstname = useAppStore((state) => state.firstname);
  const lastname = useAppStore((state) => state.lastname);
  const email = useAppStore((state) => state.email);
  const { setSubjects, selectSubject } = useAppStore();
  const { inscrpModal, setModal } = useAppStore();

  const GetSubjects = async () => {
    const response = await axios.get(
      `professor/mysubjects/${firstname}-${lastname}`
    );
    const subjects = response.data;
    return subjects;
  };

  const DropSubject = async () => {
    return await axios.patch(`professor/dropSubject`, {
      email,
      subjectName: selectSubject,
    });
  };

  const {
    isPending,
    isError,
    data: subjects,
    error,
  } = useQuery({
    queryKey: ["subjects"],
    queryFn: GetSubjects,
  });

  const { mutateAsync: DeleteSubject } = useMutation({
    mutationFn: DropSubject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subjects"] });
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
                  You want to drop {selectSubject}?
                </p>
              </div>
              <div className="flex justify-center my-3">
                <button
                  onClick={() => {
                    setModal(true);
                    DeleteSubject();
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
      <div className="flex flex-col dark:bg-slate-950">
        <div className="w-[90dvw] mx-auto">
          <h1 className="flex justify-center font-bold text-2xl mt-10 mb-6 dark:text-white">
            My classes
          </h1>
          <div className="bg-white rounded-2xl p-2 mb-10 dark:bg-[#1f222b]">
            <table className="w-full mb-10 mt-4  rounded-2xl">
              <thead>
                <tr className="text-xl grid grid-cols-3 h-12 items-center font-bold dark:text-white">
                  <th className="col-span-1">Class</th>
                  <th className="col-span-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(subjects) ? (
                  subjects.map((subject: Subject) => (
                    <tr
                      className=" font-semibold text-lg grid grid-cols-3 auto-rows-auto dark:text-white"
                      key={subject.id}
                    >
                      <td className="flex justify-center items-center col-span-1">
                        {subject.name}
                      </td>
                      <td className="flex justify-center items-center col-span-2">
                        <button
                          id={subject.name}
                          className="w-28 h-11 my-3 rounded-lg text-white bg-[#0177fb] mx-2"
                          onClick={() => {
                            navigate(`/professor/${subject.name}`);
                          }}
                        >
                          See more
                        </button>
                        <button
                          id={subject.name}
                          className="w-24 h-11 my-3 rounded-lg text-white bg-[#fb3b52] mx-2"
                          onClick={(e: React.SyntheticEvent<EventTarget>) => {
                            setSubjects((e.target as HTMLButtonElement).id);
                            setModal(false);
                          }}
                        >
                          Delete
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

export default MyStudents