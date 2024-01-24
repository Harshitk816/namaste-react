import { useState, useEffect } from "react";
import { SWIGGY_API } from "./constants";


const useRestarauntList=()=>{
    const [restarauntList, setRestarauntList]=useState([]);
    useEffect(()=>{fetchData()},[])

 const fetchData=async()=>{//async await
   setTimeout(()=>{
      const json=SWIGGY_API;
    setRestarauntList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)//optional chaining
    
   },2000)
    
 }
    return restarauntList;
}
export default useRestarauntList;
