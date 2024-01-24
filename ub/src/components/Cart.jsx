import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../reduxUtils/cartSlice";

const Cart = () =>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleEmptyCart=()=>{
        dispatch(clearCart());

    }
    return (
        <div className="text-center m-4 p-4 ">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 rounded-2xl shadow-lg p-4 xl:w-6/12 lg:w-7/12 md:w-8/12 sm:w-9/12 xs:w-10/12 2xs:w-11/12  ">
                {cartItems.length===0 && (
                    <h1>Your cart seems Empty! Add items to the Cart. 🛒</h1>
                )}
                <ItemList items={cartItems}/>  
            </div>
            <span><button
                 className="border border-black px-2 my-2 bg-black text-white rounded-lg"
                 onClick={handleEmptyCart}
                >Empty Cart </button></span>
           
        </div>
    )
}
export default Cart;