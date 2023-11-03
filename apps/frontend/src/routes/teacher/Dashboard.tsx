import { useAppStore } from "../../store/app";
import Dashboard from "../../components/Dashboard";

function P_Dashboard() {
  const firstname = useAppStore((state) => state.firstname);
  const lastname = useAppStore((state) => state.lastname);

  return (
    <>
      <Dashboard
        title="Professor:"
        firstname={firstname}
        lastname={lastname}
        redirectMySubjects={`/professor/mysubjects/${firstname}-${lastname}`}
        redirectSubjectsTake={`/professor/subjects-take/${firstname}-${lastname}`}
      />
    </>
  );
}

export default P_Dashboard;
