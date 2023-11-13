import { useQuery } from "@tanstack/react-query";
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import axios from "../libs/axios";

type Props = {
  subjectName?: string
}

const ClassList = (props:Props) => {

  const columns = [
    {
      header: "Student",
      accessorKey: "student",
    },
    {
      header: "Id",
      accessorKey: "idstudent",
    },
    {
      header: "email",
      accessorKey: "email",
    },
    {
      header: "dni",
      accessorKey: "dni",
    },
  ];

  const GetInfo = async () => {
    const res = await axios.get(`/myclass/${props.subjectName}`);
    const info = res.data
    console.log(info);
    return info;
  };

  const { isPending, isError, data:info } = useQuery({
    queryKey: ["info"],
    queryFn: GetInfo,
  });

  // const table = useReactTable({
  //   data:,
  //   columns,
  //   getCoreRowModel: getCoreRowModel(),
  // });

  return (
    <>
      <table></table>
    </>
  );
};

export default ClassList;
