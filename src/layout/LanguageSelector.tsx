import IconButton from "@mui/material/IconButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import React, { useState } from "react"
import LanguageIcon from "../icons/LanguageIcon.tsx"
import { ILanguage } from "../store/types.ts"
import useGlobalStore from "../store/useGlobalStore.ts"
import styles from "./styles.module.css"

const LanguageSelector = () => {
  
  const languages = useGlobalStore(state => state.languages)
  const setActiveLanguage = useGlobalStore(state => state.setActiveLanguage)
  
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  
  const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  
  const handleClose = () => {
    setAnchorEl(null)
  }
  
  const handleClick = (languageId: ILanguage) => {
    setActiveLanguage(languageId)
    setAnchorEl(null)
  }
  
  return (
    <>
      <IconButton
        size={"small"}
        sx={{ color: "white" }}
        onClick={handlePopoverOpen}
      >
        <LanguageIcon />
      </IconButton>
      
      <Menu
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
      >
        {
          languages.map(item =>
            <MenuItem
              className={styles.languageItem}
              onClick={() => handleClick(item.id)}
              key={item.id}
            >
              <ListItemIcon>
                <img src={item.flagPicture} />
              </ListItemIcon>
              <ListItemText>{item.title}</ListItemText>
            </MenuItem>
          )
        }
      </Menu>
    </>
  )
}

export default LanguageSelector