import {create} from "zustand";
import { persist } from "zustand/middleware";

type State = {
  inscrpModal: boolean
  email: string;
  token: string;
  firstname: string;
  lastname: string;
  role: string;
  isAuth: boolean;
  selectSubject: string;
};

type Actions = {
  setSubjects: (selectSubject: string) => void;
  setModal: (inscrpModal: boolean) => void;
  setEmail: (email: string) => void;
  setToken: (token: string) => void;
  setfirstname: (firstname: string) => void;
  setlastname: (lastname: string) => void;
  setRole: (role: string) => void;
  logout: () => void;
};

export const useAppStore = create(
  persist<State & Actions>(
    (set) => ({
      selectSubject: "",
      inscrpModal: false,
      email: "",
      token: "",
      firstname: "",
      lastname: "",
      role: "",
      isAuth: false,
      setSubjects: (selectSubject) =>
        set(() => ({
          selectSubject,
        })),
      setModal: (inscrpModal) =>
        set(() => ({
          inscrpModal: !inscrpModal,
        })),
      setEmail: (email) =>
        set(() => ({
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
          email: "",
          token: "",
          isAuth: false,
          role: "",
          firstname: "",
          lastname: "",
          selectSubject: "",
        })),
    }),
    {
      name: "appStore",
    }
  )
);
