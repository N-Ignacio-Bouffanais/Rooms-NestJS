import { Link, useNavigate } from "react-router-dom";
import { useAppStore } from "../store/app";
import {DiAtom} from "react-icons/di";

interface Props {
  redirectTo: string;
}

function Navbar(props:Props) {
  const navigate = useNavigate();
  const logout = useAppStore((state) => state.logout);

  return (
    <nav className="flex bg-gray-700 h-[9dvh] w-full text-white font-medium">
      <ul className="flex w-[90dvw] mx-auto justify-between items-center">
        <li>
          <Link className="flex items-center" to={props.redirectTo} title="Panel de control">
            <DiAtom className="h-8 w-8" />
            AtomCenter
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              logout(), navigate("/");
            }}
          >
            Cerrar sesion
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
