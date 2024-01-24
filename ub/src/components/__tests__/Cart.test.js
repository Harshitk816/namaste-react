import { act } from "react-dom/test-utils"
import RestarauntMenu from "../RestarauntMenu"
import { BrowserRouter } from "react-router-dom"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from "../../reduxUtils/appStore"
import "@testing-library/jest-dom"
import Header from "../Header"
import Cart from "../Cart"

global.fetch=jest.fn(()=>
     Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA)
    })
)

it("should load restaraunt menu component",async()=>{
    await act(async()=>
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <RestarauntMenu/>
            <Cart/>
        </Provider>
        </BrowserRouter>
        
   ))
        

    const accordionHeader = screen.getByText("Recommended (20)")
    fireEvent.click(accordionHeader)
    const foodItems =  screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(20);

    expect(screen.getByText("Cart - 0")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button",{name:"ADD"});
    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart - 2")).toBeInTheDocument();
    
    const cartItems = screen.getAllByTestId("foodItems");
    expect(cartItems.length).toBe(22)

})