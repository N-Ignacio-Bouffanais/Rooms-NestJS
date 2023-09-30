import { Link } from "react-router-dom";
import LoginForm from "../../../components/LoginForm";
import BackButton from "../../../components/BackButton";

const Login = () => {
  return (
    <div className="flex w-full flex-col justify-center bg-[#ab2d4b] h-[100dvh]">
      <div className="flex flex-col items-center mx-auto space-y-3 text-center py-2 w-[340px] sm:w-[420px]">
        <h1 className="text-white text-4xl font-bold tracking-tight my-2">
          Login
        </h1>
        <LoginForm
          endpoint="/auth/student/login"
          redirectTo="/estudiante/panel-de-control"
        />
        <Link
          to="/estudiante/registro"
          className="flex justify-center items-center w-80 bg-white h-10 p-3 rounded-full text-blue-600 text-lg font-medium hover:bg-slate-300"
        >
          Registrarme
        </Link>
        <BackButton/>
      </div>
    </div>
  );
};

export default Login;
