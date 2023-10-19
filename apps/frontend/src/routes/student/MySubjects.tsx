import { useEffect } from "react";
import { useAppStore } from "../../store/app";
import { Subject } from "./SubjectsTake";

function MySubjects (){

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
    <div>
      <h1>Mis Ramos</h1>
      {InsSubjects.map((subject: Subject) => (
        <ul className="" key={subject.id}>
          <li className="grid w-full grid-cols-3 h-20 my-6">
            <p className="text-2xl">{subject.name}</p>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default MySubjects;