import { useState,useEffect } from "react";
import Shimmer from "../shimmer-components/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaruntMenu from "../utils/useRestarauntMenu";
import RestarauntCategory from "./RestarauntCategory";

const RestarauntMenu = () => {

    const {resId}=useParams();
    const resInfo=useRestaruntMenu(resId);
    const [showItems,setShowItems]=useState(false);
    const [showIndex,setShowIndex]=useState(null);
    if(resInfo===null) return<Shimmer/>;

    const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category=>category.card?.card?.["@type"]===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  return (
    <div className="text-center border rounded-2xl w-[97%] m-auto bg-[#eaf5ef]">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        {categories.map((category,index)=>
        <RestarauntCategory 
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={(index==showIndex && showItems)? true:false}
          setShowItems={()=>setShowItems(!showItems)}
          setShowIndex={()=>setShowIndex(index)}
         />)}
        
        
    </div>
  )
}

export default RestarauntMenu;