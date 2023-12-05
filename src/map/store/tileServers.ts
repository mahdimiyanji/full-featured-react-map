import { IMapTile } from "./types.ts"

const tileServers: IMapTile[] = [
  {
    uuid: "42ae6a7c-110f-4ddd-9cbb-d01b026ce7f6",
    serverUrl: "https://api.maptiler.com/maps/basic-v2/style.json?key=o8iIkgKwbGcsp7zAKldE",
    title: "basic"
  },
  {
    uuid: "a150b5f4-abc5-4d0c-9210-4b90d617abe6",
    serverUrl: "https://api.maptiler.com/maps/bright-v2/style.json?key=o8iIkgKwbGcsp7zAKldE",
    title: "Bright"
  },
  {
    uuid: "680dac3f-c4e9-43f9-a255-c5c1308916fa",
    serverUrl: "https://api.maptiler.com/maps/openstreetmap/style.json?key=o8iIkgKwbGcsp7zAKldE",
    title: "Open street map"
  },
  {
    uuid: "a0495d56-2924-4044-b756-6cfbdf106034",
    serverUrl: "https://api.maptiler.com/maps/satellite/style.json?key=o8iIkgKwbGcsp7zAKldE",
    title: "Satellite"
  },
  {
    uuid: "0b2db865-450e-4ee4-9b62-57f4209a01ab",
    serverUrl: "https://api.maptiler.com/maps/topo-v2/style.json?key=o8iIkgKwbGcsp7zAKldE",
    title: "Topo"
  }
]

export default tileServers