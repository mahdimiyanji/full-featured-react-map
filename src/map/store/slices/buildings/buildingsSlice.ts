import { ImmerStateCreator } from "../types"
import { IBuildingsSlice } from "./types"

export const buildingsSlice: ImmerStateCreator<IBuildingsSlice> = (set) => ({
  showBuildings: true,
  buildingsTileUrl: "https://api.maptiler.com/tiles/v3-openmaptiles/tiles.json?key=o8iIkgKwbGcsp7zAKldE",
  
  setShowBuildings: (show) => {
    set(state => {
      state.showBuildings = show
    })
  }
})
