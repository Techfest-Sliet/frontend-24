import React, { useEffect, useState } from 'react'
import { Card,CardContent,CardMedia,Typography } from '@mui/material'
import './sponsor.css';


const SponsorCard = ({actualData}) => {
//for mobile or desktop site view
const [maxWidth,setMaxWidth]=useState(345);
const [cardHeight,setCardHeight]=useState(200);
useEffect(()=>{
    if(window.innerWidth>900 && window.innerWidth<1200){
        setMaxWidth(645);
        setCardHeight(500);
    }
},[])

const {img,title,discription,id}=actualData;  

  return (
    
    <Card sx={{ maxWidth: maxWidth ,bgcolor:"black",color:"white",borderRadius:3}} className='sponsor-card'>
     
      <CardMedia
        sx={{ height: cardHeight ,m:1 , borderRadius:1}}
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {title}
        </Typography>
        <Typography variant="body2" >
          {discription}
        </Typography>
      </CardContent>
    
    </Card>

  )
}

export default SponsorCard
