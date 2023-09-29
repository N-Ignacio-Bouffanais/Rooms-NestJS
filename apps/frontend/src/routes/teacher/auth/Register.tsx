import { Link } from "react-router-dom";
import RegisterForm from "../../../components/RegisterForm";


const Register = () => {
  return (
    <div className="flex w-full flex-col justify-center bg-[#ab2d4b] h-[91dvh]">
      <div className="flex flex-col items-center mx-auto text-center w-[340px] sm:w-[420px]">
        <h1 className="text-white text-4xl font-bold tracking-tight mb-3">
          Bienvenido
        </h1>
        <RegisterForm />
        <Link
          to="/profesor/login"
          className="flex justify-center items-center w-80 bg-white h-10 p-3 m-3 rounded-full text-blue-600 text-lg font-medium hover:bg-slate-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
