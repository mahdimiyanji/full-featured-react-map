import React from "react"
import styles from "./styles.module.css"
import "maplibre-gl/dist/maplibre-gl.css"
import { Map } from "react-map-gl"
import useMapStore from "./store/useMapStore.ts"
import MapToolbox from "./toolbox/MapToolbox.tsx"
import i18next from "i18next"
import fa from "./i18n/fa.ts"
import en from "./i18n/en.ts"

i18next.addResourceBundle("fa", "map", fa)
i18next.addResourceBundle("en", "map", en)

const MapContainer = () => {
  
  const tiles = useMapStore(state => state.tiles)
  const activeTile = useMapStore(state => state.activeTile)
  
  return (
    <div className={ styles.mapContainer }>
      <Map
        initialViewState={ {
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        } }
        // mapStyle={tiles.find(tile => tile.uuid === activeTile)?.serverUrl}
      >
        <MapToolbox/>
      </Map>
    </div>
  )
}

export default MapContainer