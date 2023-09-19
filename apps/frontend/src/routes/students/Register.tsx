import { Link } from "react-router-dom";

const Students_Register = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col items-center space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Bienvenido</h1>
        <p className="text-sm max-w-xs mx-auto">
          
        </p>
      </div>
      <p className="px-8 text-center text-sm text-muted-foreground">
        Ya tienes una cuenta?{" "}
        <Link
          to="/students/login"
          className="hover:text-brand text-sm underline underline-offset-4"
        >
          Ingresar
        </Link>
      </p>
    </div>
  );
};

export default Students_Register;
