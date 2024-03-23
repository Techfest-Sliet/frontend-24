import React, { useState } from "react";
import "./Faq.css";
import linkedIn from "./../../assets/icons8-linkedin-50.png";
import instagram from "./../../assets/icons8-instagram-50.png";
import StarCanvas from "../../screens/landingPage/StarbackGround";
import { Button } from "@mui/material";

const Card = ({ heading, details }) => {
  return (
    <div className="faqCardDetails">
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
      answer: (
        <p>
          You can enter your details and sign up at{" "}
          <a
            href="https://www.techfestsliet.org/"
            style={{
              textDecoration: "none",
              color: "DodgerBlue",
              fontFamily: "productSans",
            }}
          >
            {" "}
            https://www.techfestsliet.org/
          </a>
        </p>
      ),
    },
    {
      id: 2,
      question: "When is techFEST'24?",
      answer: "The techfest is scheduled to be held on 5th-6th April.",
    },
    {
      id: 3,
      question: "Do I need to pay any fee for registration?",
      answer: "No fees is required for techFEST'24.",
    },
    {
      id: 4,
      question: "How many teams can I be a part of for an event?",
      answer:
        "For a given event, a participant can be a part of only one team.",
    },
    {
      id: 5,
      question: "Can I participate in multiple events?",
      answer:
        "Yes, you are encouraged to participate in as many events as you like. Also there are no departmental constraints i.e. students of a department can participate in of the other domains. ",
    },
    {
      id: 6,
      question:
        "Can students of institutes other than SLIET participate in the events?",
      answer:
        "Yes, students enrolled in diploma and degree programs in any technical institute can participate.",
    },
  ];
  const n = data.length;
  const handleMinimise = () => {
    if (index > 0) setIndex(index - 1);
  };
  const handleMaximise = () => {
    if (index < n - 3) setIndex(index + 1);
  };
  return (
    <>
      <StarCanvas />
      <div className="faqContainer">
        <div className="faqHeading">
          <span className="faq" style={{ color: "white" }}>
            F
          </span>
          requently{" "}
          <span className="faq" style={{ color: "white" }}>
            A
          </span>
          sked{" "}
          <span className="faq" style={{ color: "white" }}>
            Q
          </span>
          uestions
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
            heading={data[index + (1 % n)]?.question}
            details={data[index + (1 % n)]?.answer}
          />
          <Card
            heading={data[index + (2 % n)]?.question}
            details={data[index + (2 % n)]?.answer}
          />
          <Card
            heading={data[index + (3 % n)]?.question}
            details={data[index + (3 % n)]?.answer}
          />
          <Card
            heading={data[index + (4 % n)]?.question}
            details={data[index + (4 % n)]?.answer}
          />
          <Card
            heading={data[index + (5 % n)]?.question}
            details={data[index + (5 % n)]?.answer}
          />

          <div className="side-arrow" onClick={handleMaximise}>
            &gt;
          </div>
        </div>
        <div className="faqFooter">
          <div> &copy;2024 techFest'24. All Right Reserved </div>
          <div>
            {" "}
            <a
              href="https://www.linkedin.com/company/techfest-sliet/"
              target="main"
            >
              <img src={linkedIn} alt="" style={{ width: "30%" }} />
            </a>{" "}
            <a href="https://www.instagram.com/techfestsliet_/" target="main">
              <img src={instagram} alt="" style={{ width: "30%" }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
