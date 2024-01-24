import { useDispatch } from "react-redux";
import { addItem } from "../reduxUtils/cartSlice";

const ItemList=({items})=>{
    
    const CDN_URL="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
        //dispatch an action
        dispatch(addItem(item));
        
    }
    
    return(
    <div>
        {items.map((item)=>
        <div data-testid="foodItems" key={item.card.info.id} className="p-2 m-2 border-b border-gray-200 text-left flex justify-between hover:bg-gray-100 2xs:flex-col 2xs:items-center sm:flex-row ">
            
            <div className=" w-9/12 2xs:w-full sm:9/12">
                <div className="py-2 w-full 2xs:py-1">
                    <p className="2xs:text-sm">{item.card.info.name}</p><br></br>
                    <p className="2xs:text-sm"> ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</p>
                </div>
                <div>
                    <p  className="relative text-[10px] w-full  h-16 text-pretty text 2xs:h-auto">{item.card.info.description}</p>
                </div>
            </div>
            <div className="w-3/12 2xs:w-6/12 sm:3/12">
                <img className=" w-41  p-1 rounded-2xl" src={CDN_URL+item.card.info.imageId}></img>
                <button onClick={()=>handleAddItem(item)} className="border font-bold text-[#4e7e6e] active:bg-gray-300 border-[#4e7e6e] px-2 rounded-2xl relative mx-[35%] bottom-2 bg-white " >ADD</button>
            </div>
            
        </div>)}
    </div>

)};
export default ItemList;