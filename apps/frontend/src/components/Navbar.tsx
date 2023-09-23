import { Link } from "react-router-dom";

export default function Navbar() {
  const logedIn = true;
  return (
    <nav className="flex bg-gray-700 h-[9dvh] w-full text-white font-medium">
      <ul className="flex w-[90dvw] mx-auto justify-between items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        {logedIn ? (
          <li>
            <Link to="/students/register">Cerrar sesion</Link>
          </li>
        ) : (
          <li>
            <Link to="/students/login">Iniciar Sesion</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
