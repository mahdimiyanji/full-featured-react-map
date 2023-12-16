import { create } from "zustand"
import { IAppStore, ILanguage } from "./types.ts"
import { immer } from "zustand/middleware/immer"
import languagesConfig from "./languagesConfig.ts"

const useMapStore = create<IAppStore>()(
  immer((set, getState) => ({
      languages: languagesConfig,
      activeLanguage: languagesConfig[0],
      
      setActiveLanguage: (language) => {
        set(state => {
          const languageItem = state.languages.find(l => l.id === language)
          if (languageItem) {
            state.activeLanguage = languageItem
            document.dir = languageItem.direction
            document.documentElement.lang = languageItem.id.toLowerCase()
          }
        })
      }
    })
  )
)

export default useMapStore