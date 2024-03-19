export type IMapMainSlice = IMapMainState & IMapMainActions

export type IMapTile = {
  uuid: string
  title: string
  serverUrl: string
}
type IMapMainState = {
  tiles: IMapTile[]
  activeTile: string
}

type IMapMainActions = {
  setActiveTile: (tileId: string) => void
}