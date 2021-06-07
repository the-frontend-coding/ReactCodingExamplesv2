import React, { Component } from 'react'

export default class ReactSpreadOperator extends Component {

    //Initiaising state object values
    state={
        userName:"None",
        company:"Vintage",
        role:"Developer"
    }

    //Capturing input event value, updating 'userName' with that input value
    //added new state object "entry" keeping all other state objects unchanged
    //"...this.state"
    handleChange=(e)=>{
    this.setState({...this.state,entry:true,userName:e.target.value})
    }

    //printing all state object values on console after clickig submit button
    handleClick=()=>{
        console.log(this.state);
        alert("State Object Value " + this.state.userName) 
    }
    
    render() {
        return (
            <div>
                <h3>If we want to keep all the state objects unchanged except the ones' to be updated or new objects have to be added then we can make use of spread operator. </h3>
               <h4>Enter User Name</h4> 
               <input type="text" onChange={this.handleChange}/><br /><br />
               <button onClick={this.handleClick}>Submit</button>
               <hr />
            </div>
        )
    }
}
