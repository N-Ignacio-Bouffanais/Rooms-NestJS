import Dashboard from "../../components/Dashboard"
import { useAppStore } from "../../store/app";


const S_Dashboard = () => {
  const firstname = useAppStore((state) => state.firstname);
  const lastname = useAppStore((state) => state.lastname);

  return (
    <>
      <Dashboard
        title="Student"
        redirectMySubjects={`/student/mysubjects/${firstname}-${lastname}`}
        redirectSubjectsTake={`/student/subjects-take/${firstname}-${lastname}`}
        firstname={firstname}
        lastname={lastname}
      />
    </>
  );
}

export default S_Dashboard