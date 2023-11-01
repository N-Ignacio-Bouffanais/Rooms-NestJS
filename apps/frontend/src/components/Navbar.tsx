import { Link, useNavigate } from "react-router-dom";
import { useAppStore } from "../store/app";
import {DiAtom} from "react-icons/di";
import { BsMoonStarsFill } from "react-icons/bs";
import { useEffect, useState } from "react";

interface Props {
  redirectTo: string;
}

function Navbar(props:Props) {
  const navigate = useNavigate();
  const logout = useAppStore((state) => state.logout);
  const [theme,setTheme] = useState("light")

  useEffect(()=>{
    if(theme === 'dark'){
      document.querySelector('html')?.classList.add('dark')
    } else{
      document.querySelector('html')?.classList.remove('dark')
    }
  },[theme])

  const HandleTheme = () =>{
    setTheme(prevTheme => prevTheme === 'light'? 'dark' : 'light')
  }

  return (
    <nav className="flex bg-gray-700 h-[9dvh] w-full text-white font-medium dark:bg-red-700">
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
