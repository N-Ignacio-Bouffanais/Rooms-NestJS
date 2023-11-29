import { AiFillFileWord } from "react-icons/ai";
import { BiSolidFileJpg, BiSolidFilePdf } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

type Props = {
  name: string;
};

type IdFile = {
  idFile: string;
}

const WatchFile = (e: React.SyntheticEvent<EventTarget>) => {
  console.log(e);
};

const OptionButton = (file:IdFile) => {
  return (
    <div className="flex">
      <button id={file.idFile} className="">
        <MdDelete className="text-red-600 w-8 h-8" />
      </button>
    </div>
  );
};

const Task = (props: Props) => {
  return (
    <div className="flex justify-between w-full rounded-2xl p-3 mb-4 bg-[#1f222b] dark:bg-[#222e53]">
      <a href={props.name} className="flex items-center w-11/12">
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
      </a>
      <OptionButton idFile={props.name} />
    </div>
  );
};

export default Task;
