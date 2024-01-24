import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import {menuData} from "./constants";

const useRestaruntMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        setTimeout(()=>{
            const json= menuData;
            setResInfo(json.data);
         },2000)
    }
    return resInfo;
}

export default useRestaruntMenu;