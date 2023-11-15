import { GrNotes, GrScorecard } from "react-icons/gr";
import { AiFillSchedule } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import ExitButton from "./ExitButton";

interface Props {
  title: string;
  redirectMySubjects: string;
  redirectSubjectsTake: string;
  firstname: string;
  lastname:string;
}

const Dashboard = (props:Props) => {

  return (
    <div className="flex flex-col bg-white dark:bg-slate-950">
      <div className="w-[90dvw] mx-auto">
        <h1 className="flex justify-center font-bold text-2xl mt-10 mb-6 dark:text-white">
          {props.title}: {`${props.firstname} ${props.lastname}`}
        </h1>
        <div className="grid grid-cols-1 justify-items-center grid-rows-2 gap-y-6 xs:grid-cols-2 ">
          <div className="flex flex-col items-center justify-center w-full xs:w-56  h-40 bg-[#FF0060] rounded-xl sm:h-52 sm:w-64 md:w-80 lg:w-[400px]">
            <i>
              <AiFillSchedule className="w-14 h-14" />
            </i>
            <Link
              className="flex mt-3"
              to={props.redirectMySubjects}
              title="My subjects"
            >
              <p className="font-bold text-2xl">My classes</p>
              <BsArrowRightShort className="w-9 h-9" />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center w-full xs:w-56  h-40 bg-[#0079FF] rounded-xl sm:h-52 sm:w-64 md:w-80 lg:w-[400px]">
            <i>
              <GrNotes className="w-14 h-14" />
            </i>
            <Link
              className="flex mt-3"
              to={props.redirectSubjectsTake}
              title="Subjects take"
            >
              <p className="font-bold text-2xl">Take class</p>
              <BsArrowRightShort className="w-9 h-9" />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center w-full xs:w-56 h-40 bg-[#00DFA2] rounded-xl sm:h-52 sm:w-64 md:w-80 lg:w-[400px]">
            <i>
              <GrScorecard className="w-14 h-14" />
            </i>
            <Link className="flex mt-3" to={``} title="My tasks">
              <p className="font-bold text-2xl">My Tasks</p>
              <BsArrowRightShort className="w-9 h-9" />
            </Link>
          </div>
        </div>
        <ExitButton />
      </div>
    </div>
  );
};

export default Dashboard;
