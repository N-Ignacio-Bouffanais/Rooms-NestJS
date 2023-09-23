import { useForm } from "react-hook-form";

function RegisterForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
      correo: "",
      password: "",
      confirmarPassword: "",
      aceptaTerminos: false,
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center">
      <div>
        <label
          htmlFor=""
          className="flex justify-start font-medium text-white text-lg"
        >
          Nombre de Usuario
        </label>
        <input
          type="nombre"
          placeholder="Ingrese su Nombre"
          className="w-80 mb-2 h-8 pl-2 font-medium bg-white rounded-md outline-none placeholder:text-gray-600 placeholder:font-medium"
        />
      </div>
      <div>
        <label
          htmlFor=""
          className="flex justify-start font-medium text-white text-lg"
        >
          Correo
        </label>
        <input
          type="email"
          placeholder="Ingrese su Correo"
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
          className="w-80 mb-2 h-8 pl-2 font-medium bg-white rounded-md outline-none placeholder:text-gray-600 placeholder:font-medium"
        />
        {errors.correo && (
          <span className="text-red-500 font-semibold text-left">
            {errors.correo.message}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor=""
          className="flex justify-start font-medium text-white text-lg"
        >
          Contraseña
        </label>
        <input
          type="password"
          placeholder="******"
          className=" w-80 mb-2 h-8 pl-2 font-medium bg-white rounded-md outline-none placeholder:text-gray-600 placeholder:font-medium"
        />
      </div>
      <div>
        <label className="flex justify-start font-medium text-white text-lg">
          Confirmar Contraseña:
        </label>
        <input
          type="password"
          placeholder="******"
          name="confirmarPassword"
          className="w-80 mb-2 h-8 pl-2 font-medium bg-white rounded-md outline-none placeholder:text-gray-600 placeholder:font-medium"
        />
      </div>
      <div>
        <label
          htmlFor=""
          className="flex justify-start font-medium text-white text-lg"
        >
          Eres Estudiante o Profesor?
        </label>
        <select
          name="rol"
          id="rol"
          className="flex w-80 mb-2 h-8 pl-2 font-medium bg-white rounded-md outline-none placeholder:text-gray-600 placeholder:font-medium"
        >
          <option value="estudiante">Estudiante</option>
          <option value="profesor">Profesor</option>
        </select>
      </div>
      <div className="flex">
        <label className="flex justify-start font-medium text-white text-lg">
          Acepto los términos y condiciones
        </label>
        <input type="checkbox" required className="ml-2" />
      </div>
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

export default RegisterForm;
