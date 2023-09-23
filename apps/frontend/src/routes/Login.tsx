import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Login = () => {
  return (
    <div className="flex w-full flex-col justify-center bg-slate-400 h-[91dvh]">
      <div className="flex flex-col items-center mx-auto space-y-2 text-center py-6 bg-white rounded-xl w-[340px]">
        <h1 className="text-2xl font-semibold tracking-tight">Bienvenido</h1>
        <AuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          No tienes un cuenta?{" "}
          <Link
            to="/register"
            className="hover:text-brand text-sm text-sky-700"
          >
            Registrarme
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
