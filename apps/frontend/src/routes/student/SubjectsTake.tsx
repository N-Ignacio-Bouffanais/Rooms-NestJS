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
  const email = useAppStore((state) => state.email);
  const { setSelectSubject, selectSubject } = useAppStore();
  const { inscrpModal, setModal } = useAppStore();

  useEffect(() => {
    return () => {
      getAllSubjects(firstname, lastname);
      console.log(subjects);
    };
  }, []);
  const HandleSelect = (e: React.SyntheticEvent<EventTarget>) => {
    console.log(e);
    setSelectSubject((e.target as HTMLButtonElement).id);
  };

  const Inscription = async () => {
    const res = axios.patch(`http://localhost:3001/estudiante/`, {
      email,
      subjectName: selectSubject,
    });
    console.log(res);
  };

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
                  onClick={() => Inscription()}
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
              {subjects.map((subject: Subject) => (
                <tr key={subject.id}>
                  <td className="flex h-10 my-3 ">
                    <button
                      className="w-full font-semibold text-lg text-left "
                      id={subject.name}
                      onClick={(e) => {
                        setModal(false);
                        HandleSelect(e);
                      }}
                    >
                      {subject.name}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={()=>{
            console.log("enviando...");
          }}>Agregar ramos</button>
        </div>
      </div>
    </>
  );
}

export default SubjectsTake;
