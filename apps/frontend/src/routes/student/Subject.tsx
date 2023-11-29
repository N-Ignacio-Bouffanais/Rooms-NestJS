import { useParams } from "react-router-dom";
import ClassList from "../../components/ClassList";
import FileUpload from "../../components/FileUpload";
import { useAppStore } from "../../store/app";
import MyTasks from "../../components/MyTasks";
import BackButton from "../../components/BackButton";

const Subject = () => {
  let { classId } = useParams();
  const firstname = useAppStore((state) => state.firstname);
  const lastname = useAppStore((state) => state.lastname);

  return (
    <div className="dark:bg-[#0c1942] w-[100dvw] h-[100dvh] my-0">
      <div className="w-[90dvw] mx-auto bg-white dark:bg-[#0c1942]">
        <h1 className="font-bold text-4xl py-11 dark:text-white">
          Class: {classId}
        </h1>
        {classId && (
          <>
            <FileUpload subjectName={classId} username={firstname + lastname} />
            <MyTasks subjectName={classId} username={firstname + lastname} />
            <ClassList subjectName={classId} />
          </>
        )}
        <div className="flex justify-center mb-8">
          <BackButton redirectTo="/student/dashboard" />
        </div>
      </div>
    </div>
  );
};

export default Subject;
