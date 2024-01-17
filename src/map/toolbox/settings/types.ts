import { ReactElement } from "react"

export type ISettingsItem = {
  uniqueName: string
  icon: ReactElement
  tooltipText: string
  tabPanel: ReactElement
}