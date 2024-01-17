import React, { Dispatch, SetStateAction, useState } from "react"
import Paper from "@mui/material/Paper"
import { useTranslation } from "react-i18next"
import { ISettingsItem } from "./types.ts"
import BuildingsIcon from "../../../icons/BuildingsIcon.tsx"
import Tabs from "./Tabs"
import Tab from "@mui/material/Tab"
import Buildings from "./Buildings.tsx"
import styles from "./styles.module.css"
import { ClickAwayListener, IconButton } from "@mui/material"

type Props = {
  setShowSettings: Dispatch<SetStateAction<boolean>>
}

const Settings = (props: Props) => {
  const { setShowSettings } = props
  
  const { t } = useTranslation("map")
  
  const [activeSettingsItemName, setActiveSettingsItemName] = useState("buildings")
  
  const settingsItems: ISettingsItem[] = [
    {
      uniqueName: "buildings",
      icon: <BuildingsIcon />,
      tooltipText: t("3D_BUILDINGS"),
      tabPanel: <Buildings />
    }
  ]
  
  
  const handleChange = (newValue: string) => {
    setActiveSettingsItemName(newValue)
  }
  
  const activeSettings = settingsItems.find(item => item.uniqueName === activeSettingsItemName)!
  
  return (
    <ClickAwayListener onClickAway={() => setShowSettings(false)}>
      <Paper className={styles.settingsContainer}>
        <Tabs
          tabs={settingsItems}
          activeTab={activeSettingsItemName}
          onChange={handleChange}
        />
        
        {
          activeSettings.tabPanel
        }
      </Paper>
    </ClickAwayListener>
  )
}

export default Settings