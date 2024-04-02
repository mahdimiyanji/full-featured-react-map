import i18n from "i18next"
import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import languagesConfig from "./languagesConfig.ts"
import { IAppStore } from "./types.ts"

const useGlobalStore = create<IAppStore>()(
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
            i18n.changeLanguage(languageItem.id.toLowerCase())
          }
        })
      }
    })
  )
)

export default useGlobalStore