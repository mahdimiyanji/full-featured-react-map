export type IAppStore = IAppState & IAppActions

export type IAppState = {
  languages: ILanguageItem[]
  activeLanguage: ILanguageItem
}

export type IAppActions = {
  setActiveLanguage: (language: ILanguageItem["id"]) => void
}

export enum ILanguage {
  fa = "fa",
  en = "en"
}

export type ILanguageItem = {
  id: ILanguage
  title: string
  direction: "rtl" | "ltr"
  flagPicture: string
}