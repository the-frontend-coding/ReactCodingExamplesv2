import React, { useState } from 'react'

function ReactHooksExample2() {

    //Declaring and initiating state variable using useState
    //"Steps" is variable name, "0" is initial value, 
    const [Steps, setSteps] = useState(0)

    const increment=()=>{
        //set"variable name" used to update state value
        //based on previous state value
        setSteps(prevState => prevState+1)
    }

    return (
        <div>
            <h3>React Hooks Example2</h3>
            <h5>Today I have taken {Steps} Steps!</h5> <br />
            <button onClick={increment}>
            Click, If you have taken another step
            </button>
            <hr />
        </div>
    )
}

export default ReactHooksExample2
