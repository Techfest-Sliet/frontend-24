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
          <Link to={route && `${route}`}>Explore</Link> 
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
          <h1 style={{ fontSize: "4rem", color: "#90E0EF" }}>{selectedDomain.name}</h1>
          <p style={{ padding: "5px 10rem", fontSize: "1.5rem" }}>
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
