import { Link } from "react-router-dom";

const Professor_Login = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col items-center space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Bienvenido de vuelta
        </h1>
        <p className="text-sm max-w-xs mx-auto">
          Al continuar, esta aceptando nuestro Acuerdo de usuario y Política de
          privacidad.
        </p>
      </div>
      <p className="px-8 text-center text-sm text-muted-foreground">
        No tienes un cuenta?{" "}
        <Link
          to="/professor/register"
          className="hover:text-brand text-sm underline underline-offset-4"
        >
          Registrarme
        </Link>
      </p>
    </div>
  );
};

export default Professor_Login;
