import { useEffect } from "react";
import { useAuthStore } from "../../store/auth";

const MySubjects = () => {

  const { getSubjects, subjects } = useAuthStore();
  const firstname = useAuthStore((state) => state.firstname);
  const lastname = useAuthStore((state) => state.lastname);

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