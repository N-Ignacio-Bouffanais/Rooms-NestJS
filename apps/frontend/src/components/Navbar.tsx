import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/students/login">Iniciar Sesion</Link>
        </li>
        <li>
          <Link to="/students/register">Registrarse</Link>
        </li>
        <li>
          <Link to="/students/register">Cerrar sesion</Link>
        </li>
      </ul>
    </nav>
  );
}
