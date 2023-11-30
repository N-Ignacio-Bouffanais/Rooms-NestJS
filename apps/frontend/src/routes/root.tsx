import { DiAtom } from "react-icons/di";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center bg-slate-300 dark:bg-[#121622] h-[100dvh] w-full">
      <div className=" bg-[#F0F0F0] w-[85dvw] mx-auto rounded-xl p-8 sm:p-12 mb-8 md:w-[80dvw] lg:w-[75dvw] dark:bg-[#282a37]">
        <h1 className="justify-center text-4xl flex flex-wrap font-bold mt-3 mb-4 sm:text-5xl md:text-6xl md:mb-6 dark:text-slate-300">
          Welcome
          <span className="flex items-center text-[#2192FF]">
            <DiAtom className="h-8 w-8" />
            AtomCenter
          </span>
        </h1>
        <p className="font-medium sm:text-lg text-justify my-2 dark:text-slate-300">
          On this institutional page you can upload works in PDF, PNG, JPEG and
          more using the role<span>Student</span> and you can calificate them as
          <span>Professor.</span> Additionally, each task is assigned to a
          particular class.
        </p>

        <div className="flex flex-col items-center mt-6">
          <button
            type="button"
            onClick={() => {
              navigate("/student/login");
            }}
            className="flex justify-center items-center w-52 bg-blue-600 h-11 p-3 m-3 rounded-xl text-white font-medium text-lg hover:bg-[#1e128b]"
          >
            I'm student
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/professor/login");
            }}
            className="flex justify-center items-center w-52 bg-[#fa2d38] h-11 p-3 m-3 rounded-xl text-white font-medium text-lg hover:bg-red-700"
          >
            I'm professor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
