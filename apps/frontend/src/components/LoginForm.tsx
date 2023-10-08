import { useForm } from "react-hook-form";
import axios from "../libs/axios";
import { useAppStore } from "../store/app";
import { useNavigate } from "react-router-dom";
import {AiOutlineEye} from "react-icons/ai";

interface Props {
  redirectTo: string;
  endpoint: string;
}

function LoginForm(props: Props) {
  const { endpoint } = props;
  const setToken = useAppStore((state) => state.setToken);
  const setRole = useAppStore((state) => state.setRole);
  const setFirstname = useAppStore((state) => state.setfirstname);
  const setLastname = useAppStore((state) => state.setlastname);
  const navigate = useNavigate();

  type FormData = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    const response = await axios.post(`${endpoint}`, {
      email: data.email,
      password: data.password,
    });
    const { token, role, lastname, firstname } = response.data;
    setToken(token);
    setRole(role);
    setFirstname(firstname);
    setLastname(lastname);
    navigate(props.redirectTo);
    reset();
  });

function ChangeVisibility() {
  let x = document.getElementById("password") as HTMLInputElement;
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

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
          placeholder="ingrese su correo"
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
        <div className="relative">
          <input
            placeholder="******"
            id="password"
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
          <i className="absolute right-2 top-2">
            <AiOutlineEye
              className="cursor-pointer"
              onClick={ChangeVisibility}
            />
          </i>
        </div>
      </div>
      {errors.password && (
        <span className="text-black font-bold text-left w-80 sm:w-96 sm:text-center my-1">
          {errors.password.message}
        </span>
      )}

      <div className="flex justify-center h-10 mt-3 mb-1">
        <button
          type="submit"
          className="flex justify-center items-center w-80 bg-blue-700 p-3 rounded-full text-white text-lg font-medium hover:bg-blue-800"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
