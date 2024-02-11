import React, { ReactElement, useMemo, useRef, useState } from "react"
import styles from "./styles.module.css"
import TilesController from "./tiles/TilesController.tsx"
import Divider from "@mui/material/Divider"
import ResetNorth from "./resetNorth/ResetNorth.tsx"
import Settings from "./settings/Settings.tsx"
import SettingsButton from "./settings/SettingsButton.tsx"
import { IToolboxItem } from "./types.ts"
import Popover from "@mui/material/Popover"
import TilesForm from "./tiles/TilesForm.tsx"

const MapToolbox = () => {
  
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
            horizontal: -2
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
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