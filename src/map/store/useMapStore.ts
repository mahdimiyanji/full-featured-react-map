import { create } from "zustand"
import { IMapStore } from "./types.ts"
import { immer } from "zustand/middleware/immer"
import { mapMainSlice } from "./slices/main/mapMainSlice.ts"
import { buildingsSlice } from "./slices/buildings/buildingsSlice.ts"
import { terrainSlice } from "./slices/terrain/terrainSlice.ts"

const useMapStore = create<IMapStore>()(
  immer((...params) => ({
    ...mapMainSlice(...params),
    ...buildingsSlice(...params),
    ...terrainSlice(...params)
  }))
)

export default useMapStore