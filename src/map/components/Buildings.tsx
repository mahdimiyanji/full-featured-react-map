import { useMap } from "react-map-gl"
import { memo, useEffect } from "react"
import { SymbolLayer } from "mapbox-gl"
import useMapStore from "../store/useMapStore.ts"

const Buildings = () => {
  
  const activeTile = useMapStore(state => state.activeTile)
  
  const mapRef = useMap()
  const map = mapRef.current!.getMap()
  
  useEffect(() => {
    map.on("styledata", () => {
      // The 'building' layer in the streets vector source contains building-height data
      // Insert the layer beneath any symbol layer.
      const layers = map.getStyle().layers
      
      let labelLayerId
      for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === "symbol") {
          const layer = layers[i] as SymbolLayer
          if (layer.layout && layer.layout["text-field"]) {
            labelLayerId = layers[i].id
            break
          }
        }
      }
      
      if (!map.getSource("openmaptiles")) {
        map.addSource("openmaptiles", {
          url: `https://api.maptiler.com/tiles/v3-openmaptiles/tiles.json?key=o8iIkgKwbGcsp7zAKldE`,
          type: "vector"
        })
        
        map.addLayer(
          {
            "id": "3d-buildings",
            "source": "openmaptiles",
            "source-layer": "building",
            "type": "fill-extrusion",
            "minzoom": 15,
            "paint": {
              "fill-extrusion-color": [
                "interpolate",
                ["linear"],
                ["get", "render_height"], 0, "lightgray", 200, "royalblue", 400, "lightblue"
              ],
              "fill-extrusion-height": [
                "interpolate",
                ["linear"],
                ["zoom"],
                15,
                0,
                16,
                ["get", "render_height"]
              ],
              "fill-extrusion-base": ["case",
                [">=", ["get", "zoom"], 16],
                ["get", "render_min_height"], 0
              ]
            }
          },
          labelLayerId
        )
      }
    })
  }, [activeTile])
  
  return null
}

export default memo(Buildings)