import { Link, useNavigate } from "react-router-dom";
import { useAppStore } from "../store/app";
import { DiAtom } from "react-icons/di";
import { BsMoonStarsFill } from "react-icons/bs";
import { useEffect, useState } from "react";

interface Props {
  redirectTo: string;
}

function Navbar(props: Props) {
  const navigate = useNavigate();
  const logout = useAppStore((state) => state.logout);

  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    const doc = document.querySelector("html") as HTMLElement;
    if (theme === "dark") {
      doc.classList.add("dark");
    } else {
      doc.classList.remove("dark");
    }
  }, [theme]);

  const HandleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav className="flex bg-gray-700 h-[9dvh] w-full text-white font-medium">
      <ul className="flex w-[90dvw] mx-auto justify-between items-center">
        <li>
          <Link
            className="flex items-center"
            to={props.redirectTo}
            title="Panel de control"
          >
            <DiAtom className="h-8 w-8" />
            AtomCenter
          </Link>
        </li>
        <li className="flex items-center">
          <button className="mr-5" onClick={HandleTheme}>
            <BsMoonStarsFill />
          </button>
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
