import React from 'react'

export default function ReactMaptoRemoveDuplicates() {

    var data = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 3, name: "Jane Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 4, name: "Victor Wayne" },
      ];
    //Using Map constructor and map to remove duplicates
      var filteredUsers=(user)=>{
      return [...new Map(user.map(item => [item.id, item])).values()]
      } 

    return (
        <div>
            <h3>map() method and Map constructor used to remove duplicates from array of objects.</h3>
             {/*function retuns array which is iterated using map*/}
            {filteredUsers(data).map(item=>(
            <div key={item.id}> {item.id} - {item.name}</div>
            ))}
            <hr />
        </div>
    )
}
