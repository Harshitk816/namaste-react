import { useEffect, useState } from "react";
import { json } from "react-router-dom";

const User=(props)=>{
    const [userInfo, setUserInfo]=useState({
        name:"Dummy name",
        location:"Dummy location",
        avatar_url:"https://www.dummy-image.com",
    })

    

    useEffect( ()=>{fetchData()},[]);

    const fetchData=async()=>{
        const data = await fetch("https://api.github.com/users/HarshitK816");
        const json1 = await data.json();
        setUserInfo(json1);
    }  
    const {name,location,avatar_url}=userInfo;
    return(
         <div className="user-card">
            <img width="100px" src={avatar_url}></img>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>Contact : @Harshitk816</h4>
        </div>
    )
}
export default User;