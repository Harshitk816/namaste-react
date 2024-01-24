import { render, screen } from "@testing-library/react"
import RestarauntCard from "../RestarauntCard"
import MOCK_DATA from "../mocks/ResCardMock.json"
import "@testing-library/jest-dom"

it("should render RestarauntCard components with props data",()=>{
    render(<RestarauntCard resData = {MOCK_DATA}/>);

    const resName = screen.getByText("KFC");

    expect(resName).toBeInTheDocument();
})