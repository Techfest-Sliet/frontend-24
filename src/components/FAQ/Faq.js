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
    </div>
  );
};

const Faq = () => {
  const [index, setIndex] = useState(0);
  const data = [
    {
        id: 1,
        question: "How to register on the website?",
        answer: (<p>You can enter your details and sign up at <a href='https://www.techfestsliet.org/' style={{ textDecoration: "none", color: "DodgerBlue", fontFamily: "productSans" }}> https://www.techfestsliet.org/</a></p>)

    },
    {
        id: 2,
        question: "When is techFEST'23?",
        answer: "The techfest is scheduled to be held on 24th-25th March."
    },
    {
        id: 3,
        question: "Do I need to pay any fee for registration?",
        answer: (<p>There is no registration fee for candidates enrolled in SLIET. For participants from other institutes the registration fee is: <li style={{fontFamily: "productSans"}}>Rs 299 for online events</li> <li style={{fontFamily: "productSans"}}>Rs 599 for offline events</li> </p>)
    },
    {
        id: 4,
        question: "How many teams can I be a part of for an event?",
        answer: "For a given event, a participant can be a part of only one team."
    },
    {
        id: 5,
        question: "Can I participate in multiple events?",
        answer: "Yes, you are encouraged to participate in as many events as you like. Also there are no departmental constraints i.e. students of a department can participate in of the other domains. "
    },
    {
        id: 6,
        question: "What is the registration process?",
        answer: "All members have to register themselves on the website. The team leader will then for a team and add the remaining members. "
    },
    {
        id: 7,
        question: "Can students of institutes other than SLIET participate in the events?",
        answer: "Yes, students enrolled in diploma and degree programs in any technical institute can participate."
    }
]
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
          heading={data[index % n]?.question}
          details={data[index % n]?.answer}
        />
        <Card
          heading={data[index+1 % n]?.question}
          details={data[index+1 % n]?.answer}
        />
        <Card
          heading={data[index+2 % n]?.question}
          details={data[index+2 % n]?.answer}
        />
        
        <div className="side-arrow" onClick={handleMaximise}>
          &gt;
        </div>
      </div>
      <div className="faqFooter">
        <div> &copy;2024 techFest'24. All Right Reserved </div>
        <div className="faqFooterNav"> <a href="/">HOME</a><a href="/sign-in">SIGN-IN</a><a href="/sign-up">SIGN-UP</a> </div>
        <div> <a href="https://www.linkedin.com/company/slietofficialtnp/"><LinkedInIcon/></a> <a href="https://www.instagram.com/slietofficialtnp?igsh=YzRic2F4c3k2aXVi"><InstagramIcon/></a></div>
        </div>
    </div>
  );
};

export default Faq;
