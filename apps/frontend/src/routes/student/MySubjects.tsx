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

  return (
    <div className="w-[90dvw] mx-auto">
      <h1 className="flex justify-start font-bold text-3xl text-blue-900 my-6">
        Mis Ramos
      </h1>
      <table className="w-full mb-10 mt-4">
        <tbody>
          <tr className="text-xl">
            <th className="text-left">Clase</th>
            <th className="xs:w-80">Accion</th>
          </tr>
          {InsSubjects.map((subject: Subject) => (
            <tr
              className="font-medium h-12 "
              key={subject.id}
            >
              <td className="font-semibold">{subject.name}</td>
              <td className="flex justify-center xs:w-80">
                <button
                  className="w-16 h-11 my-3 rounded-lg text-white bg-[#0177fb] mx-2"
                  onClick={(e) => {
                    // navigate(`/estudiante/${}`)
                    console.log((e.target as HTMLButtonElement).id);
                  }}
                >
                  Ver
                </button>
                <button className="w-24 h-11 my-3 rounded-lg text-white bg-[#fb3b52] mx-2">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MySubjects;
