import React, { useState } from "react"
import Popover from "@mui/material/Popover"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import RadioGroup from "@mui/material/RadioGroup"
import Tooltip from "@mui/material/Tooltip"
import LayersIcon from "../../../icons/LayersIcon.tsx"
import useMapStore from "../../store/useMapStore.ts"
import FormControlLabel from "@mui/material/FormControlLabel"
import Radio from "@mui/material/Radio"
import Button from "@mui/material/Button"
import styles from "../styles.module.css"

const TilesController = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  
  const tiles = useMapStore(state => state.tiles)
  const activeTile = useMapStore(state => state.activeTile)
  const setActiveTile = useMapStore(state => state.setActiveTile)
  
  const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  
  const handleClose = () => {
    setAnchorEl(null)
  }
  
  const handleLayerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveTile(e.target.value)
  }
  
  return (
    <div>
      <Tooltip title={ "سرور های نقشه" } placement="left-start">
        <Button className={ styles.panelButton } onClick={ handlePopoverOpen }>
          <LayersIcon/>
        </Button>
      </Tooltip>
      
      <Popover
        open={ !!anchorEl }
        anchorEl={ anchorEl }
        onClose={ handleClose }
        anchorOrigin={ {
          vertical: "top",
          horizontal: "left"
        } }
        transformOrigin={ {
          vertical: "top",
          horizontal: "left"
        } }
      >
        <div>
          <FormControl>
            <FormLabel sx={ { p: 1.5, pb: 1 } }>
              سرور های نقشه
            </FormLabel>
            
            <RadioGroup
              value={ activeTile }
              onChange={ handleLayerChange }
              sx={ {
                p: 1
              } }
            >
              {
                tiles.map(tile => (
                  <FormControlLabel
                    value={ tile.uuid }
                    control={ <Radio/> }
                    label={ tile.title }
                    key={ tile.uuid }
                  />
                ))
              }
            </RadioGroup>
          </FormControl>
        </div>
      </Popover>
    </div>
  )
}

export default TilesController