import { IMapMainSlice } from "./slices/main/types.ts"
import { IBuildingsSlice } from "./slices/buildings/types.ts"
import { ITerrainSlice } from "./slices/terrain/types.ts"

export type IMapStore =
  IMapMainSlice &
  IBuildingsSlice &
  ITerrainSlice