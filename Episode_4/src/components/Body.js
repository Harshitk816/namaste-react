import RestarauntCard from "./RestarauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


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
const [restaurantList, setRestaurantList]=useState([]);
const [filteredRestaraunt,setFilteredList]=useState([]);
const [searchText,setSearchText]=useState("");//search box value


//fetching data from live swiggy api
 useEffect(()=>{fetchData()},[])

 const fetchData=async()=>{//async await
    const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9304278&lng=77.678404&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json=await data.json();
    console.log(json);
    setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)//optional chaining
    setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 }
//conditional rendering
 if(restaurantList.length===0){
return(
    <Shimmer/>
)
 }
return(

    <div className="body">
        <div className="filter">
        <div className="search"> 
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
                }}
                 placeholder="Search Restaurants..."
            ></input>
            <button onClick={()=>{
                const filteredRestaraunt=restaurantList.filter(
                    (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                setFilteredList(filteredRestaraunt);
            }}>Search</button>
        </div>
            <button className="filter-btn" onClick={()=>{
                const filterList=restaurantList.filter(
                    (restaurant)=>restaurant.info.avgRating>4);
                setFilteredList(filterList);
                }} >Top Rated Restaraunts</button>
        </div>
        <div className="res-container" >
            { //not using keys(not acceptable)<<index as key<<unique id(best practice)
                filteredRestaraunt.map((restaurant)=><RestarauntCard key={restaurant.info.id} resData={restaurant}/>)
            }     
        </div>
    </div>
    )
}
export default Body;