import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type TBearStoreState = {
  bears: number;
  color: string;
  size: string;
  increasePopulation: () => void;
  removeAllBears: () => void;
  getOwner: () => Promise<string>;
  reset: () => void;
};

export const useBearStore = create<TBearStoreState>()(
  devtools(
    persist(

      (set) => ({
        bears: 0,
        color: "brown",
        size: "large",
        increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
        removeAllBears: () => set({ bears: 0 }),
        getOwner: async () => {
          const response = await fetch(
            "https://api.github.com/users/nikolausss"
          );
          const data = await response.json();
          return data.login;
        },
        reset: () => set({ bears: 0 }),
      }),
      
      {
        name: "bear-store", // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage),
        // partialize: (state) => ({bears: state.bears}), // only persist the bears property
        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(([key]) => !["size"].includes(key))
          ),
      }
    ),
    {
      enabled: true,
      name: "BearStore",
    }
  )
);
