import { useAuthStore } from "../../store/auth";
import { GrNotes, GrScorecard } from "react-icons/gr";
import {AiFillSchedule} from "react-icons/ai";
import {BiExit} from "react-icons/bi"
import {MdTask} from "react-icons/md";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const firstname = useAuthStore((state)=>state.firstname);
  const lastname = useAuthStore((state)=>state.lastname);

  return (
    <div className="flex flex-col h-[100dvh] ">
      <div className="w-[90dvw] mx-auto">
        <h1 className="flex justify-start font-semibold text-xl my-4">
          Estudiante: {`${firstname} ${lastname}`}
        </h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-y-3 my-6">
          <Link to={`/estudiante/${firstname}-${lastname}`} title="Materias">
            <div className="flex justify-center items-center w-40 h-40 bg-[#FF0060] rounded-xl">
              <i>
                <AiFillSchedule className="w-12 h-12" />
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
          <button className="font-semibold">
            Salir
            <BiExit />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;