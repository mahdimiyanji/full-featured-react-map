import "./styles.css"
import MapContainer from "./map/MapContainer.tsx"
import { createTheme, ThemeProvider } from "@mui/material/styles"

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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MapContainer/>
    </ThemeProvider>
  )
}

export default App
