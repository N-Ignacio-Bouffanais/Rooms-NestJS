import { Link, useNavigate } from "react-router-dom";
import { useAppStore } from "../store/app";
import { DiAtom } from "react-icons/di";
import { BsMoonStarsFill } from "react-icons/bs";
import { useEffect, useState } from "react";

interface Props {
  redirectTo: string;
  role: string;
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
    <nav className="flex h-[10dvh] w-full dark:text-white font-medium bg-slate-300 dark:bg-[#121622]">
      <ul className="flex w-[90dvw] mx-auto justify-between items-center sm:text-lg">
        <li>
          <Link
            className="flex items-center text-xl"
            to={props.redirectTo}
            title="Dashboard"
          >
            <DiAtom className="h-8 w-8" />
            AtomCenter
          </Link>
        </li>
        <li className="flex items-center">
          <button className="mr-5" onClick={HandleTheme}>
            <BsMoonStarsFill />
          </button>
          {props.role != "" ? (
            <button
              className="rounded-lg h-10 bg-blue-600 w-28 text-white"
              onClick={() => {
                logout(), navigate("/");
              }}
            >Sign Out</button>
          ) : (
            <button
              className="rounded-lg h-10 bg-blue-600 w-28 text-white"
              onClick={() => {
                navigate("/student/login");
              }}
            >Sign In</button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
