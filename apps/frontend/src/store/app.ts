import {create} from "zustand";
import { persist } from "zustand/middleware";

type State = {
  email: string;
  token: string;
  firstname: string;
  lastname: string;
  role: string;
  isAuth: boolean;
  InsSubjects: [];
  subjects:[];
};

type Actions = {
  setEmail: (email: string) => void;
  setToken: (token: string) => void;
  setfirstname: (firstname: string) => void;
  setlastname: (lastname: string) => void;
  setRole: (role: string) => void;
  logout: () => void;
  getSubjects: (firstname: string, lastname: string) => Promise<void>;
  getAllSubjects: (firstname: string, lastname: string) => Promise<void>;
};

export const useAppStore = create(
  persist<State & Actions>(
    (set) => ({
      email: "",
      token: "",
      firstname: "",
      lastname: "",
      role: "",
      InsSubjects: [],
      subjects: [],
      isAuth: false,
      setEmail: (email)=> 
      set(()=>({
        email,
      })),
      setToken: (token) =>
        set(() => ({
          token,
          isAuth: !!token,
        })),
      setfirstname: (firstname) =>
        set(() => ({
          firstname,
        })),
      setlastname: (lastname) =>
        set(() => ({
          lastname,
        })),
      setRole: (role) => set(() => ({ role })),
      logout: () =>
        set(() => ({
          email:"",
          token: "",
          isAuth: false,
          role: "",
          firstname: "",
          lastname: "",
          InsSubjects: [],
          subjects: [],
        })),
      getSubjects: async (firstname, lastname) => {
        const InsSubjects = await (
          await fetch(
            `http://localhost:3001/estudiante/${firstname}-${lastname}`
          )
        ).json();
        set((state) => ({ ...state, InsSubjects }));
      },
      getAllSubjects: async (firstname, lastname) => {
        const subjects = await(
          await fetch(
            `http://localhost:3001/estudiante/${firstname}-${lastname}`
          )
        ).json();
        set((state) => ({ ...state, subjects }));
      },
    }),
    {
      name: "appStore",
    }
  )
);
