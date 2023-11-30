import { useQuery } from "@tanstack/react-query"
import axios from "../libs/axios";
import Task from "./Task";
import ErrorMsg from "./ErrorMsg";
import Loading from "./Loading";

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
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: GetTasks,
  });

  if (isPending) {
    return <Loading/>;
  }

  if (isError) {
    <ErrorMsg error="No folder found"/>;
  }

  return (
    <>
      <div className="grid row-auto gap-x-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {Array.isArray(tasks) ? (
          tasks.map((f) => (
            <Task
              student={props.username}
              subject={props.subjectName}
              key={f}
              name={f}
            />
          ))
        ) : (
          <p className="rounded-2xl p-3 mb-6 bg-[#F0F0F0] dark:bg-[#282a37] text-white text-center">
            No files for now
          </p>
        )}
      </div>
    </>
  );
};

export default MyTasks