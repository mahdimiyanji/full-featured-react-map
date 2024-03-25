export type ITerrainSlice = ITerrainState & ITerrainActions

export type ITerrainState = {
  terrain: boolean
  hillShade: boolean
  exaggeration: number
  terrainTileUrl: string
  hillshadeTileUrl: string
}

type ITerrainActions = {
  changeTerrainProperty: (property: keyof Omit<ITerrainState, "terrainTileUrl" | "hillshadeTileUrl">, value: boolean | number) => void
  setTerrainConfig: (config: ITerrainState) => void
}