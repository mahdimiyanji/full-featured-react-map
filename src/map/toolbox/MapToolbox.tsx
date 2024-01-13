import React from "react"
import styles from "./styles.module.css"
import TilesController from "./tiles/TilesController.tsx"
import Divider from "@mui/material/Divider"
import ResetNorth from "./resetNorth/ResetNorth.tsx"

const MapToolbox = () => {
  return (
    <div className={styles.toolbox}>
      <ResetNorth />
      
      <Divider />
      
      <TilesController />
    </div>
  )
}

export default MapToolbox