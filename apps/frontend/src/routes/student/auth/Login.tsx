import { Link } from "react-router-dom";
import LoginForm from "../../../components/LoginForm";
import BackButton from "../../../components/BackButton";

const Login = () => {
  return (
    <div className="flex w-full flex-col justify-center bg-slate-300 dark:bg-[#121622] h-[100dvh]">
      <div className="flex flex-col items-center mb-6 mx-auto space-y-3 text-center w-[340px] sm:w-[420px]">
        <LoginForm
          endpoint="/auth/student/login"
          redirectTo="/student/dashboard"
        />
        <Link
          to="/student/register"
          className="flex justify-center items-center w-80 bg-white h-10 p-3 rounded-full text-blue-600 text-lg font-medium hover:bg-slate-300"
        >
          Register
        </Link>
        <BackButton redirectTo="/" />
      </div>
    </div>
  );
};

export default Login;
