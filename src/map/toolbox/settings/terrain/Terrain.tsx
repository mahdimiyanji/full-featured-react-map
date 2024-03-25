import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import Switch from "@mui/material/Switch"
import Tooltip from "@mui/material/Tooltip"
import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { ITerrainState } from "../../../store/slices/terrain/types.ts"
import useMapStore from "../../../store/useMapStore.ts"
import formStyles from "../styles.module.css"
import styles from "./styles.module.css"

const Terrain = () => {
  const { t } = useTranslation("map")
  
  const terrainTileUrl = useMapStore(state => state.terrainTileUrl)
  const hillshadeTileUrl = useMapStore(state => state.hillshadeTileUrl)
  const terrain = useMapStore(state => state.terrain)
  const hillShade = useMapStore(state => state.hillShade)
  const exaggeration = useMapStore(state => state.exaggeration)
  const changeTerrainProperty = useMapStore(state => state.changeTerrainProperty)
  
  // save terrain settings in local storage
  useEffect(() => {
    const unSubscribe = useMapStore.subscribe(
      state => [
        state.terrainTileUrl,
        state.hillshadeTileUrl,
        state.terrain,
        state.hillShade,
        state.exaggeration
      ],
      (newConfig) => {
        const configObject: ITerrainState = {
          terrainTileUrl: newConfig[0] as string,
          hillshadeTileUrl: newConfig[1] as string,
          terrain: newConfig[2] as boolean,
          hillShade: newConfig[3] as boolean,
          exaggeration: newConfig[4] as number
        }
        localStorage.setItem("__terrain", JSON.stringify(configObject))
      },
      {
        fireImmediately: true
      }
    )
    
    return () => {
      unSubscribe()
    }
  }, [])
  
  return (
    <div className={formStyles.tabPanel}>
      <p className={formStyles.tabPanelTitle}>{t("TOPOGRAPHY")}</p>
      
      <Divider className={formStyles.tabPanelTitleDivider} />
      
      <div className={styles.terrainForm}>
        <div className={styles.terrainFormItem}>
          <p>{t("SHOW_TERRAIN")}</p>
          
          <Switch checked={terrain} onChange={e => changeTerrainProperty("terrain", e.target.checked)} />
        </div>
        
        <div className={styles.terrainFormItem}>
          <p>{t("SHOW_HILLSHADE")}</p>
          
          <Switch checked={hillShade} onChange={e => changeTerrainProperty("hillShade", e.target.checked)} />
        </div>
        
        <div className={styles.terrainFormItem}>
          <p>{t("EXAGGERATION")}</p>
          
          <Select
            value={exaggeration}
            size={"small"}
            onChange={e => changeTerrainProperty("exaggeration", +(e.target.value))}
            sx={{ minWidth: "100px" }}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={1.5}>1.5</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </div>
        
        <div className={styles.terrainFormItem}>
          <p>{t("TERRAIN_URL")}</p>
          
          <Tooltip title={terrainTileUrl}>
            <p className={styles.tileName}>{terrainTileUrl}</p>
          </Tooltip>
        </div>
        
        <div className={styles.terrainFormItem}>
          <p>{t("HILLSHADE_URL")}</p>
          
          <Tooltip title={hillshadeTileUrl}>
            <p className={styles.tileName}>{hillshadeTileUrl}</p>
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

export default Terrain