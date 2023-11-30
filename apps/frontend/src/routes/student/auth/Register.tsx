import { Link } from "react-router-dom";
import RegisterForm from "../../../components/RegisterForm";
import BackButton from "../../../components/BackButton";


const Register = () => {
  return (
    <div className="flex w-full flex-col pt-16 bg-slate-300 dark:bg-[#121622] h-[100dvh]">
      <div className="flex flex-col items-center mx-auto text-center w-[340px] sm:w-[420px]">
        <RegisterForm redirectTo="/" endpoint="/auth/student/register" />
        <Link
          to="/student/login"
          className="flex justify-center items-center w-80 bg-white h-10 p-3 m-3 rounded-full text-blue-600 text-lg font-medium hover:bg-slate-300"
        >
          Login
        </Link>
        <BackButton redirectTo="/" />
      </div>
    </div>
  );
};

export default Register;
