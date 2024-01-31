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
    terrainConfig: {
      terrainTileUrl: "https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json?key=o8iIkgKwbGcsp7zAKldE",
      hillshadeTileUrl: "https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json?key=o8iIkgKwbGcsp7zAKldE",
      hillShade: true,
      terrain: true,
      exaggeration: 1
    },
    
    setActiveTile: (tileId) => {
      set(state => {
        state.activeTile = tileId
      })
    },
    
    setShowBuildings: (show) => {
      set(state => {
        state.showBuildings = show
      })
    },
    
    changeTerrainProperty: (property, value) => {
      set(state => {
        if (property === "terrain" && typeof value === "boolean") {
          state.terrainConfig.terrain = value
        }
        else if (property === "hillShade" && typeof value === "boolean") {
          state.terrainConfig.hillShade = value
        }
        else if (property === "exaggeration" && typeof value === "number") {
          state.terrainConfig.exaggeration = value
        }
        else {
          console.error("Value is not valid for this property.")
        }
      })
    }
  }))
)

export default useMapStore