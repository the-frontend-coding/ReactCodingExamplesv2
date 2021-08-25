import React, { useState } from 'react'
import ReactReusableComponent from './ReactReusableComponent'


function ReactSelectTag() {

    const [shoesName, setshoesName] = useState("Prada")
    const [colorName, setcolorName] = useState("Black")

    //"Narray" list of values to be displayed in select tag
    //Passing values to "Naarray" and "label" from
    // "ReactReusableComponent" (child component)
    const shoes = {
        Narray:["Prada", "Adidas", "Nike", "Puma"],
        label: "Select from below shoes list"
    }

    const colors = {
        Narray:["Black", "White", "Blue", "Yellow"],
        label: "Select from below colors list"
    }


        //"value" is nothing but e.target.value passed to
        //onChange method in child component
        const handleShoes = (value)=>{
            setshoesName(value)
            }
    

         const handleColor = (value)=>{
            setcolorName(value)
                }

    return (
        <div>
            {/*"ReactReusableComponent" is resuable select tag
            component*/}
            <ReactReusableComponent defaultName={shoesName}
            {...shoes} onChange={handleShoes}/>

            <ReactReusableComponent defaultName={colorName}
            {...colors} onChange={handleColor}/>
          <hr/>  
        </div>
    )
}

export default ReactSelectTag
