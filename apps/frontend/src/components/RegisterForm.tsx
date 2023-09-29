import { useForm } from "react-hook-form";
import { AiOutlineEye } from "react-icons/ai";

function RegisterForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      confirmarPassword: "",
      aceptaTerminos: false,
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
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
          className="flex justify-start font-medium text-white "
        >
          Nombre
        </label>
        <input
          placeholder="ingrese su nombre"
          type="text"
          {...register("nombre", {
            required: true,
          })}
          className="w-80 mb-2 h-8 pl-2 font-medium bg-white rounded-md outline-none placeholder:text-gray-600 placeholder:font-medium"
        />
      </div>
      <div>
        <label
          htmlFor=""
          className="flex justify-start font-medium text-white "
        >
          Apellido
        </label>
        <input
          placeholder="ingrese su apellido"
          type="text"
          {...register("apellido", {
            required: true,
          })}
          className="w-80 mb-2 h-8 pl-2 font-medium bg-white rounded-md outline-none placeholder:text-gray-600 placeholder:font-medium"
        />
      </div>
      <div>
        <label
          htmlFor=""
          className="flex justify-start font-medium text-white "
        >
          Correo
        </label>
        <input
          type="email"
          placeholder="ingrese su correo"
          {...register("email", {
            required: {
              value: true,
              message: "Correo es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Correo no válido",
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
          className="flex justify-start font-medium text-white "
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
      <div>
        <label className="flex justify-start font-medium text-white">
          Confirmar Contraseña:
        </label>
        <div className="relative">
          <input
            placeholder="******"
            id="confirmarPassword"
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
              onClick={ChangeVisibility2}
            />
          </i>
        </div>
      </div>
      <div className="flex">
        <label className="flex justify-start font-medium text-white ">
          Acepto los términos y condiciones
        </label>
        <input type="checkbox" required className="ml-2" />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="flex justify-center items-center w-80 bg-blue-600 h-10 p-3 m-3 rounded-full text-white  font-medium hover:bg-blue-700"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
