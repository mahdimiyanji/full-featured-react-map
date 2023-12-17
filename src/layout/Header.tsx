import React from "react"
import styles from "./styles.module.css"
import LanguageSelector from "./LanguageSelector.tsx"

const Header = () => {
  return (
    <div className={styles.header}>
      <LanguageSelector />
    </div>
  )
}

export default Header