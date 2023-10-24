import { useEffect } from "react";
import { useAppStore } from "../../store/app";
import { Subject } from "./SubjectsTake";
import { useNavigate } from "react-router-dom";

function MySubjects() {
  const navigate = useNavigate();
  const { getSubjects, InsSubjects } = useAppStore();
  const firstname = useAppStore((state) => state.firstname);
  const lastname = useAppStore((state) => state.lastname);

  useEffect(() => {
    return () => {
      getSubjects(firstname, lastname);
      console.log(InsSubjects);
    };
  }, []);

  const DropSubject = () =>{
    console.log("eliminar")
  }

  return (
    <>
      <div className="w-[90dvw] mx-auto">
        <h1 className="flex justify-start font-bold text-3xl text-blue-900 my-6">
          Mis Ramos
        </h1>
        <table className="w-full mb-10 mt-4 bg-white rounded-2xl p-6">
          <thead>
            <tr className="text-xl grid grid-cols-2 h-12 items-center border-y">
              <th>Clase</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {InsSubjects.map((subject: Subject) => (
              <tr
                className=" font-semibold text-lg grid grid-cols-2 auto-rows-auto"
                key={subject.id}
              >
                <td className="flex justify-center items-center">
                  {subject.name}
                </td>
                <td className="flex justify-center items-center">
                  <button
                    id={subject.name}
                    className="w-16 h-11 my-3 rounded-lg text-white bg-[#0177fb] mx-2"
                    onClick={() => {
                      navigate(`/estudiante/${subject.name}`);
                    }}
                  >
                    Ver
                  </button>
                  <button
                    className="w-24 h-11 my-3 rounded-lg text-white bg-[#fb3b52] mx-2"
                    onClick={() => {
                      DropSubject();
                    }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MySubjects;
