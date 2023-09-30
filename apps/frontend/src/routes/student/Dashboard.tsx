import { useAuthStore } from "../../store/auth";
import {BsFillCalendarDateFill} from "react-icons/bs"
import { GrNotes, GrScorecard } from "react-icons/gr";
import {MdTask} from "react-icons/md";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const firstname = useAuthStore((state)=>state.firstname);
  const lastname = useAuthStore((state)=>state.lastname);

  return (
    <div className="flex flex-col p-8 h-[100dvh] sm:p-12">
      <h1 className="flex justify-start font-semibold text-xl">
        Estudiante: {`${firstname} ${lastname}`}
      </h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-3 my-6">
        <Link to={""} title="Mi horario">
          <div className="flex justify-center items-center w-40 h-40 bg-[#FF0060] rounded-xl">
            <i>
              <BsFillCalendarDateFill className="w-12 h-12" />
            </i>
          </div>
        </Link>
        <Link to={""} title="Mis notas">
          <div className="flex justify-center items-center w-40 h-40 bg-[#0079FF] rounded-xl">
            <i>
              <GrNotes className="w-12 h-12" />
            </i>
          </div>
        </Link>
        <Link to={""}>
          <div className="flex justify-center items-center w-40 h-40 bg-[#00DFA2] rounded-xl">
            <i>
              <GrScorecard className="w-12 h-12" />
            </i>
          </div>
        </Link>
        <Link to={""}>
          <div className="flex justify-center items-center w-40 h-40 bg-[#40128B] rounded-xl">
            <i>
              <MdTask className="w-12 h-12" />
            </i>
          </div>
        </Link>
      </div>
      <div>
        <button className="font-semibold">Salir</button>
      </div>
    </div>
  );
}

export default Dashboard;