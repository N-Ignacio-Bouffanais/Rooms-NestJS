import { useQuery } from "@tanstack/react-query"
import axios from "../libs/axios";
import Task from "./Task";
import ErrorMsg from "./ErrorMsg";
import Loading from "./Loading";
//import { BiSolidFileJpg } from "react-icons/bi";

type Props = {
  subjectName: string;
  username: string;
};

const MyTasks = (props: Props) => {
  const GetTasks = async () => {
    const res = await axios.get(`files/${props.subjectName}/${props.username}`);
    const tasks = res.data;
    console.log(tasks)
    return tasks
  };

  const {
    isPending,
    isError,
    data: tasks,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: GetTasks,
  });

  if (isPending) {
    return <Loading/>;
  }

  if (isError) {
    return <ErrorMsg error={error.message} />;
  }

  return (
    <>
      <div className="grid row-auto gap-x-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {Array.isArray(tasks) ? (
          tasks.map((f) => <Task key={f} name={f} />)
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

export default MyTasks