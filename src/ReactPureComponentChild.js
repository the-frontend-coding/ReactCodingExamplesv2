import React from 'react'

const ReactPureComponentChild = (props) => {
    console.log("rendering comp")
    return (
        <div>
            {props.value}
        </div>
    )
}

export default ReactPureComponentChild



