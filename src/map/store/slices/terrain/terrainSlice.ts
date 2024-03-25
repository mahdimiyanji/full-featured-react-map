import { ImmerStateCreator } from "../types"
import { ITerrainSlice } from "./types"

export const terrainSlice: ImmerStateCreator<ITerrainSlice> = (set) => ({
  terrainTileUrl: "https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json?key=o8iIkgKwbGcsp7zAKldE",
  hillshadeTileUrl: "https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json?key=o8iIkgKwbGcsp7zAKldE",
  hillShade: true,
  terrain: true,
  exaggeration: 1,
  
  changeTerrainProperty: (property, value) => {
    set(state => {
      if (property === "terrain" && typeof value === "boolean") {
        state.terrain = value
      }
      else if (property === "hillShade" && typeof value === "boolean") {
        state.hillShade = value
      }
      else if (property === "exaggeration" && typeof value === "number") {
        state.exaggeration = value
      }
      else {
        console.error("Value is not valid for this property.")
      }
    })
  },
  
  setTerrainConfig: (config) => {
    set(state => {
      state.terrainTileUrl = config.terrainTileUrl
      state.hillshadeTileUrl = config.hillshadeTileUrl
      state.hillShade = config.hillShade
      state.terrain = config.terrain
      state.exaggeration = config.exaggeration
    })
  }
})
