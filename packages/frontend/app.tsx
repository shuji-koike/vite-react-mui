import { CssBaseline, ThemeProvider } from "@mui/material"
import React from "react"
import { BrowserRouter } from "react-router-dom"

import { routes } from "./routes"
import { globalStyles, theme } from "./theme"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <React.Suspense fallback="">
        <BrowserRouter>
          <React.StrictMode>{routes}</React.StrictMode>
        </BrowserRouter>
      </React.Suspense>
    </ThemeProvider>
  )
}
