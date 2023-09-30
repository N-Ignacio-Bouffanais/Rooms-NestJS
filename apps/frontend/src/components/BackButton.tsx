import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";


function BackButton() {
  return (
    <Link
      to="/"
      className="flex justify-center items-center w-80 bg-[#100f1d] h-10 p-3 rounded-full text-white text-lg font-medium hover:bg-black"
    >
      <i className="mr-1">
        <BsFillArrowLeftCircleFill />
      </i>
      Regresar
    </Link>
  );
}

export default BackButton