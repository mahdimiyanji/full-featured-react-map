import { create } from "zustand"
import { IMapStore } from "./types.ts"
import { immer } from "zustand/middleware/immer"
import tileServers from "./tileServers.ts"

const useMapStore = create<IMapStore>()(
  immer((set, getState) => ({
    tiles: tileServers,
    activeTile: tileServers[1].uuid,
    showBuildings: true,
    buildingsTileUrl: "https://api.maptiler.com/tiles/v3-openmaptiles/tiles.json?key=o8iIkgKwbGcsp7zAKldE",
    
    setActiveTile: (tileId) => {
      set(state => {
        state.activeTile = tileId
      })
    },
    
    setShowBuildings: (show) => {
      set(state => {
        state.showBuildings = show
      })
    }
  }))
)

export default useMapStore