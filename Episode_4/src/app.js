import React, { lazy } from "react"
import  ReactDOM  from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Contact from "./components/Contact"
import RestarauntMenu from "./components/RestarauntMenu"
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Contact from "./components/Contact"
import { lazy, Suspense } from "react"
import Error  from "./components/Error"
import Shimmer from "./components/Shimmer"
//import About from "./components/About"

// import Groceries from "./components/Groceries"

const Groceries=lazy(()=>import("./components/Groceries"));
const About=lazy(()=>import("./components/About"));

const AppLayout=()=>(
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
)

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<Suspense fallback={<Shimmer/>}><About/></Suspense>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/groceries",
                element:<Suspense fallback= {<Shimmer/>}><Groceries/></Suspense>
            },
            {
                path:"/restaraunts/:resId",
                element:<RestarauntMenu/>
            }
        ],
        errorElement:<Error/>
        

    }
])
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)