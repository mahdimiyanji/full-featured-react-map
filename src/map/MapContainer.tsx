import React from "react"
import styles from "./styles.module.css"
import "maplibre-gl/dist/maplibre-gl.css"
import {Map} from "react-map-gl"
import maplib from "maplibre-gl"

const MapContainer = () => {
  return (
    <div className={styles.container}>
      <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=o8iIkgKwbGcsp7zAKldE"
        mapLib={maplib}
      >
        
      </Map>
    </div>
  )
}

export default MapContainer