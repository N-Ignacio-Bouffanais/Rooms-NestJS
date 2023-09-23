import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/login");
  return (
    <div>
      <h1>Home</h1>
      <button
        type="button"
        onClick={handleClick}
        className="flex justify-center items-center w-36 bg-black h-10 p-3 m-3 rounded-xl text-white font-medium hover:bg-slate-900"
      >
        Iniciar sesion
      </button>
    </div>
  );
};

export default Home;
