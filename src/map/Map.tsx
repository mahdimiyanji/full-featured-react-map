import React from "react"
import styles from "./styles.module.css"
import "maplibre-gl/dist/maplibre-gl.css"
import { Map as MapGl } from "react-map-gl/maplibre"
import useMapStore from "./store/useMapStore.ts"
import MapToolbox from "./toolbox/MapToolbox.tsx"
import i18next from "i18next"
import fa from "./i18n/fa.ts"
import en from "./i18n/en.ts"
import maplibregl from "maplibre-gl"
import Buildings from "./components/Buildings.tsx"

i18next.addResourceBundle("fa", "map", fa)
i18next.addResourceBundle("en", "map", en)

const Map = () => {
  
  const tiles = useMapStore(state => state.tiles)
  const activeTile = useMapStore(state => state.activeTile)
  
  return (
    <div className={styles.mapContainer}>
      <MapGl
        initialViewState={{
          longitude: 51.3755,
          latitude: 35.7450,
          zoom: 14
        }}
        mapStyle={tiles.find(tile => tile.uuid === activeTile)?.serverUrl}
        mapLib={maplibregl}
        styleDiffing
      >
        <MapToolbox />
        
        <Buildings/>
      </MapGl>
    </div>
  )
}

export default Map