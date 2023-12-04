/*const heading=React.createElement("h1",
{id:"heading1"},
"Hello World from React")*/
const parent =React.createElement(//creating nested elements
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child"},
        //sibling elements
        [React.createElement("h1",{},"I'm an h1 Tag"),
        React.createElement("h2",{},"I'm an h2 Tag")]
        ),
    React.createElement(
        "div",
        {id:"child1"},
        //sibling elements
        [React.createElement("h1",{},"I'm an h1 Tag"),
        React.createElement("h2",{},"I'm an h2 Tag")]
        )]
    )
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)