import { AiFillFileWord } from "react-icons/ai";
import { BiSolidFileJpg, BiSolidFilePdf } from "react-icons/bi";

type Props = {
  name: string;
};

const Task = (props: Props) => {
  return (
    <div className="flex w-full rounded-2xl p-3 mb-4 bg-[#1f222b] dark:bg-[#222e53]">
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
    </div>
  );
};

export default Task;
