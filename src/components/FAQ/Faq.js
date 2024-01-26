import React, { useState } from "react";
import "./Faq.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Card = ({ heading, details }) => {
  return (
    <div className="faqCardDetails">
      ABOUT
      <div className="cardHeading">{heading}</div>
      {details}
      <br />
      <br />
      <a href="/">Read More &gt;</a>
    </div>
  );
};

const Faq = () => {
  const [index, setIndex] = useState(0);
  const data = [
    {
      heading: "Login and Password1",
      details:
        "If you want to login click on the sign-in button and enter the details",
      link: "/",
    },
    {
      heading: "Login and Password2",
      details:
        "If you want to login click on the sign-in button and enter the details",
      link: "/",
    },
    {
      heading: "Login and Password3",
      details:
        "If you want to login click on the sign-in button and enter the details",
      link: "/",
    },
    {
      heading: "Login and Password4",
      details:
        "If you want to login click on the sign-in button and enter the details",
      link: "/",
    },
    {
      heading: "Login and Password5",
      details:
        "If you want to login click on the sign-in button and enter the details",
      link: "/",
    },
    {
      heading: "Login and Password6",
      details:
        "If you want to login click on the sign-in button and enter the details",
      link: "/",
    },
    {
      heading: "Login and Password7",
      details:
        "If you want to login click on the sign-in button and enter the details",
      link: "/",
    },
    {
      heading: "Login and Password8",
      details:
        "If you want to login click on the sign-in button and enter the details",
      link: "/",
    },
  ];
  const n = data.length;
  const handleMinimise = () => {
    if (index >0) setIndex(index-1);
  };
  const handleMaximise = () => {
    if (index < n-3) setIndex(index+1);
  };
  return (
    <div className="faqContainer">
      <div className="faqHeading">
        <span className="faq">F</span>requently <span className="faq">A</span>
        sked <span className="faq">Q</span>uestions
      </div>
      <div className="faqSubHeading">
        Explore our help community or learn more about techFest.
      </div>
      <div className="textScroller">
        <div className="side-arrow" onClick={handleMinimise}>
          &lt;
        </div>
        <Card
          heading={data[index % n]?.heading}
          details={data[index % n]?.details}
        />
        <Card
          heading={data[index+1 % n]?.heading}
          details={data[index+1 % n]?.details}
        />
        <Card
          heading={data[index+2 % n]?.heading}
          details={data[index+2 % n]?.details}
        />
        
        <div className="side-arrow" onClick={handleMaximise}>
          &gt;
        </div>
      </div>
      <div className="faqFooter">
        <div> &copy;2024 techFest. All Right Reserved </div>
        <div className="faqFooterNav"> <a href="/">HOME</a><a href="/sign-in">SIGN-IN</a><a href="/sign-up">SIGN-UP</a> </div>
        <div> <a href="https://www.linkedin.com/company/slietofficialtnp/"><LinkedInIcon/></a> <a href="https://www.instagram.com/slietofficialtnp?igsh=YzRic2F4c3k2aXVi"><InstagramIcon/></a></div>
        </div>
    </div>
  );
};

export default Faq;
