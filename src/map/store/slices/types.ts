import { StateCreator } from "zustand"

// this type is useful when use slice pattern with immer
export type ImmerStateCreator<T> = StateCreator<
  T,
  [["zustand/immer", never]],
  [],
  T
>