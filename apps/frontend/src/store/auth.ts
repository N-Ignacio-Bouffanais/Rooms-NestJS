import {create} from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string;
  username: string;
  role: string;
  isAuth: boolean;
};

type Actions = {
  setToken: (token: string) => void;
  setUsername: (username: string) => void;
  setRole: (role: string) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: "",
      username: "",
      role: "",
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
      setRole: (role: string) => set(() => ({role})),
      logout: () => set(() => ({ token: "", isAuth: false, role: "", username:""  })),
    }),
    {
      name: "auth",
    }
  ),

);
