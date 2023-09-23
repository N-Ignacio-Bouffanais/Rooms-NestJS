

function AuthForm() {
  return (
    <div className="">
      <form className="flex flex-col">
        <label htmlFor="">Correo</label>
        <input type="email" />
        <label htmlFor="">Contraseña</label>
        <input type="password" />
        <label htmlFor="">Eres Estudiante o Profesor?</label>
        <select name="rol" id="rol">
          <option value="estudiante">Estudiante</option>
          <option value="profesor">Profesor</option>
        </select>
        <label>Acepto los términos y condiciones</label>
        <input type="checkbox" required />
        <button type="submit" className="">Enviar</button>
      </form>
    </div>
  );
}

export default AuthForm