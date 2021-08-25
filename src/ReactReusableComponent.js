import React from 'react'

//"defaultName" to be dislayed in select tag, "label" is text to be displyed
//"Narray" is list of values to be displayed in select tag,
//"onChange" is event to be performed during selection of options
const ReactReusableComponent = ({defaultName, label, Narray, onChange}) => {

    //Display selected value
    const handlChange=(e)=>{
        onChange(e.target.value)
    }
                 
    return (
        <div>
            <form>
                <label>
                    {label}<br/> <br/>
                    <select onChange={handlChange}>
                        {Narray.map((item,index)=>(
                            <option key={index}>{item}</option>
                        ))}
                    </select>
                </label> <br/>
            </form>
           <h5>Selected Option is {defaultName}</h5> 
        </div>
    )
}
export default ReactReusableComponent
