import { BiSolidFileJpg, BiSolidFilePdf } from "react-icons/bi";

type Props = {
  name: string;
};

const Task = (props: Props) => {
  return (
    <div className="flex">
      <p>{props.name}</p>
      {props.name.toString().includes(".jpg") && (
        <i>
          <BiSolidFileJpg />
        </i>
      )}
      {props.name.toString().includes(".pdf") && (
        <i>
          <BiSolidFilePdf className="text-red-600"/>
        </i>
      )}
    </div>
  );
};

export default Task;
