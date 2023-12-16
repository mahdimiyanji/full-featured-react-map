import { ILanguage, ILanguageItem } from "./types.ts"
import UsaFlag from "../layout/flags/United-States.png"
import IranFlag from "../layout/flags/Iran.png"

const languagesConfig: ILanguageItem[] = [
  {
    id: ILanguage.fa,
    title: "Fa",
    flagPicture: IranFlag,
    direction: "rtl"
  },
  {
    id: ILanguage.en,
    title: "En",
    flagPicture: UsaFlag,
    direction: "ltr"
  }
]

export default languagesConfig