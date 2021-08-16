import React, { useEffect, useState } from 'react'

function ReactuseEffectExample() {

    const [countries, setcountries] = useState([])
    const [load, setload] = useState(false)
    const [error, seterror] = useState("")
   
    //In the below async function we are fetching data
    async function getData(){
        const response = await fetch ("https://restcountries.eu/rest/v2/all")
        const data = await response.json()

        if(data!==null){
            setcountries(data)
            setload(true)
        }

        else{
            seterror("error message")
            setload(true)
        }
    }

    // the above async function passed in below useEffect
    useEffect(()=>{
        getData()},[])

    if(load){
        return(
            <ul>
                {/*In the below example resulting data is filtered
                by returning the names those starts with letter "Z"*/}
                {error? <li>{error}</li>:
                countries.filter((element)=>element.name.indexOf("Z")===0)
                .map((filterName,index)=>(
                    <li key={index}>{filterName.name}</li>
                ))}
            </ul>
        )
    }

    else{
        return(
            <div>Loading.....</div>
        )
    }
}

export default ReactuseEffectExample




