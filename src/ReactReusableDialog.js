import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText,
    DialogTitle, Divider} from '@material-ui/core'

//"title" of the dialog, "subtitle" of the dialog, "content" of the dialog, 
//"isopen" and "handleClose" to handle opening and closing of the dialog 
 const ReactReusableDialog = ({title, subtitle, children, isOpen, handleClose}) => {
    return (
        <>
        {/*Below is the material-ui dialog, "maxwidth specified for large screen lg*/}
        <Dialog
            fullwidth
            maxwidth="lg"
            open={isOpen}
            onClose={handleClose}>
                <DialogTitle id="max-width-dialog-title">{title}</DialogTitle>
                <DialogContent>
                <DialogContentText>{subtitle}</DialogContentText>
                <Divider />
                {children}
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                   Close
                </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default ReactReusableDialog

