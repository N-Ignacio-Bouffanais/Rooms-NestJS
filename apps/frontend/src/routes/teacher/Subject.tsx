import { useParams } from "react-router-dom";
import ClassList from "../../components/ClassList";
import MyTasks from "../../components/MyTasks";
import { useAppStore } from "../../store/app";

const Subject = () => {
  let { classId } = useParams();
  const firstname = useAppStore((state) => state.firstname);
  const lastname = useAppStore((state) => state.lastname);
  return (
    <div className="dark:bg-slate-950 w-[100dvw] h-[100dvh] my-0">
      <div className="w-[90dvw] mx-auto bg-white dark:bg-slate-950">
        <h1 className="font-bold text-3xl text-blue-900 py-8 dark:text-white">
          Class: {classId}
        </h1>
        {classId && (
          <>
            <MyTasks
              url={`files/${classId}`}
              subjectName={classId}
              username={firstname + lastname}
            />
            <ClassList subjectName={classId} />
          </>
        )}
      </div>
    </div>
  );
};

export default Subject;
