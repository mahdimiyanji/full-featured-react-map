import React from "react"
import styles from "./styles.module.css"
import { ISettingsItem } from "./types.ts"
import { IconButton } from "@mui/material"
import Tooltip from "@mui/material/Tooltip"

type Props = {
  tabs: ISettingsItem[]
  activeTab: string
  onChange: (newValue: string) => void
}

const Tabs = (props: Props) => {
  const {
    tabs,
    onChange,
    activeTab
  } = props
  
  return (
    <div className={styles.tabs}>
      {
        tabs.map(tab => (
          <Tooltip title={tab.tooltipText} key={tab.uniqueName}>
            <IconButton
              className={activeTab && styles.active}
              onClick={() => onChange(tab.uniqueName)}
            >
              {tab.icon}
            </IconButton>
          </Tooltip>
        ))
      }
    </div>
  )
}

export default Tabs