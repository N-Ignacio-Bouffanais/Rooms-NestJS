import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  subjects: []
}

type Actions = {
  getSubjects: () => Promise<void>;
}

export const useAppStore = create(
  persist<State & Actions>(
    (set)=>({
      subjects: [],
      getSubjects: async ()=> {
        const subjects = await ( await fetch("https://jsonplaceholder.typicode.com/posts")).json();
        set((state) => ({ ...state, subjects }));
      }}),{
        name: 'subjects'
      }
  )
)