import {useForm} from "react-hook-form";
import axios from "axios";
import { useAuthStore } from "../store/auth";

function LoginForm() {

  const setToken = useAuthStore(state => state.setToken);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  
  const onSubmit = handleSubmit(async (data) => {
    const response = await axios.post("http://localhost:3001/auth/login",{
      email: data.email,
      password: data.password
    } );
    console.log(response)
    console.log(response.data.token)
    setToken(response.data.token);
    reset();
  });


  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center">
      <div>
        <label
          htmlFor="correo"
          className="flex justify-start font-medium text-white text-lg"
        >
          Correo
        </label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "El correo es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "El correo no es válido",
            },
          })}
          className="w-80 mb-2 h-8 pl-2 font-medium bg-white rounded-md outline-none placeholder:text-gray-600 placeholder:font-medium"
        />
      </div>
      {errors.email && (
        <span className="flex text-black font-bold text-left w-80 items-center my-1">
          {errors.email.message}
        </span>
      )}
      <div>
        <label
          htmlFor="password"
          className="flex justify-start font-medium text-white text-lg"
        >
          Contraseña
        </label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "La contraseña es requerida",
            },
            minLength: {
              value: 6,
              message: "La contraseña debe ser mayor a 6 caracteres",
            },
          })}
          className="w-80 mb-2 h-8 pl-2 font-medium bg-white rounded-md outline-none placeholder:text-gray-600 placeholder:font-medium"
        />
      </div>
      {errors.password && (
        <span className="text-black font-bold text-left w-80 sm:w-96 sm:text-center my-1">
          {errors.password.message}
        </span>
      )}

      <div className="flex justify-center">
        <button
          type="submit"
          className="flex justify-center items-center w-80 bg-blue-600 h-10 p-3 m-3 rounded-xl text-white text-lg font-medium hover:bg-blue-700"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
