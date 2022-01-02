import React from "react"
import { Route, Routes } from "react-router"

const IndexPage = React.lazy(() => import("./pages"))

export const routes = (
  <Routes>
    <Route path="/" element={<IndexPage />} />
  </Routes>
)
