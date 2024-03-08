import React, { useEffect, useState } from 'react'
import EventDisplayer from '../eventDisplayer/EventDisplayer'
import ComingSoon from '../comingSoon/ComingSoon'
import SponsorCard from './SponsorCard'
import sliderData from './data'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './sponsor.css';
import StarCanvas from '../../screens/landingPage/StarbackGround'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Sponsor = () => {
  
  const [data,setData]=useState(sliderData);
  const [screenWidth,setScreenWidth]=useState(true);
  useEffect(()=>{
    if(window.innerWidth<450){
      setScreenWidth(false)
    }
  },[])

  return (
    
    <div className='carousel-container'>
    <StarCanvas/>
    <h1>Past Sponsors</h1>
   <Carousel
   className='carousel'
    responsive={responsive} 
    showDots={screenWidth} 
    swipeable={true} 
    autoPlaySpeed={1300}
    autoPlay={true}
    rewindWithAnimation={true}
    rewind={true}
    renderDotsOutside={true}
   
  >
  
   {
    data.map((item,id)=>{
      return <SponsorCard actualData={item} key={id} />
      
    })
   }
   
    </Carousel>
    
    </div>
   
   
  )
}

export default Sponsor