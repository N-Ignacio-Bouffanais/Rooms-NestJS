import { RxCross2 } from "react-icons/rx";


function SubjectModal() {
  return (
    <div className="fixed inset-0 bg-zinc-900/20 z-10">
      <div className="container flex items-center h-full max-w-lg mx-auto">
        <div className="relative bg-white w-full h-fit py-8 px-4 rounded-lg">
          <div className="absolute top-4 right-4">
            <button onClick={() => {}}>
              <RxCross2 className="w-7 h-7" />
            </button>
          </div>
          <div className="flex justify-center">
            <p className="text-2xl font-bold">Estas seguro?</p>
          </div>
          <div className="flex justify-center my-3">
            <button
              onClick={() => {}}
              className="rounded-lg font-semibold mx-2 text-white w-12 h-10 bg-[#0177fb]"
            >
              Si
            </button>
            <button
              className="rounded-lg font-semibold mx-2 text-white w-12 h-10 bg-[#fb3b52]"
              onClick={() => {}}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubjectModal