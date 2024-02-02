import { Snackbar, Alert } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Toast = ({open, success ,message}) => {
  // const [open, setOpen] = useState(false)
  // useEffect(()=>{
  //   setOpen(true)
  //   setTimeout(()=>{setOpen(false)},2000)
  // },[message, success])
  return (
    <Snackbar
        open={open}
        anchorOrigin={{ vertical:'top', horizontal:"right" }}
        message="Toast Message"
        autoHideDuration={3000}
        TransitionComponent={"SlideTransition"}
      >
        <Alert severity={success ? "success" : "error"} variant="filled" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
  )
}

export default Toast