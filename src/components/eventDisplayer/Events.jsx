import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Events.css";
import StarCanvas from "../../screens/landingPage/StarbackGround";
import { Box, Button } from "@mui/material";
import axios from "axios";
import { baseUrl } from "../../API/api";
import Error from "../Error/Error";
// import Loader from "../Loader/loader";

function Events() {
  const { domainName } = useParams();
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getEventByDomainName = () => {
      setIsLoading(true);
      axios
        .get(`${baseUrl}/event/geteventbydomainname/${domainName}`)
        .then((result) => {
          setIsLoading(false);
          setEvents(result.data.event);
        })
        .catch((err) => {
          setError(true);
          setIsLoading(false);
        });
    };
    getEventByDomainName();
  }, []);

  return (
    <>
      {error && <Error />}
      {/* {isLoading && <Loader />} */}
      <StarCanvas />
      <Box style={{ position: "relative", zIndex: "25" }}>
        <div className="event_container">
          <h1 style={{ fontSize: "4rem", color: "#90E0EF" }}>
            {domainName.toUpperCase()}
          </h1>
          <p className="domain_description"></p>
        </div>
        {events.map((item, index) => {
          return (
            <>
              <div className="eventCard" key={item.eventName}>
                <h1>{item.eventName}</h1>
                <div className="eventDescription">
                  <p>
                    {item.eventDescription.slice(0, 200)}
                    <Button
                      variant=" "
                      sx={{ color: "grey" }}
                      onClick={() => {
                        navigate(`/events/${events[index]._id}`);
                      }}
                    >
                      Read More
                    </Button>
                  </p>
                </div>
                <button
                  className="event__button"
                  value="next"
                  type="button"
                  onClick={() => {
                    navigate(`/events/${events[index]._id}`);
                  }}
                >
                  Explore
                </button>
              </div>
            </>
          );
        })}
      </Box>
    </>
  );
}

export default Events;
