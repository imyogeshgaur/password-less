import { Suspense } from 'react'
import { useRoutes } from "react-router-dom"
import allRoutes from './routes'
import "./App.css"

function App() {
  const routes = useRoutes(allRoutes)
  return (
    <Suspense fallback={<h1>Loading ....</h1>}>
      {routes}
    </Suspense>
  )
}

export default App
