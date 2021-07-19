import React, { useState } from 'react'

function ReactHooksExample3() {

    //useState Example for Boolean value
    const [readMore, setreadMore] = useState(false)

    //More text to be displayed after clicking read more
    const extraContent = <p>More Text Here</p>

    //displaying "readmore" or "readless" based on "readMore" value
    const linkName= readMore ? "readLess" : "readMore";

    return (
        <div>
            <h3>React Hooks Example3</h3>
            <h5>Initial Text</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.

            {/* If "readMore" state variale value is true then display
            extra content else display null */}
            {readMore? extraContent : null}

            {/* updating the "readMore" value */}
            <a onClick={()=>setreadMore(!readMore)} 
            style={{textDecoration:"underline",
            color:"blue", cursor: "pointer"}}>
                {linkName}
            </a>
            </p>
            <hr />
        </div>
    )
}
export default ReactHooksExample3

