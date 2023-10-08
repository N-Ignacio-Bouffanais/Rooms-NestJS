import { useEffect } from "react"
import { useAppStore } from "../../store/app"

interface Subject{
  name: string
  id: string
}

function SubjectsTake() {

  const {getAllSubjects, subjects} = useAppStore()

  useEffect(() => {
    return ()=> {
      getAllSubjects();
      console.log(subjects);
    }
  }, []);

  const Inscription = () => {

  }

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
                <button onClick={Inscription}>Incribirse</button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubjectsTake