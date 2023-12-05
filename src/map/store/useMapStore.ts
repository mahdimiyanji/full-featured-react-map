import { create } from "zustand"
import { IMapStore } from "./types.ts"
import { immer } from "zustand/middleware/immer"
import tileServers from "./tileServers.ts"

const useMapStore = create<IMapStore>()(
  immer((set, getState) => ({
      tiles: tileServers,
      activeTile: tileServers[0].uuid,
    
      setActiveTile: (tileId) => {
        set(state => {
          state.activeTile = tileId
        })
      }
    })
  )
)

export default useMapStore