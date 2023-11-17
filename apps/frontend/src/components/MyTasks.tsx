import { useQuery } from "@tanstack/react-query"
import axios from "../libs/axios";

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
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <div></div>
    </>
  );
};

export default MyTasks