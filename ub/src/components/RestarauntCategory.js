import { useState } from "react";
import ItemList from "./ItemList";

const RestarauntCategory=({data,showItems,setShowIndex, setShowItems})=>{
    const{title,itemCards}=data;
    //const[showItems,setShowItems]=useState(false);

    const handleClick=()=>{
    //    setShowItems(!showItems);
    setShowIndex();
    setShowItems();
    }  
     return(
        <div>
           {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 rounded-2xl shadow-lg p-4 xl:w-6/12 lg:w-7/12 md:w-8/12 sm:w-9/12 xs:w-10/12 2xs:w-11/12  ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg 2xs:text-sm">{title} ({itemCards.length})</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </div>
                {/* {accordion body} */}
                {showItems && <ItemList items={itemCards}/>}
            </div>
            
            
        </div>
    )
};
export default RestarauntCategory;