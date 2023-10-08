import { useEffect } from "react";
import { useAppStore } from "../../store/app";

const MySubjects = () => {

  const { getSubjects, subjects } = useAppStore();
  const firstname = useAppStore((state) => state.firstname);
  const lastname = useAppStore((state) => state.lastname);

  useEffect(() => {
    return () => {
      getSubjects(firstname, lastname);
      console.log(subjects)
    };
  }, []);

  return (
    <div>
      <h1>Mis Ramos</h1>
    </div>
  )
}

export default MySubjects;