import { memo, useEffect } from "react"
import { useMap } from "react-map-gl"
import { IBuildingsState } from "../store/slices/buildings/types.ts"
import useMapStore from "../store/useMapStore.ts"

const Buildings = () => {
  
  const buildingsTileUrl = useMapStore(state => state.buildingsTileUrl)
  const setBuildingsConfig = useMapStore(state => state.setBuildingsConfig)
  
  const mapRef = useMap()
  const map = mapRef.current!.getMap()
  
  // load and restore buildings settings from local storage in first render
  useEffect(() => {
    const loadedObject = localStorage.getItem("__buildings")
    if (loadedObject) {
      const __mapBuildingsSettings = JSON.parse(loadedObject) as IBuildingsState
      setBuildingsConfig(__mapBuildingsSettings)
    }
  }, [])
  
  useEffect(() => {
    if (map.isStyleLoaded()) {
      handleBuildingsTiles()
    }
    map.on("styledata", handleBuildingsTiles)
    
    return () => {
      const buildingsSource = map.getSource("openmaptiles")
      if (buildingsSource) {
        map.removeLayer("3d-buildings")
        map.removeSource("openmaptiles")
      }
      
      map.off("styledata", handleBuildingsTiles)
    }
  }, [])
  
  const handleBuildingsTiles = () => {
    if (!map.getSource("openmaptiles")) {
      map.addSource("openmaptiles", {
        url: buildingsTileUrl,
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
        }
      )
    }
  }
  
  return null
}

export default memo(Buildings)