import axios from "../libs/axios";
import { useForm } from "react-hook-form";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../store/app";

interface Props {
  redirectTo: string;
  endpoint: string;
}

function RegisterForm(props: Props) {
  const { endpoint, redirectTo } = props;
  const { AcceptTerms,setTerms} = useAppStore()

  const navigate = useNavigate();

  type FormData = {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
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
      firstname: data.firstname,
      lastname: data.lastname,
    });
    console.log(response);
    navigate(redirectTo);
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

  function ChangeVisibility2() {
    let y = document.getElementById("confirmarPassword") as HTMLInputElement;
    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center">
      <div>
        <label
          htmlFor=""
          className="flex justify-start font-medium text-white text-lg "
        >
          Name
        </label>
        <input
          placeholder="Enter your name"
          type="text"
          {...register("firstname", {
            required: true,
          })}
          className="w-80 mb-2 h-8 pl-2 font-medium bg-white rounded-md outline-none placeholder:text-gray-600 placeholder:font-medium"
        />
        {errors.firstname && (
          <span className="text-red-500 font-semibold text-left">
            {errors.firstname.message}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor=""
          className="flex justify-start font-medium text-white text-lg "
        >
          Lastname
        </label>
        <input
          placeholder="Enter your lastname"
          type="text"
          {...register("lastname", {
            required: true,
          })}
          className="w-80 mb-2 h-8 pl-2 font-medium bg-white rounded-md outline-none placeholder:text-gray-600 placeholder:font-medium"
        />
        {errors.lastname && (
          <span className="text-red-500 font-semibold text-left">
            {errors.lastname.message}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor=""
          className="flex justify-start font-medium text-white text-lg "
        >
          Email
        </label>
        <input
          type="email"
          placeholder="enter your email"
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
          className="w-80 mb-2 h-8 pl-2 font-medium bg-white rounded-md outline-none placeholder:text-gray-600 placeholder:font-medium"
        />
        {errors.email && (
          <span className="text-red-500 font-semibold text-left">
            {errors.email.message}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor=""
          className="flex justify-start font-medium text-white text-lg "
        >
          Password
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
      <div>
        <label className="flex justify-start font-medium text-white text-lg">
          Confirm Password:
        </label>
        <div className="relative">
          <input
            placeholder="******"
            id="confirmPassword"
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
            className="w-80 mb-2 h-8 pl-2 font-medium bg-white rounded-md outline-none placeholder:text-gray-600 placeholder:font-medium"
          />
          <i className="absolute right-2 top-2">
            <AiOutlineEye
              className="cursor-pointer"
              onClick={ChangeVisibility2}
            />
          </i>
        </div>
      </div>
      <div className="flex">
        <label className="flex justify-start font-medium text-white text-lg">
          I accept the terms and conditions
        </label>
        <input
          type="checkbox"
          required
          className="ml-2"
          onClick={() => {
            setTerms(AcceptTerms);
          }}
        />
      </div>
      <div className="flex justify-center">
        <button
          disabled={AcceptTerms}
          type="submit"
          className="flex justify-center items-center w-80 bg-blue-700 h-10 p-3 m-3 rounded-full text-white text-lg font-medium hover:bg-blue-800 disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
