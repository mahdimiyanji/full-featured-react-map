import "./styles.css"
import "./i18n.ts"
import createCache from "@emotion/cache"
import {CacheProvider} from "@emotion/react"
import rtlPlugin from "stylis-plugin-rtl"
import Layout from "./layout/Layout.tsx"
import MuiThemeProvider from "./MuiThemeProvider.tsx"
import useGlobalStore from "./store/useGlobalStore.ts"

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
  const activeLanguage = useGlobalStore(state => state.activeLanguage)
  const cache = activeLanguage.direction === "rtl" ? directionCache.RTL : directionCache.LTR
  
  return (
    <CacheProvider value={cache}>
      <MuiThemeProvider>
        <Layout />
      </MuiThemeProvider>
    </CacheProvider>
  )
}

export default App
