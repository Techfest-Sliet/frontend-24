import React from 'react'
import error from './../../images/error-removebg-preview.png'

const Error = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", flexDirection:"column"}}>
      <img src={error} alt="" />
      <p style={{color:"white"}}>Sorry, we can't find the page you are looking for. 😵‍💫</p>
    </div>
  )
}

export default Error;