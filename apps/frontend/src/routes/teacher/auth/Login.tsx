import { Link } from "react-router-dom";
import LoginForm from "../../../components/LoginForm";
import BackButton from "../../../components/BackButton";

const Login = () => {
  return (
    <div className="flex w-full flex-col justify-center bg-gradient-to-r from-red-600 to-violet-900 h-[100dvh]">
      <div className="flex flex-col items-center mb-6 mx-auto space-y-3 text-center py-6 w-[340px] sm:w-[420px]">
        <LoginForm
          endpoint="/auth/professor/login"
          redirectTo="/professor/dashboard"
        />
        <Link
          to="/profesor/register"
          className="flex justify-center items-center w-80 bg-white h-10 p-3 m-3 rounded-full text-blue-600 text-lg font-medium hover:bg-slate-300"
        >
          Register
        </Link>
        <BackButton />
      </div>
    </div>
  );
};

export default Login;
