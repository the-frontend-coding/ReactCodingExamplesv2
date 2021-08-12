import React, { useState, useEffect } from 'react'

function ReactuseEffect() {

    const [Countries, setCountries] = useState([])
    const [Load, setLoad] = useState(false)
    const [Error, setError] = useState("")

    useEffect(() => {

        fetch("https://restcountries.eu/rest/v2/all")
        .then(response=>response.json())
        .then (data=>{
            setCountries(data);
            setLoad(true);
            })
        
            .catch(err=>{
                setError(err.message);
                setLoad(true)
                })
                }, [])

                if(Load){
                    return(
                        <ul>
                        {Error? <li>{Error.message}</li>:
                        Countries.filter((element)=>element.name.length===8)
                        .map((filteredName)=>(
                        <li>{filteredName.name}</li>
                        ))}
                        </ul>
                        )
                    }

                    else{
                        return(
                            <div>Loading......</div>
                        )
                    }

    }

export default ReactuseEffect

    

    


