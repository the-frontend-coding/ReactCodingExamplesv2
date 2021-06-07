import React from 'react'

//Child component
export default function ReactSpreadOperatrChild(props) {

    //To extract values in variables sent by parent component
    const {userName, userAge, userPlace} = props;

    return (
        <div>
            <h4>Person details:</h4>
            <ul>
                <li>name={userName}</li>
                <li>age={userAge}</li>
                <li>place={userPlace}</li>
            </ul>
        </div>
    )
}
