import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:"Null",
                location:"Default",
                avatar_url:"https://www.dummy-image.com"
            },
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/HarshitK816");
        const json = await data.json();

        this.setState({
            userInfo:json,
            }
        )
        console.log(json);
    }
    render(){
        const {name,location,avatar_url}=this.state.userInfo;
        
        return(
            <div className="user-card">
                <img width="100px" src={avatar_url}></img>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>Contact : @Harshitk816</h4>
        </div> 
        )
    }
}
export default UserClass;