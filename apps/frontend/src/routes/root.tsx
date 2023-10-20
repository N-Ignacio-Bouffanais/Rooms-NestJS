import { DiAtom } from "react-icons/di";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 h-[100dvh] w-full">
      <div className=" bg-[#F0F0F0] w-[85dvw] mx-auto rounded-xl p-8 sm:p-12 mb-6 md:w-[80dvw] lg:w-[75dvw]">
        <h1 className="justify-center text-4xl flex flex-wrap font-bold mt-3 mb-4 sm:text-5xl md:text-6xl md:mb-6">
          Bienvenido a{" "}
          <span className="flex items-center text-[#2192FF]">
            <DiAtom className="h-8 w-8" />
            AtomCenter
          </span>
        </h1>
        <p className="font-medium sm:text-lg text-justify my-2">
          En esta pagina institucional podra subir trabajos en formato PDF, PNG,
          JPEG y mas utilizando el rol <span>Estudiante</span> y podra
          calificarlos como <span>Profesor.</span> Ademas cada trabajo estara
          asignado a una clase en particular.
        </p>

        <div className="flex flex-col items-center mt-6">
          <button
            type="button"
            onClick={() => {
              navigate("/estudiante/login");
            }}
            className="flex justify-center items-center w-52 bg-blue-600 h-11 p-3 m-3 rounded-xl text-white font-medium hover:bg-[#1e128b]"
          >
            Soy Estudiante
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/profesor/login");
            }}
            className="flex justify-center items-center w-52 bg-[#fa2d38] h-11 p-3 m-3 rounded-xl text-white font-medium hover:bg-red-700"
          >
            Soy Profesor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
