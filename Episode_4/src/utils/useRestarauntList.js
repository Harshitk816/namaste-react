import { useState, useEffect } from "react";
import { SWIGGY_API } from "./constants";


const useRestarauntList=()=>{
    const [restarauntList, setRestarauntList]=useState([]);
    useEffect(()=>{fetchData()},[])

 const fetchData=async()=>{//async await
    const data =await fetch(SWIGGY_API);
    const json=await data.json();
    console.log(json);
    setRestarauntList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)//optional chaining
    
 }
    return restarauntList;
}
export default useRestarauntList;
