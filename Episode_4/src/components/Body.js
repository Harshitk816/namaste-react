import RestarauntCard from "./RestarauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestarauntList from "../utils/useRestarauntList";


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
const restaurantList=useRestarauntList(); //getting restarauntList from SWIGGY API
const [filteredRestaraunt,setFilteredList]=useState([]);
const [searchText,setSearchText]=useState("");//search box value


//fetching data from live swiggy api
 useEffect(()=>{fetchData()},[])

 const fetchData=async()=>{//async await
    const data =await fetch(SWIGGY_API);
    const json=await data.json();
    console.log(json);
 
    setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)  //optional chaining
 }


 //checks for online status
 const onlineStatus=useOnlineStatus();
 if(onlineStatus===false){
    return(
        <h1>Looks like you are Offline. Check your internet connection and try again.</h1>
    )
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
                filteredRestaraunt.map((restaurant)=>
                <Link key={restaurant.info.id} to={"/restaraunts/"+restaurant.info.id}><RestarauntCard resData={restaurant}/></Link>)
            }     
        </div>
    </div>
    )
}
export default Body;