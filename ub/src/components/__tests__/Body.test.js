const { render, screen, fireEvent, getAllByTestId } = require("@testing-library/react")
import { BrowserRouter, json } from "react-router-dom"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react-dom/test-utils"
import "@testing-library/jest-dom"


//integration testing
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should render the body component and search resList for burger text input",async()=>{
    await act(async()=>render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>))
    //now as our component is involved with using state updates so wee nood to render our component inside act()
    //this fucntion returns a promise, so we need to use async await

    const cardsBeforeSearch = screen.getAllByTestId("resCard")
    expect(cardsBeforeSearch.length).toBe(20);
    //now we are gonna locate our search button and pass burger inside it and press search btn
    const searchBtn = screen.getByRole("button",{name:"Search"});
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, {target:{value:"burger"}});
    fireEvent.click(searchBtn);
    //screen should load two cards
    const cardsAfterSearch = screen.getAllByTestId("resCard")
    expect(cardsAfterSearch.length).toBe(1);
   
})

it("should render the body component with resList for top res button",async()=>{
    await act(async () =>render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>))

    const topResBtn = screen.getByRole("button",{name:"Top Rated Restaraunts"});
    fireEvent.click(topResBtn);
    const cards=screen.getAllByTestId('resCard');
    expect(cards.length).toBe(18);
})