import { useParams } from "react-router-dom";

const Subject = () =>{
  let { id } = useParams();
  return (
    <div className="w-[90dvw] mx-auto">
      <h1 className="font-bold text-3xl text-blue-900 my-6">{id}</h1>
      <div>
        <input type="file"/>
      </div>
      <ul>
        <li>
          <div>
            <p>Nombre del archivo:</p>
            <p>Fecha</p>
            <p>Tipo o extension del archivo</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Subject;