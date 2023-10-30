import { BsArrowRightShort } from "react-icons/bs";
import { useAppStore } from "../../store/app";
import { Link } from "react-router-dom";
import { AiFillSchedule } from "react-icons/ai";
import { GrScorecard } from "react-icons/gr";

function Dashboard() {
  const firstname = useAppStore((state) => state.firstname);
  const lastname = useAppStore((state) => state.lastname);


  return (
    <>
      <div className="flex flex-col">
        <div className="w-[90dvw] mx-auto">
          <h1 className="flex justify-start font-bold text-2xl text-blue-900 my-6">
            Profesor:{`${firstname} ${lastname}`}
          </h1>
          <div className="grid grid-cols-1 grid-rows-2 gap-y-6 my-6 xs:grid-cols-2">
            <div className="flex flex-col items-center justify-center w-full xs:w-56  h-40 bg-[#FF0060] rounded-xl sm:h-52 sm:w-64 md:w-80 lg:w-[400px]">
              <i>
                <AiFillSchedule className="w-14 h-14" />
              </i>
              <Link
                className="flex mt-3"
                to={`/profesor/mis-clases`}
                title="Mis Materias"
              >
                <p className="font-bold text-2xl">Mis ramos</p>
                <BsArrowRightShort className="w-9 h-9" />
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center w-full xs:w-56 h-40 bg-[#00DFA2] rounded-xl sm:h-52 sm:w-64 md:w-80 lg:w-[400px]">
              <i>
                <GrScorecard className="w-14 h-14" />
              </i>
              <Link
                className="flex mt-3"
                to={`/profesor/subjects`}
                title="Tomar Ramos"
              >
                <p className="font-bold text-2xl">Tomar ramos</p>
                <BsArrowRightShort className="w-9 h-9" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
