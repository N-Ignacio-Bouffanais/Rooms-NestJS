import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="flex w-full flex-col justify-center bg-[#ab2d4b] h-[91dvh]">
      <div className="flex flex-col items-center mx-auto space-y-2 text-center py-6 w-[340px] sm:w-[420px]">
        <h1 className="text-white text-2xl font-semibold tracking-tight my-2">
          Bienvenido
        </h1>
        <LoginForm />
        <p className="px-8 text-center text-sm ">
          No tienes un cuenta?{" "}
          <Link
            to="/register"
            className="hover:text-brand text-sm text-sky-700 font-semibold"
          >
            Registrarme
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
