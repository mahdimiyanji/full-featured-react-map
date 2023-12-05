import React from "react"
import styles from "./styles.module.css"
import LayersIcon from "../../icons/LayersIcon.tsx"
import TilesController from "./Tiles/TilesController.tsx"

const MapToolbox = () => {
  return (
    <div className={styles.toolbox}>
      <TilesController/>
    </div>
  )
}

export default MapToolbox