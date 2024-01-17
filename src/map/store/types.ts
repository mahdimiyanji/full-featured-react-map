export type IMapStore = IMapState & IMapActions

export type IMapState = {
  tiles: IMapTile[]
  activeTile: string
  showBuildings: boolean
  buildingsTileUrl: string
}

export type IMapActions = {
  setActiveTile: (tileId: string) => void
  setShowBuildings: (show: IMapState["showBuildings"]) => void
}

export type IMapTile = {
  uuid: string
  title: string
  serverUrl: string
}