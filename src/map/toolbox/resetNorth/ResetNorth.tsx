import { useEffect, useState } from "react"
import { useMap } from "react-map-gl"
import Button from "@mui/material/Button"
import styles from "../styles.module.css"
import Tooltip from "@mui/material/Tooltip"
import CompassIcon from "../../../icons/CompassIcon.tsx"

const ResetNorth = () => {
  
  const map = useMap()
  
  const [bearing, setBearing] = useState<number>(0)
  
  const handleClick = () => {
    map.current?.resetNorth()
    map.current?.resetNorthPitch()
  }
  
  useEffect(() => {
    map.current?.on("rotate", (e) => {
      setBearing(e.target.getBearing())
    })
  }, [])
  
  useEffect(() => {
    console.log(bearing)
  }, [bearing])
  
  return (
    <Tooltip title={ "شمال نقشه" } placement="left-start">
      <Button className={ styles.panelButton } onClick={ handleClick }>
        <CompassIcon style={ { transform: `rotateZ(${ bearing - 45 }deg)`, color: "red" } }/>
      </Button>
    </Tooltip>
  )
}

export default ResetNorth