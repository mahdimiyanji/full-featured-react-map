import Divider from "@mui/material/Divider"
import Popover from "@mui/material/Popover"
import React, { ReactElement, useMemo, useRef, useState } from "react"
import useGlobalStore from "../../store/useGlobalStore.ts"
import ResetNorth from "./resetNorth/ResetNorth.tsx"
import Settings from "./settings/Settings.tsx"
import SettingsButton from "./settings/SettingsButton.tsx"
import styles from "./styles.module.css"
import TilesController from "./tiles/TilesController.tsx"
import TilesForm from "./tiles/TilesForm.tsx"
import { IToolboxItem } from "./types.ts"

const MapToolbox = () => {
  
  const activeLanguage = useGlobalStore(state => state.activeLanguage)
  
  const toolboxRef = useRef<HTMLDivElement>(null)
  
  const [activeToolboxId, setActiveToolboxId] = useState<string | null>(null)
  
  const handlePopoverOpen = (toolboxId: string | null) => {
    setActiveToolboxId(toolboxId)
  }
  
  const toolboxItems: IToolboxItem[] = useMemo(() => [
    {
      name: "reset-north",
      controller: <ResetNorth />,
      placement: "main"
    },
    {
      name: "tiles",
      controller: <TilesController onClick={() => handlePopoverOpen("tiles")} />,
      popoverContent: <TilesForm />,
      placement: "main"
    },
    {
      name: "settings",
      controller: <SettingsButton onClick={() => handlePopoverOpen("settings")} />,
      popoverContent: <Settings />,
      placement: "secondary"
    }
  ], [])
  
  const handleClose = () => {
    handlePopoverOpen(null)
  }
  
  const activeToolboxItem = toolboxItems.find(item => item.name === activeToolboxId)
  
  const isRTL = activeLanguage.direction === "rtl"
  
  return (
    <div className={styles.toolbox} ref={toolboxRef}>
      <div className={styles.toolboxMainItems}>
        {
          toolboxItems.reduce((res, item, index) => {
            if (item.placement === "main") {
              res.push(item.controller)
            }
            if (index < toolboxItems.length - 2) {
              res.push(<Divider />)
            }
            return res
          }, [] as ReactElement[])
        }
      </div>
      
      <div className={styles.toolboxSettingsButton}>
        {
          toolboxItems.reduce((res, item, index) => {
            if (item.placement === "secondary") {
              res.push(item.controller)
            }
            return res
          }, [] as ReactElement[])
        }
      </div>
      
      {
        activeToolboxItem &&
        <Popover
          open={true}
          anchorEl={toolboxRef.current}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: isRTL ? -2 : 37
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: isRTL ? "right" : "left"
          }}
          elevation={0}
        >
          {
            activeToolboxItem.popoverContent
          }
        </Popover>
      }
    </div>
  )
}

export default MapToolbox