import React, { useState } from "react"
import IconButton from "@mui/material/IconButton"
import useAppStore from "../store/useAppStore.ts"
import styles from "./styles.module.css"
import { ILanguage } from "../store/types.ts"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import LanguageIcon from "../icons/LanguageIcon.tsx"

const LanguageSelector = () => {
  
  const languages = useAppStore(state => state.languages)
  const setActiveLanguage = useAppStore(state => state.setActiveLanguage)
  
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