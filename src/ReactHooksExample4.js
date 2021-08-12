import React, { useState } from 'react'

function ReactHooksExample4() {

    //useState Example for Array
    const [items, setitems] = useState([])
    const [itemName, setitemName] = useState('')

    //New  input value has been pushed to the array along with 
    //old values(...items) after submitting the form
    function handleSubmit(e){
        e.preventDefault();

        setitems([
            ...items,
            {
                name:itemName,
                id:items.length
            }
       ])
       setitemName("");
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label><b>Enter Input: </b> </label>

                {/* updating "itemName" value */}
                <input type="text" value={itemName} 
               onChange={(e)=>setitemName(e.target.value)} />

            </form>

            <ul>
                {/* looping through items array */}
                {items.map(element=>(
                    <li key={element.id}>
                        {element.name}
                    </li>
               ))}
           </ul>
           <hr />
        </div>
    )
}

export default ReactHooksExample4


