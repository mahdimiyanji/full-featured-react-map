import { Layer, Source, useMap } from "react-map-gl"
import { memo, useEffect } from "react"
import useMapStore from "../store/useMapStore.ts"

const Terrain = () => {
  
  const terrainTileUrl = useMapStore(state => state.terrainTileUrl)
  const hillshadeTileUrl = useMapStore(state => state.hillshadeTileUrl)
  const terrain = useMapStore(state => state.terrain)
  const hillShade = useMapStore(state => state.hillShade)
  const exaggeration = useMapStore(state => state.exaggeration)
  
  const mapRef = useMap()
  const map = mapRef.current!.getMap()
  
  useEffect(() => {
    if (map.isStyleLoaded()) {
      handleTerrainTiles()
    }
    else {
      map.on("style.load", handleTerrainTiles)
    }
  }, [terrain, exaggeration])
  
  const handleTerrainTiles = () => {
    const isTerrainSourceLoaded = map.getSource("terrain")
    if (terrain) {
      if (!isTerrainSourceLoaded) {
        map.addSource("terrain", {
          url: terrainTileUrl,
          type: "raster-dem",
          tileSize: 256
        })
      }
      
      map.setTerrain({
        source: "terrain",
        exaggeration: exaggeration
      })
    }
    else {
      if (isTerrainSourceLoaded) {
        map.removeSource("terrain")
      }
      map.setTerrain(null)
    }
  }
  
  return (
    <>
      {
        hillShade &&
        <>
          <Source
            id={"hillshade-source"}
            type={"raster-dem"}
            url={hillshadeTileUrl}
            tileSize={256}
          />

          <Layer
            id={"hillshade"}
            type={"hillshade"}
            source={"hillshade-source"}
          />
        </>
      }
    </>
  )
}

export default memo(Terrain)