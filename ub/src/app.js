import React, { lazy, useState, useEffect } from "react"
import  ReactDOM  from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Contact from "./components/Contact"
import RestarauntMenu from "./components/RestarauntMenu"
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Contact from "./components/Contact"
import { lazy, Suspense } from "react"
import Error  from "./components/Error"
import Shimmer from "./shimmer-components/Shimmer"
import UserContext from "./utils/UserContext"
import { Provider } from "react-redux"
import appStore from "./reduxUtils/appStore"
import Cart from "./components/Cart"
//import About from "./components/About"

// import Groceries from "./components/Groceries"

const Groceries=lazy(()=>import("./components/Groceries"));
const About=lazy(()=>import("./components/About"));


const AppLayout=()=>{
    const [userInfo, setUserInfo]=useState()

    useEffect( ()=>{
        const data={
            name:"Harshit sharma",
        }
        setUserInfo(data.name);
    },[]);

    
    return(
    <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userInfo, setUserInfo}}>
            <div className="app ">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
    </Provider>
)};

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
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/>
        

    }
])
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)