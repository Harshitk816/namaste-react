import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
    let [btnNameReact,setBtnNameReact]=useState("Login");
    const onlineStatus = useOnlineStatus();
    const cartItems = useSelector((store)=>store.cart.items);
    const {loggedInUser}=useContext(UserContext);
    return(
    
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 ">       
            <div className="logo-container">
                    <img className="w-56" src= {LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                    <ul className="flex p-4 m-4 ">
                        <li>Online status: {onlineStatus?"🟢":"🔴"}</li>
                        <li className="px-4" ><Link to="/">Home</Link></li>
                        <li className="px-4" ><Link to="/groceries">Groceries</Link></li>
                        <li className="px-4" ><Link to="/contact">Contact Us</Link></li>
                        <li className="px-4" ><Link to="/about">About Us</Link></li>
                        <li className="px-4 font-bold"><Link to="/cart">Cart - {cartItems.length}</Link></li>
                        <button className="px-4" onClick={()=>{
                        //conditional rendering
                       if(btnNameReact==="Login"){
                        setBtnNameReact("Logout");
                       }else{
                        setBtnNameReact("Login");
                       }
                       //btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");
                    }}> {btnNameReact}
                    </button> 
                    <li className="px-4 font-bold">{loggedInUser}</li>
                    </ul>
                             
            </div>     
    </div>
    )
}
export default Header;