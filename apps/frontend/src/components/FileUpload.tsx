import { useMutation } from "@tanstack/react-query";
import axios from "../libs/axios";
import { FormEvent, useState } from "react";

interface Data {}

const FileUpload = () => {
  const [file, setFile] = useState(null as File | null);

  const { data, isPending, error, mutate } = useMutation({
    mutationFn: async () => {
      if(file){
        const formData = new FormData();
        formData.append("file", file);
        const { data } = await axios.post("files/images", formData);
        console.log(data);
        return data as Data;
      }
    },
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Enviando:",file);
    mutate();
  };

  return (
    <div>
      <div>
        <h2 className="font-bold text-xl py-4 dark:text-white">My tasks:</h2>
        <ul>{isPending ? "Loading..." : JSON.stringify(data)}</ul>
        <span>Error: {error?.message}</span>
      </div>
      <form className="flex items-center space-x-6 my-6" onSubmit={onSubmit}>
          <input
            type="file"
            name="files"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{
              const file = e.target.files && e.target.files[0]
              setFile(file);
            }
            }
            className="block w-full text-sm text-slate-500 dark:text-white
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
      
    "
          />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FileUpload;
