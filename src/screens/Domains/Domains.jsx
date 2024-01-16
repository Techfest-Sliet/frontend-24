import React from "react";
import DomainCard from "../../components/Domain/DomainCard";
import './Domains.css'
import polarEffect from './../../images/polarEffect.png'
import Carousel from "react-material-ui-carousel";

const Domains = () => {
  const domains = [
    {
      name:'Plexus',
      description:''
    },
    {
      name:'Electrica',
      description:''
    },{
      name:'Chemica',
      description:''
    },{
      name:'Robozar',
      description:''
    },{
      name:'Mechanica',
      description:''
    },{
      name:'Food-O-Crats',
      description:''
    },{
      name:'Karyarachana',
      description:''
    },{
      name:'Genesis',
      description:''
    },
    {
      name:'Atomhiemer',
      description:''
    },
    {
      name:'Kermis',
      description:''
    },
    {
      name:'Aarambh',
      description:''
    }
  ]
  return (
    <>
      <div className="domainPage" style={{width:'auto', height:"100vh"}}>
        <div
          className="carousel"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height:"80%",
            border:"2px solid red"
          }}
        >
          <Carousel>
            {domains.map((domain, i) => {
            return <DomainCard key={i} domain={domain}/>
            })}
          </Carousel>
        </div>
        <div className="polarEffect" style={{height:"20%", border:"2px solid red", display:"flex", justifyContent:"center", alignItems:"center  "}}>
          <div className="polarImage" style={{width:"20%", height:"80%"}}>

          </div>
        </div>
      </div>
    </>
  );
};

export default Domains;
