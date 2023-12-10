import RestarauntCard from "./RestarauntCard";
import { resList } from "../utils/mockData";
import { useState } from "react";


const Body=()=>{
    //normal JS variable 
// let restaurantList=[{
//     "info": {
//       "id": "5934",
//       "name": "Burger King",
//       "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
//       "cuisines": [
//         "Burgers",
//         "American"
//       ],
//       "avgRating": 4.6,
//       "sla": {
//         "deliveryTime": 33,
//       }
//     }
//   },
//   {
//     "info": {
//       "id": "5935",
//       "name": "KFC",
//       "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
//       "cuisines": [
//         "Burgers",
//         "American"
//       ],
//       "avgRating": 3.8,
//       "sla": {
//         "deliveryTime": 33,
//       }
//     }
//   },
//   {
//     "info": {
//       "id": "5936",
//       "name": "Mc Donald",
//       "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
//       "cuisines": [
//         "Burgers",
//         "American"
//       ],
//       "avgRating": 4.2,
//       "sla": {
//         "deliveryTime": 33,
//       }
//     }
//   },
    
// ]
//State Variable -super powerful variable
const [restaurantList, setRestaurantList]=useState(resList);

return(

    <div className="body">
        <div className="search"> Search</div>
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filterList=restaurantList.filter(
                    (restaurant)=>restaurant.info.avgRating>4.0);
                setRestaurantList(filterList);
                }} >Top Rated Restaraunts</button>
        </div>
        <div className="res-container" >
            { //not using keys(not acceptable)<<index as key<<unique id(best practice)
                restaurantList.map((restaurant)=><RestarauntCard key={restaurant.info.id} resData={restaurant}/>)
            }     
        </div>
    </div>
    )
}
export default Body;