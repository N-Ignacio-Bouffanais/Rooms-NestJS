import { useAppStore } from "../../store/app";
import { GrNotes, GrScorecard } from "react-icons/gr";
import { AiFillSchedule } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import { MdTask } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const firstname = useAppStore((state) => state.firstname);
  const lastname = useAppStore((state) => state.lastname);
  const navigate = useNavigate();
  const logout = useAppStore((state) => state.logout);

  return (
    <div className="flex flex-col">
      <div className="w-[90dvw] mx-auto">
        <h1 className="flex justify-start font-bold text-2xl text-blue-900 my-6">
          student:{`${firstname} ${lastname}`}
        </h1>
        <div className="grid grid-cols-1 grid-rows-2 gap-y-6 my-6 xs:grid-cols-2">
          <div className="flex flex-col items-center justify-center w-full xs:w-56  h-40 bg-[#FF0060] rounded-xl sm:h-52 sm:w-64 md:w-80 lg:w-[400px]">
            <i>
              <AiFillSchedule className="w-14 h-14" />
            </i>
            <Link
              className="flex mt-3"
              to={`/student/mysubjects/${firstname}-${lastname}`}
              title="My subjects"
            >
              <p className="font-bold text-2xl">Mis ramos</p>
              <BsArrowRightShort className="w-9 h-9" />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center w-full xs:w-56  h-40 bg-[#0079FF] rounded-xl sm:h-52 sm:w-64 md:w-80 lg:w-[400px]">
            <i>
              <GrNotes className="w-14 h-14" />
            </i>
            <Link
              className="flex mt-3"
              to={`/student/subjects-take/${firstname}-${lastname}`}
              title="Subjects take"
            >
              <p className="font-bold text-2xl">Take class</p>
              <BsArrowRightShort className="w-9 h-9" />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center w-full xs:w-56  h-40 bg-[#40128B] rounded-xl sm:h-52 sm:w-64 md:w-80 lg:w-[400px]">
            <i>
              <MdTask className="w-14 h-14" />
            </i>
            <Link className="flex mt-3" to={``} title="My classes">
              <p className="font-bold text-2xl">My classes</p>
              <BsArrowRightShort className="w-9 h-9" />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center w-full xs:w-56 h-40 bg-[#00DFA2] rounded-xl sm:h-52 sm:w-64 md:w-80 lg:w-[400px]">
            <i>
              <GrScorecard className="w-14 h-14" />
            </i>
            <Link
              className="flex mt-3"
              to={`/student/subjects-take/${firstname}-${lastname}`}
              title="Subjects take"
            >
              <p className="font-bold text-2xl">Take class</p>
              <BsArrowRightShort className="w-9 h-9" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="flex justify-center font-semibold bg-black rounded-xl w-full xs:w-56 md:w-80  h-12 text-white items-center my-4"
            onClick={() => {
              logout(), navigate("/");
            }}
          >
            Exit
            <BiExit className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
