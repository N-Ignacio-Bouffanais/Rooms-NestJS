function LoginForm() {
  return (
    <form className="flex flex-col">
      <label
        htmlFor=""
        className="flex justify-start font-medium text-slate-800"
      >
        Correo
      </label>
      <input
        type="email"
        className="outline-blue-600 mb-2 h-8 pl-2 border-2 border-slate-800 rounded-md"
      />
      <label
        htmlFor=""
        className="flex justify-start font-medium text-slate-800"
      >
        Contraseña
      </label>
      <input
        type="password"
        className="outline-blue-600 mb-2 h-8 pl-2 border-2 border-slate-800 rounded-md"
      />
      <label
        htmlFor=""
        className="flex justify-start font-medium text-slate-800"
      >
        Rol
      </label>
      <select className="focus:border-blue-600 mb-2 h-8 border-2 border-slate-800 rounded-md font-medium">
        <option value="estudiante" className="font-medium">
          Estudiante
        </option>
        <option value="profesor" className="font-medium">
          Profesor
        </option>
      </select>
      <div className="flex">
        <label className="mr-2">Acepto los términos y condiciones</label>
        <input type="checkbox" required />
      </div>
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
