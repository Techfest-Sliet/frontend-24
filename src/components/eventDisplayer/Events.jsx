import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Events.css";
import StarCanvas from "../../screens/landingPage/StarbackGround";
import { Box, Button } from "@mui/material";
import axios from "axios";
import { baseUrl } from "../../API/Api";
import Error from "../Error/Error";

function Events() {
  const { domainName } = useParams();
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
       const getEventByDomainName = () => {
      axios
        .get(`${baseUrl}/event/geteventbydomainname/${domainName}`)
        .then((result) => {
          setEvents(result.data.event);
        })
        .catch((err) => {
          setError(true);
          console.log("err ==>",err);
        });
    };
    getEventByDomainName();
  }, []);

  return (
    <>
    {error && <Error/>}
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
              {/* {openEventDisplayer && (
                <Modal
                  open={openEventDisplayer}
                  onClose={handleCloseEventDisplayer}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <EventDisplayer
                    eventDetails={events}
                    onCancel={handleCloseEventDisplayer}
                  />
                </Modal>
              )} */}
            </>
          );
        })}
      </Box>
    </>
  );
}

export default Events;
