export type IMapStore = IMapState & IMapActions

export type IMapState = {
  tiles: IMapTile[]
  activeTile: string
  showBuildings: boolean
  buildingsTileUrl: string
  terrain: boolean
  hillShade: boolean
  exaggeration: number
  terrainTileUrl: string
  hillshadeTileUrl: string
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