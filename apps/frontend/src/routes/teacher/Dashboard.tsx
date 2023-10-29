import { useQuery } from "@tanstack/react-query";
import { useAppStore } from "../../store/app";
import axios from "../../libs/axios"
import { Subject } from "../../types/subject.type";

const Dashboard = () => {
  const firstname = useAppStore((state) => state.firstname);
  const lastname = useAppStore((state) => state.lastname);

  const GetSubjects = async() =>{
    const res = await axios.get(``);
    const subjects = res.data;
    return subjects;
  }

  const {
    data: subjects,
    error,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["mysubjects"],
    queryFn: GetSubjects,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="flex flex-col">
      <div className="w-[90dvw] mx-auto">
        <h1 className="flex justify-start font-bold text-2xl text-blue-900 my-6">
          Profesor:{`${firstname} ${lastname}`}
        </h1>
        {subjects.map((subject: Subject)=>(
          <p>{subject.name}</p>
        ))}
      </div>
    </div>
  );
}

export default Dashboard