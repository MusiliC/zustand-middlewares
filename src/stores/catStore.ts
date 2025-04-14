import { create, StateCreator } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "../utils/createSelectors";
import { devtools, persist } from "zustand/middleware";

type TCatStore = {
  cats: {
    bigCats: number;
    smallCats: number;
  };
  increaseBigCats: () => void;
  increaseSmallCats: () => void;
  summary: () => void;
};

const createCartSlice: StateCreator<
  TCatStore,
  [
    ["zustand/immer", never],
    ["zustand/devtools", unknown],
    ["zustand/subscribeWithSelector", never],
    ["zustand/persist", unknown]
  ]
> = (set, get) => ({
  cats: {
    bigCats: 0,
    smallCats: 0,
  },
  increaseBigCats: () =>
    set((state) => {
      state.cats.bigCats += 1;
    }),
  increaseSmallCats: () =>
    set((state) => {
      state.cats.smallCats += 1;
    }),
  summary: () => {
    const total = get().cats.bigCats + get().cats.smallCats;
    return `Total Cats: ${total}`;
  },
});

export const useCatStore = createSelectors(
  create<TCatStore>()(
    immer(
      devtools(
        persist(
          createCartSlice,

          {
            name: "cat-store",
          }
        ),
        {
          enabled: true,
          name: "CatStore",
          // if production change to false
        }
      )
    )
  )
);
