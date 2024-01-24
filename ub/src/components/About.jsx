import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
            super(props);
        }

    render(){
        return (
            <div>
             <h1>About</h1>
             <h2>This is about page about Urban Harvest. </h2>
             {/* <User name={"Harshit Sharma (functional)"}/> */}
                <User name={"Harshit Sharma (class)"} location={"Bilapsur(class)"}/>
         </div>
        )
    }
}




// const About=()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is about page about Urban Harvest. </h2>
//             {/* <User name={"Harshit Sharma (functional)"}/> */}
//             <UserClass name={"Harshit Sharma (class)"} location={"Bilapsur(class)"}/>
//         </div>
//     )
// }
export default About;
