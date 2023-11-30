import { useNavigate } from "react-router-dom";
import { useAppStore } from "../store/app";
import { BiExit } from "react-icons/bi";


const ExitButton = () => {
  const navigate = useNavigate();
  const logout = useAppStore((state) => state.logout);
  return (
    <div className="flex justify-center">
      <button
        className="flex justify-center items-center w-80 bg-[#100f1d] dark:bg-yellow-400 h-10 p-3 rounded-full text-white dark:text-black text-lg font-semibold hover:bg-black my-12"
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