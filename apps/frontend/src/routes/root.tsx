import { DiAtom } from "react-icons/di";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center bg-[#526D82] h-[100dvh] w-full">
      <div className=" bg-[#F0F0F0] h-[90dvh] w-[90dvw] mx-auto rounded-xl p-8 sm:p-12 ">
        <h1 className="justify-center text-4xl flex flex-wrap font-bold my-6 sm:text-5xl">
          Bienvenido a{" "}
          <span className="flex items-center text-[#2192FF]">
            <DiAtom className="h-8 w-8" />
            AtomCenter
          </span>
        </h1>
        <p className="font-medium">
          En esta pagina institucional podra subir trabajos en formato PDF, PNG,
          JPEG y mas utilizando el rol <span>Estudiante</span> y podra
          calificarlos como <span>Profesor.</span> Ademas cada trabajo estara
          asignado a una clase en particular.
        </p>

        <div className="flex flex-wrap items-center justify-center mt-6">
          <button
            type="button"
            onClick={() => {
              navigate("/estudiante/login");
            }}
            className="flex justify-center items-center w-44 bg-[#4942E4] h-10 p-3 m-3 rounded-xl text-white font-medium hover:bg-[#40128B]"
          >
            Soy Estudiante
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/profesor/login");
            }}
            className="flex justify-center items-center w-44 bg-[#05BFDB] h-10 p-3 m-3 rounded-xl text-white font-medium hover:bg-[#016A70]"
          >
            Soy Profesor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
