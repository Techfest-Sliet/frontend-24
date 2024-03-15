import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Events.css";
import StarCanvas from "../../screens/landingPage/StarbackGround";
import { Box, Modal } from "@mui/material";
import eventsData from "../../utils/events";
import axios from "axios";
import { baseUrl } from "../../API/Api";
import EventDisplayer from "./EventDisplayer";

function Events({ domains }) {
  const { domainId } = useParams();
  const selectedDomain = domains.find(
    (domain) => domain.id === parseInt(domainId)
  );
  const { events } = eventsData[domainId - 1] || [];
  // console.log(events);

  const [event, setEvent] = useState(null);
  const [openEventDisplayer, setOpenEventDisplayer] = useState(false);

  let domainName;
  if (domainId === "1") {
    domainName = "Plexus";
  } else if (domainId === "2") {
    domainName = "Electrica";
  } else if (domainId === "3") {
    domainName = "Food";
  } else if (domainId === "4") {
    domainName = "Mechanica";
  } else if (domainId === "5") {
    domainName = "Chemica";
  } else if (domainId === "6") {
    domainName = "Electronica";
  } else if (domainId === "7") {
    domainName = "Genesis";
  } else if (domainId === "8") {
    domainName = "Kermis";
  } else if (domainId === "9") {
    domainName = "Robozar";
  } else if (domainId === "10") {
    domainName = "Karyarachna";
  } else if (domainId === "11") {
    domainName = "Atomhiemer";
  } else if (domainId === "12") {
    domainName = "Venture Vault";
  } else if (domainId === "13") {
    domainName = "";
  }

  useEffect(() => {
    console.log(domainId);

    console.log("Domain Name==>", domainName);

    const getDomain = async () => {
      await axios
        .post(`${baseUrl}/event/getEventByDomain`, {
          domainName: `${domainName}`,
        })
        .then((result) => {
          console.log(result.data.event);
          setEvent(result.data.event);
        });
    };
    getDomain();
  }, []);

  return (
    <>
      <StarCanvas />
      <Box style={{ position: "relative", zIndex: "25" }}>
        <div className="event_container">
          <span style={{ color: "red", lineHeight: "4.5" }}>
            Registration for the events will start soon...
          </span>
          <h1 style={{ fontSize: "4rem", color: "#90E0EF" }}>
            {selectedDomain.name}
          </h1>
          <p className="domain_description">{selectedDomain.description}</p>
        </div>
        {events.map((item) => {
          return (
            <>
              <div className="eventCard">
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <button
                  className="event__button"
                  value="next"
                  type="button"
                  onClick={() => {
                    setOpenEventDisplayer(true);
                  }}
                >
                  Explore
                </button>
              </div>
              {openEventDisplayer && (
                <Modal
                open={true}
                onClose={() => {
                  setOpenEventDisplayer(false);
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                  <EventDisplayer eventDetails={event}/>
                </Modal>
              )}
            </>
          );
        })}
      </Box>
    </>
  );
}

export default Events;
