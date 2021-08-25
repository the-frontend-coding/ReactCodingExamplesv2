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
                        <div>
                        <ul>
                        {Error? <li>{Error.message}</li>:
                        Countries.filter((element)=>element.name.length===8)
                        .map((filteredName)=>(
                        <li>{filteredName.name}</li>
                        ))}
                        </ul>  
                        <hr/>
                        </div>                      
                        )  
                    }

                    else{
                        return(
                            <div>
                            <h5>Loading......</h5>
                            <hr/>
                            </div>
                        )
                    }
                    
    }

export default ReactuseEffect

    

    


