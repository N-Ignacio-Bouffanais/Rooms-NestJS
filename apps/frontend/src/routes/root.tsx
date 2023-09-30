import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#aab3bd] h-[100dvh] w-[100dvw]">
      <div>
        <h1 className="">Bienvenido</h1>
        <button
          type="button"
          onClick={() => {
            navigate("/estudiante/login");
          }}
          className="flex justify-center items-center w-36 bg-black h-10 p-3 m-3 rounded-xl text-white font-medium hover:bg-slate-900"
        >
          Soy Estudiante
        </button>
        <button
          type="button"
          onClick={() => {
            navigate("/profesor/login");
          }}
          className="flex justify-center items-center w-36 bg-black h-10 p-3 m-3 rounded-xl text-white font-medium hover:bg-slate-900"
        >
          Soy Profesor
        </button>
      </div>
    </div>
  );
};

export default Home;
