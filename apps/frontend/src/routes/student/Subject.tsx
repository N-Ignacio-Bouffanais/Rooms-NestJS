import { useParams } from "react-router-dom";
import ClassList from "../../components/ClassList";

const Subject = () => {
  let { classId } = useParams();
  return (
    <div className="w-[90dvw] mx-auto">
      <h1 className="font-bold text-3xl text-blue-900 my-6">{classId}</h1>
      <ClassList subjectName={classId} />
    </div>
  );
};

export default Subject;
