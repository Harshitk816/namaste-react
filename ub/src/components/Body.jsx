import RestarauntCard from "./RestarauntCard";
import { useState, useEffect } from "react";
import Shimmer from "../shimmer-components/Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestarauntList from "../utils/useRestarauntList";
import { withDeliveryLogo } from "./RestarauntCard";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import search_bg from "../images/search_bg.png"


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

const {loggedInUser,setUserInfo}=useContext(UserContext);

//higher order component
const RestarauntWithDel=withDeliveryLogo(RestarauntCard);

//fetching data from live swiggy api
 useEffect(()=>{fetchData()},[])

 const fetchData=async()=>{//async await
    setTimeout(()=>{
        const json=SWIGGY_API;
      setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)//optional chaining
     },2000)
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

    <div className="body border rounded-2xl w-[97%] m-auto bg-[#eaf5ef]">
        <div className="shadow-2xl relative filter flex bg-[100px] bg-cover rounded-xl m-3" style={{"background-image":`url(${search_bg})`}} >
            <div className="search my-4 ms-6 p-4 2xs:max-xs:p-2"> 
                <div className=" drop-shadow-2xl shadow-inner p-[2px] border rounded-3xl bg-white flex flex-row items-center 2xs:max-sm:flex-col 2xs:max-xs:w-[90%] 2xs:max-md:p-[4px]">
                    <input data-testid="searchInput" type="text" className=" focus:outline-none px-4 text-sm py-1 rounded-2xl 2xs:max-xs:w-[100%] 2xs:max-md:px-2" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                        }}
                        placeholder="Search Restaurants..."
                    ></input>
                    <button className=" drop-shadow-2xl px-4 text-white py-1 bg-[#4e7e6e] rounded-2xl 2xs:max-md:w-full " onClick={()=>{
                    const filteredRestaraunt=restaurantList.filter(
                        (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredList(filteredRestaraunt);
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                        </button>
                </div>
        </div>
        <div className="search my-4 mx-1 p-4 flex items-center me-6 2xs:max-xs:p-2">
        <button className="px-4 py-2 bg-gray-100 text-sm rounded-3xl" onClick={()=>{
                const filterList=restaurantList.filter(
                    (restaurant)=>restaurant.info.avgRating>4);
                setFilteredList(filterList);
                }} >Top Rated Restaraunts</button>
        </div>
        <div className="search m-4 p-4 items-center hidden ">
        <label>Name : </label>
        <input className="border border-solid border-black p-2 m-2 "
                value={loggedInUser}
                onChange={(e)=>setUserInfo(e.target.value)}/>
        </div>
            
        </div>
        <div className="res-container grid gap-4 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 sm:gap-2 xs:grid-cols-2 " >
            { //not using keys(not acceptable)<<index as key<<unique id(best practice)
                filteredRestaraunt.map((restaurant)=>(
                <Link className=" " key={restaurant.info.id} to={"/restaraunts/"+restaurant.info.id}>
                    {restaurant.info.sla.deliveryTime>=25?(<RestarauntWithDel resData={restaurant}/>):(<RestarauntCard resData={restaurant}/>)}</Link>))
            }     
        </div>
    </div>
    )
}
export default Body;