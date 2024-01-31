export type IMapStore = IMapState & IMapActions

export type IMapState = {
  tiles: IMapTile[]
  activeTile: string
  showBuildings: boolean
  buildingsTileUrl: string
  terrainConfig: ITerrainConfig
}

export type IMapActions = {
  setActiveTile: (tileId: string) => void
  setShowBuildings: (show: IMapState["showBuildings"]) => void
  changeTerrainProperty: (property: keyof Omit<ITerrainConfig, "terrainTileUrl" | "hillshadeTileUrl">, value: boolean | number) => void
}

export type IMapTile = {
  uuid: string
  title: string
  serverUrl: string
}

type ITerrainConfig = {
  terrain: boolean
  hillShade: boolean
  exaggeration: number
  terrainTileUrl: string
  hillshadeTileUrl: string
}