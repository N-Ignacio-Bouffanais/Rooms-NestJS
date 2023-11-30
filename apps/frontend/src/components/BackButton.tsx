import { Link } from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai";

interface Props {
  redirectTo: string;
}

function BackButton(props: Props) {
  return (
    <Link
      to={props.redirectTo}
      className="flex justify-center items-center w-80 bg-[#100f1d] dark:bg-yellow-400 h-10 p-3 rounded-full text-white dark:text-black text-lg font-semibold hover:bg-black my-12"
    >
      <i className="mr-1">
        <AiOutlineArrowLeft />
      </i>
      Back
    </Link>
  );
}

export default BackButton