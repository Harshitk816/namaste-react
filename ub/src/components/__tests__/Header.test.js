import { fireEvent, render, screen } from "@testing-library/react"
import  Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../reduxUtils/appStore"
import { BrowserRouter } from "react-router-dom"
import { Screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("common test cases for Header Component",()=>{

    // beforeAll(()=>{
    //     console.log("Before All")
    // })
    // beforeEach(()=>{
    //     console.log("Before Each")
    // })
    // afterAll(()=>{
    //     console.log("After All")
    // })
    // afterEach(()=>{
    //     console.log("After Each")
    // })

    it("should load header component with a login button",()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
            <Header/>
            </Provider>
        </BrowserRouter>
        )
    
        //asserts
        const loginButton = screen.getByRole("button",{name:"Login"});
        expect(loginButton).toBeInTheDocument();
    
    });
    
    it("should render cart with 0 items",()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
            <Header/>
            </Provider>
        </BrowserRouter>
        )
        const cartItems = screen.getByText(/Cart/); //using regex
        expect(cartItems).toBeInTheDocument();
    });
    
    it("should render cart with 0 items",()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
            <Header/>
            </Provider>
        </BrowserRouter>
        )
        const cartItems = screen.getByText(/Cart/); //using regex
        expect(cartItems).toBeInTheDocument();
    });
    
    it("should change login button to logout on click",()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
            <Header/>
            </Provider>
        </BrowserRouter>
        )
    
        const loginButton = screen.getByRole("button",{name:"Login"});
        fireEvent.click(loginButton);//event- onClick button
    
        const logoutButton = screen.getByRole("button",{name:"Logout"});
    
        expect(logoutButton).toBeInTheDocument();
    
    });

})

