import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    let [btnNameReact,setBtnNameReact]=useState("Login");
    const onlineStatus = useOnlineStatus();

    const navLinks=document.querySelector(".nav-links");
    const [isActive,setIsActive]=useState(false);
    const option = isActive?'top-[18%]':'top-[-100vh]';

    return(
    
    <header className=" py-5">     
        
            <nav className=" flex justify-between items-center w-[92%] ms-[3vw]">
                <div>
                    <img className=" w-52 " src= {LOGO_URL}></img>
                </div>
            
                <div  className={"   nav-links  lg:static absolute lg:min-h-fit bg-white min-h-[60vh] left-0  lg:w-auto w-full "+option}>
                    <ul className="flex lg:flex-row flex-col items-center gap-[4vw] gap-[10vh] font-medium">

                        <li className=" hover:border-b-2  hover:border-teal-800 transition duration-500"><Link to="/">Home</Link></li>
                        <li className=" hover:border-b-2  hover:border-teal-800 transition duration-500"><Link to="/groceries">Groceries</Link></li>
                        <li className=" hover:border-b-2  hover:border-teal-800 transition duration-500"><Link to="/contact">Contact Us</Link></li>
                        <li className=" hover:border-b-2  hover:border-teal-800 transition duration-500"><Link to="/about">About Us</Link></li>

                    </ul>
                </div>
            
                

                <div className="flex items-center gap-[1vw]">
                    <span>{onlineStatus?"Online":"Offline"}  {onlineStatus?"🟢":"🔴"}</span>
                    <button className=" bg-teal-800 text-white px-5 py-2 rounded-full hover:bg-teal-600" onClick={()=>{
                        //conditional rendering
                       if(btnNameReact==="Login"){
                        setBtnNameReact("Logout");
                       }else{
                        setBtnNameReact("Login");
                       }
                       
                       //btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");
                    }}>{btnNameReact}
                    </button>

                    <span className=" bg-teal-800 text-white px-2 py-2 rounded-full hover:bg-teal-600"> 
                        <svg color="white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </span>
                    <span className="lg:hidden" onClick={()=>{
                        setIsActive(!isActive);
                        
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>

                    </span>
                </div>
            </nav>     
    </header>
    )
}
export default Header;