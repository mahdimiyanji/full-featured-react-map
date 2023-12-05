export type IMapStore = IMapState & IMapActions

export type IMapState = {
  tiles: IMapTile[]
  activeTile: string
}

export type IMapActions = {
  setActiveTile: (tileId: string) => void
}

export type IMapTile = {
  uuid: string
  title: string
  serverUrl: string
}