import React, { Dispatch, SetStateAction } from "react"
import Button from "@mui/material/Button"
import styles from "../styles.module.css"
import Tooltip from "@mui/material/Tooltip"
import { useTranslation } from "react-i18next"
import SettingsIcon from "../../../icons/SettingsIcon.tsx"

type Props = {
  setShowSettings: Dispatch<SetStateAction<boolean>>
}

const SettingsButton = (props: Props) => {
  const { setShowSettings } = props
  
  const { t } = useTranslation("map")
  
  const handleClick = () => {
    setShowSettings(prevState => !prevState)
  }
  
  return (
    <Tooltip title={t("SETTINGS")} placement="left-start">
      <Button className={styles.panelButton} onClick={handleClick}>
        <SettingsIcon />
      </Button>
    </Tooltip>
  )
}

export default SettingsButton