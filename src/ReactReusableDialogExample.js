import React from 'react'
import { useState } from 'react'
import ReactReusableDialog from "./ReactReusableDialog"
import { Button } from '@material-ui/core'

function ReactReusableDialogExample() {

    const [isOpen, setisOpen] = useState(false)
    const [isOpenDialog, setisOpenDialog] = useState(false)

    let btext= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nisi repudiandae fugiat quibusdam voluptatem incidunt ab sunt cum ut, quam accusamus, impedit doloremque inventore maxime veritatis aliquid quisquam laboriosam? Non?"

    let ctext="Lorem ipsum dolor sit amet consectetur adipisicing elit."

    const  handleDialogOpen=()=>{
        setisOpen(true)
    }
    const  handleDialogClose=()=>{
        setisOpen(false)
    }

    const  handleOpen=()=>{
        setisOpenDialog(true)
    }
    const  handleClose=()=>{
        setisOpenDialog(false)
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleDialogOpen}>
            Open Dialog
            </Button>
            {/* Importing resuable dialog and passing props values to child component */}
            <ReactReusableDialog 
            title ="This Is Title"
            subtitle= "This Is Subtitle"
            children={btext}
            isOpen={isOpen}
            handleClose={handleDialogClose}/> <br /> <br />

            <Button variant="outlined" color="secondary" onClick={handleOpen}>
            Open Second Dialog
            </Button>
            <ReactReusableDialog 
            title ="This Is Title"
            subtitle= "This Is Subtitle"
            children={ctext}
            isOpen={isOpenDialog}
            handleClose={handleClose}/>
        </div>
    )
}

export default ReactReusableDialogExample



