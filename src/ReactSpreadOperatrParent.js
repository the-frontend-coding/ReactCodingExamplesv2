import React from 'react'
import ReactSpreadOperatrChild from './ReactSpreadOperatrChild'

//parent component
export default function ReactSpreadOperatrParent() {

    let person={
        userName:'Elina',
        userAge:22,
        userPlace:'Ny'
    }

    return (
        <div>
            <h3>If we have to pass multiple props values from parent to child then we can make use of spread opearator.</h3>
            {/*Child component that accepts props*/ }
            <ReactSpreadOperatrChild {...person} />
            <hr />
       </div>
    )
}
