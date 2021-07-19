import React, { useState } from 'react'

function ReactHooksExample1() {

    //Declaring and initiating state variable using useState
    //"buttonText" is variable name, "Click Button" is
    //initial value, set"variable name" used to update value
    const [buttonText, setbuttonText] = useState("Click Button")
    
    return (
        <div>
            <h3>React Hooks Example1</h3>
            <button onClick={()=>setbuttonText("Thank You")}>
                {buttonText}
            </button>
            <hr />
        </div>
    )
}

export default ReactHooksExample1
