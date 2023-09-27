import {create} from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string;
  username: string;
  rol: string;
  isAuth: boolean;
};

type Actions = {
  setToken: (token: string) => void;
  setUsername: (username: string) => void;
  setRol: (rol: string) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: "",
      username: "",
      rol: "",
      isAuth: false,
      setToken: (token: string) =>
        set(() => ({
          token,
          isAuth: !!token,
        })),
      setUsername: (username: string) =>
        set(() => ({
          username
        })),
      setRol: (rol: string) => set(() => ({rol})),
      logout: () => set(() => ({ token: "", isAuth: false })),
    }),
    {
      name: "auth",
    }
  )
);
