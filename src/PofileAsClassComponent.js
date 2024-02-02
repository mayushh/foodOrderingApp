import React from "react";

class ProfileClass extends React.Component {
    constructor(props) {
        // first the constructor is called then  other component is rendered
        super(props)
        this.state = {
            count: 0,
            count2: 0,
        }
    }
    componentDidMount(){
        // here we call the api 
        // after component if rendered componentDidMount is called or rendered
    }    
    componentDidUpdate(){
        // called after didmount
    }
    componentWillUnmount(){
        // called after didupdate 
    }
    render() {
            
            // functional component we just call api in useEffect function with a dependency variable
            // after constructor render is called or render is rendered
        const {count} = this.state;
        return (
            <>
                <h1> {this.state.count} </h1>
               {/* // setState is function whichhelp in setting the state and it's object */}
                <button onClick={() => {
                    this.setState(
                        {
                            count: count+1,
                        }
                    )
                }} style={{width:"40px",height:"20px"}}>button</button>
                
            </>)
    }
}
export default ProfileClass
/*
first the parent constructor will be called then
parent render will be called then
child constructor will be called then
child render then 
child componentdidmount
parent componentdidmount
*/