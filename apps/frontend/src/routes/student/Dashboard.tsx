import { useAppStore } from "../../store/app";
import { GrNotes, GrScorecard } from "react-icons/gr";
import { AiFillSchedule } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { MdTask } from "react-icons/md";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const firstname = useAppStore((state) => state.firstname);
  const lastname = useAppStore((state) => state.lastname);

  return (
    <div className="flex flex-col ">
      <div className="w-[90dvw] mx-auto">
        <h1 className="flex justify-start font-bold text-2xl my-4">{`${firstname} ${lastname}`}</h1>
        <div className="grid grid-cols-1 grid-rows-2 gap-y-3 my-6 xs:grid-cols-2">
          <div className="flex flex-col items-center justify-center w-full xs:w-56  h-40 bg-[#FF0060] rounded-xl">
            <i>
              <AiFillSchedule className="w-14 h-14" />
            </i>
            <Link
              className="flex justify-center items-center w-36 h-9 mt-2 bg-white rounded-lg font-bold"
              to={`/estudiante/mysubjects/${firstname}-${lastname}`}
              title="Mis Materias"
            >
              Mis materias
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center w-full xs:w-56  h-40 bg-[#0079FF] rounded-xl">
            <i>
              <GrNotes className="w-14 h-14" />
            </i>
            <Link
              className="flex justify-center items-center w-36 h-9 mt-2 bg-white rounded-lg font-bold"
              to={`/estudiante/toma-de-ramos/${firstname}-${lastname}`}
              title="Tomar Ramos"
            >
              Tomar Ramos
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center w-full xs:w-56  h-40 bg-[#00DFA2] rounded-xl">
            <i>
              <GrScorecard className="w-14 h-14" />
            </i>
            <Link
              className="flex justify-center items-center w-36 h-9 mt-2 bg-white rounded-lg font-bold"
              to={""}
            ></Link>
          </div>

          <div className="flex flex-col items-center justify-center w-full xs:w-56  h-40 bg-[#40128B] rounded-xl">
            <i>
              <MdTask className="w-14 h-14" />
            </i>
            <Link
              className="flex justify-center items-center w-36 h-9 mt-2 bg-white rounded-lg font-bold"
              to={""}
            ></Link>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="flex justify-center font-semibold bg-black rounded-xl w-full xs:w-56  h-12 text-white items-center my-4">
            Salir
            <BiExit className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
