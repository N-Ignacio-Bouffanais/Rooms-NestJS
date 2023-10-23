import { useEffect } from "react";
import { useAppStore } from "../../store/app";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";

export type Subject = {
  name: string;
  id: string;
  limit: number;
};

function SubjectsTake() {
  const { getAllSubjects, subjects } = useAppStore();
  const firstname = useAppStore((state) => state.firstname);
  const lastname = useAppStore((state) => state.lastname);
  //const email = useAppStore((state) => state.email);
  const { inscrpModal, setModal } = useAppStore();

  useEffect(() => {
    return () => {
      getAllSubjects(firstname, lastname);
      console.log(subjects);
    };
  }, []);

  // const Inscription = async () => {
  //   // const res = axios.patch(`http://localhost:3001/estudiante/`, {
  //   //   email,
  //   //   subjectName: (e.target as HTMLButtonElement).id,
  //   // });
  //   // console.log(res);
  //   console.log(e)
  // };
  const Modal = async (e: React.SyntheticEvent<EventTarget>) => {
    const selected = (e.target as HTMLButtonElement).id;
    setModal(inscrpModal);
  };

  return (
    <>
      {inscrpModal && (
        <div className="fixed inset-0 bg-zinc-900/20 z-10">
          <div className="container flex items-center h-full max-w-lg mx-auto">
            <div className="relative bg-white w-full h-fit py-20 px-2 rounded-lg">
              <div className="absolute top-4 right-4">
                <button onClick={() => setModal(true)}>
                  <RxCross2 className="w-7 h-7"/>
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
                <th className="text-gray-600 font-semibold text-lg">Ramo</th>
                <th className="text-gray-600 font-semibold text-lg">
                  Profesor
                </th>
              </tr>
              {subjects.map((subject: Subject) => (
                <tr key={subject.id}>
                  <td className="flex bg-white rounded-lg h-10 my-3">
                    <button
                      className="w-full"
                      id={subject.name}
                      onClick={Modal}
                    >
                      {subject.name}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default SubjectsTake;
