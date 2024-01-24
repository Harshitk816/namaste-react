import { CDN_URL } from "../utils/constants";
const RestarauntCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,sla}=resData?.info;//optional chaining
    return(
    <div className=" m-auto min-w-[210px] ">
    <div data-testid="resCard" className="shadow-2xl rounded-lg res-card mx-auto my-5 p-2 w-[200px] 2xs:max-xs:w-[260px] sm:w-[190px] bg-white hover:bg-gray-50 dark:bg-white" >
        <div className="relative"> 
            <img alt="res-logo" className="res-logo rounded-lg" src={CDN_URL+cloudinaryImageId}></img>
            <label className=" absolute bottom-2 left-2 text-xs bg-white pe-2 py-1 rounded-2xl">⭐{avgRating}</label>
        </div>
        <div className="p-3">
            <h3 className="font-bold py-2 text-lg truncate">{name}</h3>
            <h4 className=" text-sm py-1 truncate">{cuisines.join(", ")}</h4>
            <h4 className="text-sm py-1 flex">
                <span className="relative top-[1.5px] right-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </span> {sla.deliveryTime} minutes</h4>
        </div>
    </div>
    </div>
)}


//Higher order component 

export const withDeliveryLogo=(RestarauntCard)=>{
    return (props)=>{
        return (
            <div className="relative">
                <label className="absolute z-10 bg-black text-white  text-xs p-1 ms-[10%] mt-2 rounded-lg ">Free Delivery</label>
                <RestarauntCard {...props}/>
            </div>
        )
    }
}
export default RestarauntCard; 