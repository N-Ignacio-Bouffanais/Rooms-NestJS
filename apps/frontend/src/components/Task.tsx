import { AiFillFileWord } from "react-icons/ai";
import { BiSolidFileJpg, BiSolidFilePdf } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import axios from "../libs/axios";
import { useMutation } from "@tanstack/react-query";
import queryClient from "../queryClient";

type Props = {
  name: string;
  subject: string;
  student: string;
};

const Task = (props: Props) => {

  const DropFile = async () => {
    return await axios.delete(
      `student/${props.subject}/${props.student}/${props.name}`
    );
  };

  const { mutateAsync: DeleteFile } = useMutation({
    mutationFn: DropFile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return (
    <div className="flex justify-between w-full rounded-2xl p-3 mb-4 bg-[#1f222b] dark:bg-[#222e53]">
      <Link
        key={props.name}
        target="_blank"
        to={`${props.student}/${props.name}`}
        className="flex items-center w-11/12"
      >
        {props.name.toString().includes(".jpg") && (
          <i>
            <BiSolidFileJpg className="text-green-600 w-10 h-10" />
          </i>
        )}
        {props.name.toString().includes(".pdf") && (
          <i>
            <BiSolidFilePdf className="text-red-600 w-10 h-10" />
          </i>
        )}
        {props.name.toString().includes(".docx") && (
          <i>
            <AiFillFileWord className="text-red-600 w-10 h-10" />
          </i>
        )}
        <p className="flex justify-center items-center text-lg text-white">
          {props.name.slice(5)}
        </p>
      </Link>
      <div className="flex">
        <button
          id={props.name}
          onClick={() => {
            DeleteFile();
          }}
        >
          <MdDelete className="text-red-600 w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default Task;
