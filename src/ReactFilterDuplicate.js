import React from 'react'

const ReactFilterDuplicate = () => {

    var data = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 3, name: "Jane Doe" },
        { id: 2, name: "Victor Wayne" },
      ];

    return (
        <div>
            <h3>filter() and findIndex() methods used to remove duplicate values from array of objects.</h3>
            {/*"findIndex" method returs the index of very first occurance of the
            element that satisfies the condition, then that index compared with 
            current iteration index if equal then it returns true and that element
            is added to array else filtered*/}

            {data
            .filter((user,index) => index=== data.findIndex(ele=>ele.id===user.id))
            .map(user=> (
            <div key={user.id}>{user.name} - {user.id} </div>
            ))}
            <hr />
        </div>
    )
}

export default ReactFilterDuplicate
