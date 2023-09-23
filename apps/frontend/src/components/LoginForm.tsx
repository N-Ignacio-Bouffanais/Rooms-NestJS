import {useForm} from "react-hook-form";


function LoginForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      correo: "@example.com",
      password: "",
    },
  });

  
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });


  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      <label
        htmlFor="correo"
        className="flex justify-start font-medium text-slate-800"
      >
        Correo
      </label>
      <input
        type="email"
        {...register("correo", {
          required: {
            value: true,
            message: "Correo es requerido",
          },
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Correo no válido",
          },
        })}
        className="w-72 outline-blue-600 mb-2 h-8 pl-2 border-2 border-slate-800 rounded-md"
      />
      {errors.correo && (
        <span className="text-red-500 font-semibold text-left">
          {errors.correo.message}
        </span>
      )}
      <label
        htmlFor="password"
        className="flex justify-start font-medium text-slate-800"
      >
        Contraseña
      </label>
      <input
        type="password"
        {...register("password", {
          required: {
            value: true,
            message: "Contraseña es requerida",
          },
          minLength: {
            value: 6,
            message: "Contraseña debe ser mayor a 6 caracteres",
          },
        })}
        className="w-72 outline-blue-600 mb-2 h-8 pl-2 border-2 border-slate-800 rounded-md"
      />
      {errors.password && (
        <span className="text-red-500 font-semibold text-left w-72 sm:w-full">
          {errors.password.message}
        </span>
      )}

      <div className="flex justify-center">
        <button
          type="submit"
          className="flex justify-center items-center w-36 bg-blue-600 h-10 p-3 m-3 rounded-xl text-white font-medium hover:bg-blue-700"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
