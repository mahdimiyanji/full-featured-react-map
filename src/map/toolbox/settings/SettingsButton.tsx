import React from "react"
import Button from "@mui/material/Button"
import styles from "../styles.module.css"
import Tooltip from "@mui/material/Tooltip"
import { useTranslation } from "react-i18next"
import SettingsIcon from "../../../icons/SettingsIcon.tsx"

type Props = {
  onClick: () => void
}

const SettingsButton = (props: Props) => {
  const { onClick } = props
  
  const { t } = useTranslation("map")
  
  return (
    <Tooltip title={t("SETTINGS")} placement="left-start">
      <Button className={styles.panelButton} onClick={onClick}>
        <SettingsIcon />
      </Button>
    </Tooltip>
  )
}

export default SettingsButton