const FileUpload = () => {
  return (
    <div>
      <div>
        <h2 className="font-bold text-xl py-4 dark:text-white">
          My tasks:
        </h2>
        <ul></ul>
      </div>
      <form className="flex items-center space-x-6 my-6">
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input
            type="file"
            className="block w-full text-sm text-slate-500 dark:text-white
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
      
    "
          />
        </label>
      </form>
    </div>
  );
};

export default FileUpload;
