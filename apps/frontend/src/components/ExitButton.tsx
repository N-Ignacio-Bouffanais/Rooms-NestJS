import { useNavigate } from "react-router-dom";
import { useAppStore } from "../store/app";
import { BiExit } from "react-icons/bi";


const ExitButton = () => {
  const navigate = useNavigate();
  const logout = useAppStore((state) => state.logout);
  return (
    <div className="flex justify-center">
      <button
        className="flex justify-center font-semibold bg-black rounded-xl w-full xs:w-56 md:w-80  h-12 text-white items-center mt-4 mb-10"
        onClick={() => {
          logout(), navigate("/");
        }}
      >
        Exit
        <BiExit className="ml-2" />
      </button>
    </div>
  );
}

export default ExitButton