import { ThemeProvider } from "@material-ui/core/styles"
import "normalize.css"
import React from "react"

import Theme from "./Theme"

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={Theme}>
      {children}
    </ThemeProvider>
  )
}
