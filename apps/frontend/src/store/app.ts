import {create} from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string;
  firstname: string;
  lastname: string;
  role: string;
  isAuth: boolean;
  InsSubjects: [];
  subjects:[]
};

type Actions = {
  setToken: (token: string) => void;
  setfirstname: (firstname: string) => void;
  setlastname: (lastname: string) => void;
  setRole: (role: string) => void;
  logout: () => void;
  getSubjects: (firstname:string, lastname:string) => Promise<void>;
  getAllSubjects: () => Promise<void>;
};

export const useAppStore = create(
  persist<State & Actions>(
    (set) => ({
      token: "",
      firstname: "",
      lastname: "",
      role: "",
      InsSubjects: [],
      subjects:[],
      isAuth: false,
      setToken: (token: string) =>
        set(() => ({
          token,
          isAuth: !!token,
        })),
      setfirstname: (firstname: string) =>
        set(() => ({
          firstname,
        })),
      setlastname: (lastname: string) =>
        set(() => ({
          lastname,
        })),
      setRole: (role: string) => set(() => ({ role })),
      logout: () =>
        set(() => ({
          token: "",
          isAuth: false,
          role: "",
          firstname: "",
          lastname: "",
        })),
      getSubjects: async (firstname: string, lastname: string) => {
        const InsSubjects = await (
          await fetch(
            `http://localhost:3001/estudiante/${firstname}-${lastname}`
          )
        ).json();
        set((state) => ({ ...state, InsSubjects }));
      },
      getAllSubjects: async ()=>{
        const subjects = await(
          await fetch(`http://localhost:3001/estudiante`)
        ).json();
        set((state) => ({ ...state, subjects }));
      },
    }),
    {
      name: "appStore",
    }
  )
);
