import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";


function Navbar() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  return (
    <nav className="flex bg-gray-700 h-[9dvh] w-full text-white font-medium">
      <ul className="flex w-[90dvw] mx-auto justify-between items-center">
        <li>
          <Link to="/panel-de-control" title="Panel de control">
            Inicio
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
