import { useAppStore } from "../../store/app";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import { useMutation, useQuery } from "@tanstack/react-query";
import queryClient from "../../queryClient";

export type Subject = {
  name: string;
  id: string;
  limit: number;
};

function SubjectsTake() {
  const firstname = useAppStore((state) => state.firstname);
  const lastname = useAppStore((state) => state.lastname);
  const email = useAppStore((state) => state.email);
  const { setSubjects, selectSubject } = useAppStore();
  const { inscrpModal, setModal } = useAppStore();

  const TakeSubject = async () => {
    const res = axios.patch(`http://localhost:3001/estudiante/`, {
      email,
      subjectName: selectSubject,
    });
    console.log(res);
  };

  const {
    isPending,
    isError,
    data: Allsubjects,
    error,
  } = useQuery({
    queryKey: ["Allsubjects"],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:3001/estudiante/${firstname}-${lastname}`
      );
      const Allsubjects = response.data;
      return Allsubjects;
    },
  });

  const { mutateAsync } = useMutation({
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
          <div className="container flex items-center h-full max-w-lg mx-auto">
            <div className="relative bg-white w-full h-fit py-8 px-4 rounded-lg">
              <div className="absolute top-4 right-4">
                <button onClick={() => setModal(true)}>
                  <RxCross2 className="w-7 h-7" />
                </button>
              </div>
              <div className="flex justify-center">
                <p className="text-2xl font-bold">Estas seguro?</p>
              </div>
              <div className="flex justify-center my-3">
                <button
                  onClick={() => {
                    mutateAsync()
                    setModal(true)
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
          <h1 className="text-4xl font-bold my-8">Toma de ramos</h1>
          <table className="w-full">
            <tbody>
              <tr className="text-left">
                <th className="text-gray-600 font-semibold text-lg">
                  Profesor
                </th>
                <th className="text-gray-600 font-semibold text-lg">Ramo</th>
              </tr>
              {Allsubjects.map((subject: Subject) => (
                <tr key={subject.id}>
                  <td className="flex h-10 my-3 ">
                    <button
                      className="w-full font-semibold text-lg text-left "
                      id={subject.name}
                      onClick={(e) => {
                        setModal(false);
                        setSubjects((e.target as HTMLButtonElement).id)
                      }}
                    >
                      {subject.name}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={() => {
              console.log("enviando...");
            }}
          >
            Agregar ramos
          </button>
        </div>
      </div>
    </>
  );
}

export default SubjectsTake;
