import { useEffect } from "react"
import { useAppStore } from "../../store/app"
import axios from "axios"

 export type Subject ={
  name: string
  id: string
  limit: number
}

function SubjectsTake() {

  const {getAllSubjects, subjects} = useAppStore()
  const firstname = useAppStore((state) => state.firstname);
  const lastname = useAppStore((state) => state.lastname);
  const email = useAppStore((state) => state.email);

  useEffect(() => {
    return ()=> {
      getAllSubjects(firstname, lastname);
      console.log(subjects)
    }
  }, []);

  const Inscription = async (e: React.SyntheticEvent<EventTarget>) => {
    const res = axios.patch(`http://localhost:3001/estudiante/`, {
      email,
      subjectName: (e.target as HTMLButtonElement).id,
    });
    console.log(res);
  };

  return (
    <div className="h-[100dvh] w-[100dvw]">
      <div className="mx-auto w-[90dvw] sm:w-[85dvw] md:w-[80dvw]">
        <h1 className="text-4xl font-bold my-8">Toma de ramos</h1>
        <div className="grid">
          <div className="grid w-full grid-cols-3">
            <p className="text-gray-600 font-semibold text-lg">Materia</p>
            <p className="text-gray-600 font-semibold text-lg">Profesor</p>
            <p className="text-gray-600 font-semibold text-lg">Cupos</p>
          </div>
          {subjects.map((subject: Subject) => (
            <ul className="" key={subject.id}>
              <li className="grid w-full grid-cols-3 h-20 my-6">
                <p className="text-2xl">{subject.name}</p>
                <button className="w-60 h-12 bg-green-500 rounded-lg font-bold" id={subject.name} onClick={Inscription}>Incribirse</button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubjectsTake