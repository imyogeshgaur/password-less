import { lazy } from "react";

const Authentication = lazy(() => import("./Components/Authentication"))
const Home = lazy(() => import("./Components/Home"))


const allRoutes = [
    { path: "/", element: <Authentication /> },
    { path: "/auth/verify", element: <Home /> }
]

export default allRoutes;