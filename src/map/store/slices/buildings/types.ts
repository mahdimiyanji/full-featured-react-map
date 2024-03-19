export type IBuildingsSlice = IBuildingsState & IBuildingsActions

export type IBuildingsState = {
  showBuildings: boolean
  buildingsTileUrl: string
}

type IBuildingsActions = {
  setBuildingsConfig: (config: IBuildingsState) => void
  setShowBuildings: (show: IBuildingsState["showBuildings"]) => void
}