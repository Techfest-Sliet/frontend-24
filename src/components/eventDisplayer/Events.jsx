import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Events.css";
import StarCanvas from "../../screens/landingPage/StarbackGround";
import { Box } from "@mui/material";
import eventsData from "../../utils/events";

const Card = ({ heading, detail, route }) => {
  return (
    <>
      <div className="eventCard">
        <h1>{heading}</h1>
        <p>{detail}</p>
        <button className="event__button" value="next" type="button">
          <a href={route} target="_main">Explore</a> 
        </button>
      </div>
    </> 
  );
};

function Events({ domains }) {
  const { domainId } = useParams();
  const selectedDomain = domains.find(domain => domain.id === parseInt(domainId));
  const {events} = eventsData[domainId - 1] ||  [];
  // console.log(events);

  return (
    <>
      <StarCanvas />
      <Box style={{ position: "relative", zIndex: "25" }}>
        <div className="event_container">
          <span style={{color:"red",lineHeight:"4.5"}}>Registration for the events will start soon...</span>
          <h1 style={{ fontSize: "4rem", color: "#90E0EF" }}>{selectedDomain.name}</h1>
          <p className="domain_description">
            {selectedDomain.description}
          </p>
        </div>
        {events.map((item) => {
          return (
            <>
              <Card
                heading={item.name}
                detail={item.description}
                route={item.route}
              />
            </>
          );
        })}
      </Box>
    </>
  );
}

export default Events;