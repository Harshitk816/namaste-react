import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaruntMenu from "../utils/useRestarauntMenu";

const RestarauntMenu = () => {

    const {resId}=useParams();
    const resInfo=useRestaruntMenu(resId);
    if(resInfo===null) return<Shimmer/>;

    const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h2>{costForTwoMessage}</h2>
        <ul>
            {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.defaultPrice/100 || item.card.info.price/100}</li>)}
        
        </ul>
    </div>
  )
}

export default RestarauntMenu;