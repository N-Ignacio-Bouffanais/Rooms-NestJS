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
      <div className="flex flex-col bg-slate-200 dark:bg-slate-950">
        <div className="w-[90dvw] mx-auto">
          <h1 className="flex justify-center font-bold text-2xl mt-10 mb-6 dark:text-white">
            Professor: {`${firstname} ${lastname}`}
          </h1>
          <div className="grid grid-cols-1 grid-rows-2 gap-y-6 my-6 xs:grid-cols-2">
            <div className="flex flex-col items-center justify-center w-full xs:w-56 h-40 bg-[#ff5e23] rounded-xl sm:h-52 sm:w-64 md:w-80 lg:w-[400px]">
              <i>
                <AiFillSchedule className="w-14 h-14" />
              </i>
              <Link
                className="flex mt-3"
                to={`/profesor/my-subjects/${firstname}-${lastname}`}
                title="My subjects"
              >
                <p className="font-bold text-2xl">My subjects</p>
                <BsArrowRightShort className="w-9 h-9" />
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center w-full xs:w-56 h-40 bg-[#00c0c2] rounded-xl sm:h-52 sm:w-64 md:w-80 lg:w-[400px]">
              <i>
                <GrScorecard className="w-14 h-14" />
              </i>
              <Link
                className="flex mt-3"
                to={`/professor/subjects-take/${firstname}-${lastname}`}
                title="Subjects take"
              >
                <p className="font-bold text-2xl">Subjects take</p>
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
