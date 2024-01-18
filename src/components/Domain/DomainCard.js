import React from 'react'
import './DomainCard.css'

const DomainCard = (props) => {
  return (
    <div className='domainCard' style={{width:"100%", height:"100%", border:"2px solid red", position:'fixed', left:0, right:0}}>
        <h2 style={{color:"whitesmoke"}}>{props.domain.name}</h2>
        <button>i</button>
    </div>
  )
}

export default DomainCard;