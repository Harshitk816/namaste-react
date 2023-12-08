
import React from "react"
import  ReactDOM  from "react-dom/client"

//using react element
const heading=React.createElement("h1",{id:"heading"},"Namaste React");


//using jsx
const jsxHeading=(
<h1 id="jsx" tabIndex="5">Heading using jsx</h1>
    );
const root=ReactDOM.createRoot(document.getElementById("root"));


const title= (
        <h1>Title using React Component</h1>
    )


const HeadingComponent2=()=>(
     <div className="Conatiner">
        <h1>{title}</h1>
        <h1>Namaste React Functional Component.</h1>
        </div>
)
root.render(<HeadingComponent2/>);