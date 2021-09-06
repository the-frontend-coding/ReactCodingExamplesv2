import {React, useEffect, useState} from "react"
import {Link} from 'react-router-dom'

//Nav item Router1 related page to be displaye
const ReactRouter2 = () => {
    const [items, setitems] = useState([]);

    //Fetching random user's data to be displyed in page
    useEffect(()=>{
        fetch("https://reqres.in/api/users?page=2")
        .then (response=>response.json())
        .then (data=>setitems(data.data))
        
    },[])

    const handleClick=()=>{
        console.log(items);
    }

    return (
        <div>
            <h1>This is ReactRouter2 Page</h1>
            {/*When each item present in the list is clicked then it is redirected to
            description Page */}
            {items.map(result=>(
                <ul className="nav-links" key={result.id}>
                    <Link  to="/router2/${result.id}"className="nav-style">
                <li>{result.first_name}</li>
                </Link>
                </ul>

            ))}
            <button onClick={handleClick}>Click ME</button>

        </div>
    )
}

export default ReactRouter2




