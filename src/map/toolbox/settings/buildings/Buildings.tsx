import React from "react"
import styles from "./styles.module.css"
import formStyles from "../styles.module.css"
import { useTranslation } from "react-i18next"
import Switch from "@mui/material/Switch"
import useMapStore from "../../../store/useMapStore.ts"
import Tooltip from "@mui/material/Tooltip"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"

const Buildings = () => {
  
  const { t } = useTranslation("map")
  
  const buildingsTileUrl = useMapStore(state => state.buildingsTileUrl)
  const showBuildings = useMapStore(state => state.showBuildings)
  const setShowBuildings = useMapStore(state => state.setShowBuildings)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowBuildings(e.target.checked)
  }
  
  return (
    <div className={formStyles.tabPanel}>
      <p className={formStyles.tabPanelTitle}>{t("3D_BUILDINGS")}</p>
      
      <Divider className={formStyles.tabPanelTitleDivider} />
      
      <div className={styles.buildingsForm}>
        <div className={styles.buildingsFormItem}>
          <p>{t("SHOW_3D_BUILDINGS")}</p>
          
          <Switch checked={showBuildings} onChange={e => handleChange(e)} />
        </div>
        
        <div className={styles.buildingsFormItem}>
          <p>{t("TILES_URL")}</p>
          
          <Tooltip title={buildingsTileUrl}>
            <p className={styles.tileName}>{buildingsTileUrl}</p>
          </Tooltip>
        </div>
        
        <div className={styles.buttonContainer}>
          <Button variant={"outlined"} size={"small"}>
            {t("ADD_NEW_TILE")}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Buildings