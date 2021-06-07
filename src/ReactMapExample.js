import React from 'react'

export default function ReactMapExample() {

    const data = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 3, name: "Jane Doe" }
      ];

    return (
        <div>
            <h3>React Map Example</h3>
            {/*Map method that iterates through "data" array,
            element(value) "user" contains both object values
            that can be accessed using ".id" ".name" */}
            {data.map((user) => (
            <div>{user.name} - {user.id} </div>
            ))}       
            <hr />    
        </div>
    )
}
