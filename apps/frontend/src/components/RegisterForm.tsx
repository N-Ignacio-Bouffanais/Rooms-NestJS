function RegisterForm() {
  return (
    <form className="flex flex-col">
      <label htmlFor="" className="flex">Nombre</label>
      <input type="nombre" className="outline-blue-600" />
      <label htmlFor="">Correo</label>
      <input type="email" className="outline-blue-600" />
      <label htmlFor="">Contraseña</label>
      <input type="password" className="outline-blue-600" />
      <label htmlFor="">Eres Estudiante o Profesor?</label>
      <select name="rol" id="rol">
        <option value="estudiante">Estudiante</option>
        <option value="profesor">Profesor</option>
      </select>
      <label>Acepto los términos y condiciones</label>
      <input type="checkbox" required />
      <button
        type="submit"
        className="flex justify-center items-center w-36 bg-blue-600 h-10 p-3 m-3 rounded-xl text-white font-medium hover:bg-blue-700"
      >
        Enviar
      </button>
    </form>
  );
}

export default RegisterForm;
