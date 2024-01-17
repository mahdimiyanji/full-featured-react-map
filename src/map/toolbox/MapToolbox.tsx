import React, { useState } from "react"
import styles from "./styles.module.css"
import TilesController from "./tiles/TilesController.tsx"
import Divider from "@mui/material/Divider"
import ResetNorth from "./resetNorth/ResetNorth.tsx"
import Settings from "./settings/Settings.tsx"
import SettingsButton from "./settings/SettingsButton.tsx"

const MapToolbox = () => {
  
  const [showSettings, setShowSettings] = useState(false)
  
  return (
    <div className={styles.toolbox}>
      <ResetNorth />
      
      <Divider />
      
      <TilesController />
      
      <SettingsButton setShowSettings={setShowSettings} />
      
      {
        showSettings &&
        <div className={styles.settingsContainer}>
          <Settings setShowSettings={setShowSettings}/>
        </div>
      }
    </div>
  )
}

export default MapToolbox