import { ReactElement } from "react"

export type IToolboxItem = {
  name: string
  controller: ReactElement
  popoverContent?: ReactElement
  placement: "main" | "secondary"
}