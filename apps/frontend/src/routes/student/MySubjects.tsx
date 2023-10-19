import { useEffect } from "react";
import { useAppStore } from "../../store/app";
import { Subject } from "./SubjectsTake";

function MySubjects() {
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
      <table className="w-full">
        <tr className="text-xl bg-gray-300 text-gray-500 text-left">
          <th className="">Id</th>
          <th>Clase</th>
          <th>Limite</th>
        </tr>
        {InsSubjects.map((subject: Subject) => (
          <tr className="font-medium">
            <td className="">{subject.id.slice(10)}</td>
            <td>{subject.name}</td>
            <td>{subject.limit}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default MySubjects;
