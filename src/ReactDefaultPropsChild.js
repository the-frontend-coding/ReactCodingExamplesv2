import React from 'react'

//Child component
const ReactDefaultPropsChild = (props) => {

    //"subject" and "description" props to which values has to be passed
    const {subject,description} = props;

    return (
        <div>
            <h4>{subject}</h4>
            <p>{description}</p>
        </div>
    )
}

ReactDefaultPropsChild.defaultProps ={
    subject:"Earth",
    description:"It is our planet"
}

export default ReactDefaultPropsChild
