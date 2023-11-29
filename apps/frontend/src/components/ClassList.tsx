import { useQuery } from "@tanstack/react-query";
import axios from "../libs/axios";
import ErrorMsg from "./ErrorMsg";

type Props = {
  subjectName?: string;
};

type DataList = {
  dni: string;
  email: string;
  id: string;
  firstname: string;
  lastname: string;
  subject: {
    limit: number;
    professor: {
      firstname: string,
      lastname: string
    }
  }
};

const ClassList = (props: Props) => {
  const GetInfo = async () => {
    const res = await axios.get(`/myclass/${props.subjectName}`);
    const info = await res.data;
    console.log(info);
    return info;
  };

  const {
    isPending,
    isError,
    error,
    data: info,
  } = useQuery({
    queryKey: ["info"],
    queryFn: GetInfo,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <ErrorMsg error={error.message}/>
  }

  return (
    <>
      <div className="rounded-2xl p-4 mb-10 bg-[#1f222b] dark:bg-[#222e53]">
        <table className="w-full">
          <thead>
            <tr className="text-xl grid grid-cols-4 h-12 items-center font-bold text-white sm:grid-cols-6 md:grid-cols-7">
              <th className="hidden font-bold text-xl col-span-1 md:table">
                Id
              </th>
              <th className="font-bold text-xl col-span-2">Student</th>
              <th className="font-bold text-xl col-span-2">Email</th>
              <th className="hidden font-bold text-xl col-span-2 sm:table">
                DNI
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(info) ? (
              info.map((student: DataList) => (
                <tr
                  key={student.id}
                  className="font-semibold grid grid-cols-4 my-2 auto-rows-auto text-white sm:grid-cols-6 md:grid-cols-7"
                >
                  <td className="hidden justify-center items-center mx-auto col-span-1 md:flex">
                    {student.id.slice(0 - 10)}
                  </td>
                  <td className="flex justify-center items-center mx-auto col-span-2">
                    {student.firstname} {student.lastname}
                  </td>
                  <td className="flex justify-center items-center mx-auto col-span-2">
                    {student.email}
                  </td>
                  <td className="hidden justify-center items-center mx-auto col-span-2 sm:flex">
                    {student.dni}
                  </td>
                </tr>
              ))
            ) : (
              <tr>Error at the time to get data from server</tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ClassList;
