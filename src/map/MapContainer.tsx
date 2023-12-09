import React from "react"
import styles from "./styles.module.css"
import "maplibre-gl/dist/maplibre-gl.css"
import {Map} from "react-map-gl"
import mapliber from "maplibre-gl"
import useMapStore from "./store/useMapStore.ts"
import MapToolbox from "./toolbox/MapToolbox.tsx"

const MapContainer = () => {
  
  const tiles = useMapStore(state => state.tiles)
  const activeTile = useMapStore(state => state.activeTile)
  
  return (
    <div className={styles.mapContainer}>
      <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        // mapStyle={tiles.find(tile => tile.uuid === activeTile).serverUrl}
        mapLib={mapliber}
      >
        <MapToolbox/>
      </Map>
    </div>
  )
}

export default MapContainer