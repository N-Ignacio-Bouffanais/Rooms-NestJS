import { useParams } from "react-router-dom";
import ClassList from "../../components/ClassList";

const Subject = () => {
  let { classId } = useParams();
  return (
    <div className="dark:bg-slate-950 w-[100dvw] h-[100dvh] my-0">
      <div className="w-[90dvw] mx-auto bg-white dark:bg-slate-950">
        <h1 className="font-bold text-3xl text-blue-900 py-8 dark:text-white">
          Class: {classId}
        </h1>
        <ClassList subjectName={classId} />
      </div>
    </div>
  );
};

export default Subject;
