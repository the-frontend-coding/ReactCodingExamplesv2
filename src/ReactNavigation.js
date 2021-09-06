import React from 'react'
import {Link} from 'react-router-dom'

//This is navigation bar component
const ReactNavigation = () => {
    return (
        <div>
            <nav>
                {/* When particular nav item is clicked then it is redirected to
                related page, by specifying path of that page in "to" */}
                <Link to="/" className="nav-style">
                <h3>Logo</h3>
                </Link>
            <ui className="nav-links">
                <Link to="/router1" className="nav-style" >
                <li>Router1</li>
                </Link>
                <Link to="/router2" className="nav-style" >
                <li>Router2</li>
                </Link>
            </ui>

            </nav>
        </div>
    )
}

export default ReactNavigation
