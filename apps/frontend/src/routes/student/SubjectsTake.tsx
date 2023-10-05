import { useEffect } from "react"
import { useAppStore } from "../../store/app"

interface Subject{
  name: string
  id: string
}

function SubjectsTake() {

  const {getSubjects, subjects} = useAppStore()

  useEffect(() => {
    return ()=> {
      getSubjects();
      console.log(subjects);
    }
  }, []);

  return (
    <div className="h-[100dvh]">
      <h1 className="text-3xl font-bold">Toma de ramos</h1>
      <div>
        {subjects.map((subject: Subject) => (
          <ul className="" key={subject.id}>
            <li>{subject.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default SubjectsTake