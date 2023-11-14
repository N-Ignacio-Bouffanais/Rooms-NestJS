import { useQuery } from "@tanstack/react-query";
import axios from "../libs/axios";

type Props = {
  subjectName?: string
}

type DataList = {
  student: [
    {
      dni: string;
      email: string;
      id: string;
    }
  ];
};

const ClassList = (props:Props) => {

  const GetInfo = async () => {
    const res = await axios.get(`/myclass/${props.subjectName}`);
    const info: DataList = await res.data;
    console.log(info);
    return info;
  };

  const { isPending, isError, data:info } = useQuery({
    queryKey: ["info"],
    queryFn: GetInfo,
  });

  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="text-xl grid grid-cols-4 h-12 items-center font-bold dark:text-white">
            <th className="font-bold text-xl dark:text-white">Id</th>
            <th className="font-bold text-xl dark:text-white">Student</th>
            <th className="font-bold text-xl dark:text-white">Email</th>
            <th className="font-bold text-xl dark:text-white">DNI</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};

export default ClassList;
