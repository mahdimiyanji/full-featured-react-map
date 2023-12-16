import "./styles.css"
import MapContainer from "./map/MapContainer.tsx"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import rtlPlugin from "stylis-plugin-rtl"
import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"
import useMapStore from "./store/useAppStore.ts"
import Layout from "./layout/Layout.tsx"

const theme = createTheme({
  typography: {
    fontFamily: [
      "Iransans",
      "Roboto"
    ].join(","),
    button: {
      fontFamily: "Iransans"
    }
  }
})

const directionCache = {
  LTR: createCache({
    key: "ltr"
  }),
  RTL: createCache({
    key: "rtl",
    stylisPlugins: [rtlPlugin]
  })
}

const App = () => {
  const activeLanguage = useMapStore(state => state.activeLanguage)
  const cache = activeLanguage.direction === "rtl" ? directionCache.RTL : directionCache.LTR
  
  return (
    <CacheProvider value={ cache }>
      <ThemeProvider theme={ theme }>
        <Layout/>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
