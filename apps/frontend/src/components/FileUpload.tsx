import { useMutation } from "@tanstack/react-query";
import axios from "../libs/axios";
import { FormEvent, useState } from "react";
import queryClient from "../queryClient";

type Props = {
  subjectName: string;
  username: string;
};

interface Data {}

const FileUpload = (props: Props) => {
  const [file, setFile] = useState(null as File | null);

  const { data, isPending, error, mutate } = useMutation({
    mutationFn: async () => {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const { data } = await axios.post(
          `files/${props.subjectName}/${props.username}`,
          formData
        );
        console.log(data);
        return data as Data;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Sending..:", file);
    mutate();
  };

  return (
    <div>
      <div>
        <ul>{isPending ? "Loading..." : JSON.stringify(data)}</ul>
        <span>{error?.message}</span>
      </div>
      <form className="flex items-center space-x-6 mt-2 mb-6" onSubmit={onSubmit}>
        <input
          type="file"
          name="files"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files && e.target.files[0];
            setFile(file);
          }}
          className="block w-full text-sm text-slate-500 dark:text-white
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:h-11
      file:bg-blue-600 file:text-white
      hover:file:bg-blue-700
      
    "
        />
        <button className="rounded-md bg-red-600 w-36 h-10 font-medium text-white hover:bg-red-700 cursor-pointer" type="submit" disabled={!file}>Send</button>
      </form>
    </div>
  );
};

export default FileUpload;
