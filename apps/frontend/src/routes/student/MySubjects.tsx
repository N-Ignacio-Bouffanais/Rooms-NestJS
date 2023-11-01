import { useAppStore } from "../../store/app";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "../../libs/axios"
import queryClient from "../../queryClient";
import { Subject } from "../../types/subject.type";

function MySubjects() {
  const navigate = useNavigate();
  const firstname = useAppStore((state) => state.firstname);
  const lastname = useAppStore((state) => state.lastname);
  const email = useAppStore((state) => state.email);
  const { setSubjects, selectSubject } = useAppStore();

  const GetSubjects = async () => {
    const response = await axios.get(
      `estudiante/mysubjects/${firstname}-${lastname}`
    );
    const subjects = response.data;
    return subjects;
  };

  const DropSubject = async () => {
    return await axios.patch(`estudiante/dropSubject`, {
      email,
      subjectName: selectSubject,
    });
  };

  const {
    isPending,
    isError,
    data: subjects,
    error,
  } = useQuery({
    queryKey: ["subjects"],
    queryFn: GetSubjects,
  });

  const {mutateAsync: UpdateSubject} = useMutation({
    mutationFn: DropSubject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subjects"] });
    }
  })

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="flex flex-col dark:bg-slate-950">
      <div className="w-[90dvw] mx-auto">
        <h1 className="flex justify-start font-bold text-4xl my-6 dark:text-white">
          My classes
        </h1>
        <table className="w-full mb-10 mt-4  rounded-2xl p-6">
          <thead>
            <tr className="text-xl grid grid-cols-2 h-12 items-center font-bold dark:text-white">
              <th>Class</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(subjects) ? (
              subjects.map((subject: Subject) => (
                <tr
                  className=" font-semibold text-lg grid grid-cols-2 auto-rows-auto dark:text-white"
                  key={subject.id}
                >
                  <td className="flex justify-center items-center">
                    {subject.name}
                  </td>
                  <td className="flex justify-center items-center">
                    <button
                      id={subject.name}
                      className="w-16 h-11 my-3 rounded-lg text-white bg-[#0177fb] mx-2"
                      onClick={() => {
                        navigate(`/student/${subject.name}`);
                      }}
                    >
                      See more
                    </button>
                    <button
                      id={subject.name}
                      className="w-24 h-11 my-3 rounded-lg text-white bg-[#fb3b52] mx-2"
                      onClick={(e: React.SyntheticEvent<EventTarget>) => {
                        setSubjects((e.target as HTMLButtonElement).id);
                        UpdateSubject();
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>Error at the time to get data from server</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MySubjects;
