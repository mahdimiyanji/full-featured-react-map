import React from "react"
import styles from "./styles.module.css"
import Header from "./Header.tsx"
import MapContainer from "../map/MapContainer.tsx"

const Layout = () => {
  return (
    <div className={styles.pageLayout}>
      <Header />
      <MapContainer />
    </div>
  )
}

export default Layout