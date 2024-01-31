import React from "react"
import Tooltip from "@mui/material/Tooltip"
import LayersIcon from "../../../icons/LayersIcon.tsx"
import Button from "@mui/material/Button"
import styles from "../styles.module.css"
import { useTranslation } from "react-i18next"

type Props = {
  onClick: () => void
}

const TilesController = (props: Props) => {
  const { onClick } = props
  
  const { t } = useTranslation("map")
  
  return (
    <Tooltip title={t("TILE_SERVERS")} placement="left-start">
      <Button className={styles.panelButton} onClick={onClick}>
        <LayersIcon />
      </Button>
    </Tooltip>
  )
}

export default TilesController