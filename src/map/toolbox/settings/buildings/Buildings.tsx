import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import Switch from "@mui/material/Switch"
import Tooltip from "@mui/material/Tooltip"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { IBuildingsState } from "../../../store/slices/buildings/types.ts"
import useMapStore from "../../../store/useMapStore.ts"
import formStyles from "../styles.module.css"
import styles from "./styles.module.css"

const Buildings = () => {
  
  const { t } = useTranslation("map")
  
  const buildingsTileUrl = useMapStore(state => state.buildingsTileUrl)
  const showBuildings = useMapStore(state => state.showBuildings)
  const setShowBuildings = useMapStore(state => state.setShowBuildings)
  
  // save buildings settings in local storage
  useEffect(() => {
    const unSubscribe = useMapStore.subscribe(
      state => [state.buildingsTileUrl, state.showBuildings],
      (newConfig) => {
        const configObject: IBuildingsState = {
          buildingsTileUrl: newConfig[0] as string,
          showBuildings: newConfig[1] as boolean
        }
        localStorage.setItem("__buildings", JSON.stringify(configObject))
      },
      {
        fireImmediately: true
      }
    )
    
    return () => {
      unSubscribe()
    }
  }, [])
  
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