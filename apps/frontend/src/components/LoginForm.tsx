import { useForm } from "react-hook-form";
import axios from "../libs/axios";
import { useAppStore } from "../store/app";
import { useNavigate } from "react-router-dom";
import {AiOutlineEye} from "react-icons/ai";
import jwt_decode from "jwt-decode";

interface Props {
  redirectTo: string;
  endpoint: string;
}

interface Decoded{
  role: string;
  firstname: string;
  lastname: string;
  email: string;
}

function LoginForm(props: Props) {
  const { endpoint } = props;
  const setToken = useAppStore((state) => state.setToken);
  const setRole = useAppStore((state) => state.setRole);
  const setFirstname = useAppStore((state) => state.setfirstname);
  const setLastname = useAppStore((state) => state.setlastname);
  const setEmail = useAppStore((state) => state.setEmail);
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
    const token  = response.data;
    setToken(token);
    if(token){
      const decoded: Decoded = jwt_decode(token);
      setRole(decoded.role);

      setFirstname(decoded.firstname);
      setLastname(decoded.lastname);
      setEmail(decoded.email);
      navigate(props.redirectTo);
      reset();
    }
    
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
    <form onSubmit={onSubmit} className="flex flex-col items-center gap-3">
      <div>
        <label
          htmlFor="email"
          className="flex justify-start font-medium text-sm dark:text-white"
        >
          What is your Email?
        </label>
        <input
          autoFocus
          placeholder="example@example.com"
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Email is not valid",
            },
          })}
          className="w-80 mb-2 h-8 pl-2 font-medium bg-white rounded-md outline-none placeholder:text-gray-500 placeholder:font-medium"
        />
      </div>
      {errors.email && (
        <span className="flex font-bold text-left w-80 items-center mb-1">
          {errors.email.message}
        </span>
      )}
      <div>
        <label
          htmlFor="password"
          className="flex justify-start font-medium text-sm dark:text-white"
        >
          What is your Password?
        </label>
        <div className="relative">
          <input
            placeholder="******"
            id="password"
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "The password is required",
              },
              minLength: {
                value: 6,
                message: "The password is must be at least 6 characters",
              },
            })}
            className="w-80 mb-2 h-8 pl-2 font-medium bg-white rounded-md outline-none placeholder:text-gray-500 placeholder:font-medium"
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
        <span className=" font-bold text-left w-80 sm:w-96 sm:text-center mb-1">
          {errors.password.message}
        </span>
      )}

      <div className="flex justify-center h-10 mt-3 mb-1">
        <button
          type="submit"
          className="flex justify-center items-center w-80 bg-blue-700 p-3 rounded-full text-white text-lg font-medium hover:bg-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
