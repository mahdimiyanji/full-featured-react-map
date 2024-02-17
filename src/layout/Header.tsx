import React from "react"
import styles from "./styles.module.css"
import LanguageSelector from "./LanguageSelector.tsx"
import Logo from "./images/mahdi-miyanji.png"

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={Logo} height={140} alt={"mahdi miyanji"}/>
      <LanguageSelector />
    </div>
  )
}

export default Header