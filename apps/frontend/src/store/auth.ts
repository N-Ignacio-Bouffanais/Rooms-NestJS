import {create} from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string;
  firstname: string;
  lastname: string;
  role: string;
  isAuth: boolean;
};

type Actions = {
  setToken: (token: string) => void;
  setfirstname: (firstname: string) => void;
  setlastname: (lastname: string) => void;
  setRole: (role: string) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: "",
      firstname: "",
      lastname: "",
      role: "",
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
        set(() => ({ token: "", isAuth: false, role: "", firstname: "", lastname:"" })),
    }),
    {
      name: "auth",
    }
  )
);
