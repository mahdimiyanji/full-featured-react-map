import { ImmerStateCreator } from "../types"
import { IMapMainSlice } from "./types"
import tileServersConfig from "./tileServersConfig.ts"

export const mapMainSlice: ImmerStateCreator<IMapMainSlice> = (set) => ({
  tiles: tileServersConfig,
  activeTile: tileServersConfig[1].uuid,
  
  setActiveTile: (tileId) => {
    set(state => {
      state.activeTile = tileId
    })
  }
})
