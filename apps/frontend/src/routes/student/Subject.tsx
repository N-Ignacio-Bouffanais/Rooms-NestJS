import { useParams } from "react-router-dom";
import ClassList from "../../components/ClassList";
import FileUpload from "../../components/FileUpload";

const Subject = () => {
  let { classId } = useParams();
  return (
    <div className="dark:bg-[#0c1942] w-[100dvw] h-[100dvh] my-0">
      <div className="w-[90dvw] mx-auto bg-white dark:bg-[#0c1942]">
        <h1 className="font-bold text-3xl py-8 dark:text-white">
          Class: {classId}
        </h1>
        <FileUpload />

        <ClassList subjectName={classId} />
      </div>
    </div>
  );
};

export default Subject;
