import React from "react"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Radio from "@mui/material/Radio"
import { useTranslation } from "react-i18next"
import useMapStore from "../../store/useMapStore.ts"

const TilesForm = () => {
  const { t } = useTranslation("map")
  
  const tiles = useMapStore(state => state.tiles)
  const activeTile = useMapStore(state => state.activeTile)
  const setActiveTile = useMapStore(state => state.setActiveTile)
  
  const handleLayerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveTile(e.target.value)
  }
  
  return (
    <FormControl style={{ minWidth: "200px" }}>
      <FormLabel sx={{ p: 1.5, pb: 1 }}>
        {t("TILE_SERVERS")}
      </FormLabel>
      
      <RadioGroup
        value={activeTile}
        onChange={handleLayerChange}
        sx={{
          p: 1
        }}
      >
        {
          tiles.map(tile => (
            <FormControlLabel
              value={tile.uuid}
              control={<Radio />}
              label={tile.title}
              key={tile.uuid}
            />
          ))
        }
      </RadioGroup>
    </FormControl>
  )
}

export default TilesForm