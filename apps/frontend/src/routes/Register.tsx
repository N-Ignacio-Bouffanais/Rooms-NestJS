import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Register = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col items-center space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Bienvenido</h1>
        <AuthForm />
        <p className="text-sm max-w-xs mx-auto">
          Al continuar esta aceptando nuestro Acuerdo de usuario y Política de
          privacidad.
        </p>
      </div>
      <p className="px-8 text-center text-sm text-muted-foreground">
        Ya tienes una cuenta?{" "}
        <Link
          to="/login"
          className="hover:text-brand text-sm underline underline-offset-4"
        >
          Ingresar
        </Link>
      </p>
    </div>
  );
};

export default Register;
