import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./Events.css";
import StarCanvas from "../../screens/landingPage/StarbackGround";
import { Box, Modal } from "@mui/material";
import eventsData from "../../utils/events";
import axios from "axios";
import { baseUrl } from "../../API/Api";
import EventDisplayer from "./EventDisplayer";

function Events({ domains }) {
  const { domainName } = useParams();
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);
  const [domain, setDomain] = useState([]);
  const [openEventDisplayer, setOpenEventDisplayer] = useState(false);

  useEffect(() => {
    // console.log(domainId);

    // console.log("Domain Name==>", domainName);

    const getDomainById = async () => {
      axios.get(`${baseUrl}/event/getEventByDomainName/${domainName}`)
      .then((result) => {
        // console.log(result.data.event);
        setEvents(result.data.event);
      })
      .catch(err=>{
        console.log(err);
      })
    };
    getDomainById();
  }, []);

  const handleCloseEventDisplayer = () => {
    setOpenEventDisplayer(false);
  };
  const handleOpenEventDisplayer = () => {
    
  };

  return (
    <>
      <StarCanvas />
      <Box style={{ position: "relative", zIndex: "25" }}>
        <div className="event_container">
          <span style={{ color: "red", lineHeight: "4.5" }}>
            Registration for the events will start soon...
          </span>
          <h1 style={{ fontSize: "4rem", color: "#90E0EF" }}>
            {domain.domainName}
          </h1>
          <p className="domain_description">{domain.domainInfo}</p>
        </div>
        {events.map((item, index) => {
          return (
            <>
              <div className="eventCard" key={item.eventName}>
                <h1>{item.eventName}</h1>
                <p>{item.eventDescription.slice(0, 200)}</p>
                <button
                  className="event__button"
                  value="next"
                  type="button"
                  onClick={() => {
                    setOpenEventDisplayer(true);
                    navigate(`/events/${events[index]._id}`)
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
