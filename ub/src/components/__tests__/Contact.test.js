import Contact from "../Contact"
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"

/*--------------------------------------------------UNIT TESTING-----------------------------------------------------*/

//for grouping test cases
describe("Contact component test cases",() => {
    test("Should load contact us component", ()=>{
        render(<Contact/>); //this will render our component to jsdom
    
        const heading = screen.getByRole("heading"); //this will get us all the headings inside this const 
        expect(heading).toBeInTheDocument();//expects whether this heading is in the document or not
    });
    //it and test are same thing
    it("Should load button inside my contact component", ()=>{
        render(<Contact/>); 
    
        const text = screen.getByText("Submit"); //this will find Submit text inside our page 
        expect(text).toBeInTheDocument();//expects whether this Submit text is in the document or not
    });
    
    
    it("Should load 2 input boxes inside my contact component", ()=>{
        render(<Contact/>); 
    
        const inputBoxes = screen.getAllByRole("textbox") //if there are multiple elements with sa,e role them use this
        //as we have used all this get an array of result
        expect(inputBoxes.length).toBe(2);//expects whether this Submit text is in the document or not
    });
})