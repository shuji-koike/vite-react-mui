import React from "react"
import ReactDOM from "react-dom"

const App = React.lazy(() => import("./app"))

ReactDOM.render(
  <React.Suspense fallback="">
    <App />
  </React.Suspense>,
  document.querySelector("#root")
)
