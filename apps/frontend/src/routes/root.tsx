import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <button
        type="button"
        onClick={() => {
          navigate("/estudiantes/login");
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
  );
};

export default Home;
