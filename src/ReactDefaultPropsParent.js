import React from 'react'
import ReactDefaultPropsChild from './ReactDefaultPropsChild'

export default function ReactDefaultPropsParent() {
    return (
        <div>
            <h3>props values have not been passed by parent component hence defaultProps values are rendered.</h3>
            {/*Chlild component to which props values has not been passed */}
            <ReactDefaultPropsChild/>
            <hr />
        </div>
    )
}
