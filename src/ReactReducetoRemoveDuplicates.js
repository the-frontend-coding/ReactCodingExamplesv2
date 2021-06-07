import React from 'react'

const ReactReducetoRemoveDuplicates = () => {

    let courseArray=[{id:1, pName:"javascript"},
    {id:2, pName:"typescript"},
    {id:11, pName:"angular"},
    {id:1, pName:"javascript"},
    {id:12, pName:"typescript"}]

        //Using reduce method to remove duplicates
        function removeDuplicates(array, key) {
        return array.reduce((accumulator, element) => {
            if (!accumulator.find(el => el[key] === element[key])) 
            {
                accumulator.push(element);
            }
            return accumulator;//if no element to push return current-
            }, []);               //-accumulator
        }


        return (
            <div>
                <h3>reduce( ) method used to remove duplicates from array of  
                    objects</h3>
                    {removeDuplicates(courseArray, 'id').map(item=>(
                    <div key={item.id}>{item.id} - {item.pName}</div>
                    ))}
                    <hr />
            </div>
        )
    }

export default ReactReducetoRemoveDuplicates
