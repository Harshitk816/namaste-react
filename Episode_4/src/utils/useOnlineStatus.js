import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
    const[onlineStatus, setOnlineStatus]=useState(true);
    //check if online

    useEffect(()=>{
        //this event listener checks if the user is online then update the status
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })

        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })

    },[]);
    
    return onlineStatus;
}

export default useOnlineStatus;