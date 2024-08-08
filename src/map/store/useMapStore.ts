import { create } from "zustand"
import { subscribeWithSelector } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import { buildingsSlice } from "./slices/buildings/buildingsSlice.ts"
import { mapMainSlice } from "./slices/main/mapMainSlice.ts"
import { terrainSlice } from "./slices/terrain/terrainSlice.ts"
import { IMapStore } from "./types.ts"

const useMapStore = create<IMapStore>(
  subscribeWithSelector(
    immer((...params) => ({
      ...mapMainSlice(...params),
      ...buildingsSlice(...params),
      ...terrainSlice(...params)
    })))
)

export default useMapStore