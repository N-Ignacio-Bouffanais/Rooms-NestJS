import { useEffect } from "react"
import { useAppStore } from "../../store/app"


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
    </div>
  )
}

export default SubjectsTake