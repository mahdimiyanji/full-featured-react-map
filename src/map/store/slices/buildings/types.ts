export type IBuildingsSlice = IBuildingsState & IBuildingsActions

type IBuildingsState = {
  showBuildings: boolean
  buildingsTileUrl: string
}

type IBuildingsActions = {
  setShowBuildings: (show: IBuildingsState["showBuildings"]) => void
}