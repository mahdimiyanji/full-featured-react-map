import React from "react"
import styles from "./styles.module.css"
import Header from "./Header.tsx"
import Map from "../map/Map.tsx"

const Layout = () => {
  return (
    <div className={styles.pageLayout}>
      <Header />
      <Map />
    </div>
  )
}

export default Layout