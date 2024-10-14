import React, { useState, useEffect } from "react";
import "./Arambh.css";
import StarCanvas from "../../screens/landingPage/StarbackGround";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { baseUrl } from "../../API/api"
import Swal from "sweetalert2";

const aarambhEvents = await fetch(`${baseUrl}/workshop`)
    .then(response => response.json());


const currentDate = new Date();
const upcomingEvents = [];
const completedEvents = [];

aarambhEvents.forEach(event => {
    const start_time = new Date(event.start_time);
    const end_time = new Date(event.end_time);
    if (end_time > currentDate)
        upcomingEvents.push(event);
    else
        completedEvents.push(event);
})

const throwError = (e) => {
    if (!e.ok) {
        Swal.fire({
            title: 'Error!',
            text: `Unexpected Error: ${e.statusText}`,
            icon: 'error',
        })
    }
    return e;
}

const throwTextError = (e) => {
    Swal.fire({
        title: 'Error!',
        text: `Unexpected Error: ${e}`,
        icon: 'error',
    })
}

const Card = ({ name, description, start_date, end_date, route, isCompleted, id, register }) => {
    const startD = new Date(start_date)
    const endD = new Date(end_date)
    const startDate = startD.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
    });
    const endDate = endD.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
    });
    return (
        <>
            <div className="arambhCard">
                <h1>{name}</h1>
                <p>{description}</p>
                {!isCompleted ? (
                    <>
                        <p>Start Date : {startDate}</p>
                        <p>End Date : {endDate}</p>
                    </>
                ) : (<p>Date : {endDate}</p>)}
                {!isCompleted && <button className="arambh__button" value="next" type="button">
                    <Link onClick={() => {
                        fetch(route, { method: "POST", credentials: "include", headers: { "Content-Type": "application/x-www-form-urlencoded", body: new URLSearchParams({ id: id }) } }).then(throwError)
                            .then((r) => {
                                r.ok &&
                                    Swal.fire({
                                        text: `You have joined this workshop`,
                                        confirmButtonColor: "#0096FF",
                                        customClass: {
                                            confirmButton: "order-2",
                                        },
                                    })
                            })
                            .catch((e) => { throwTextError(e); console.error(e); })
                    }}>
                        Register
                    </Link>
                </button>}
            </div>
        </>
    );
};

const Arambh = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    return (
        <>
            <StarCanvas />
            <Box style={{ position: "relative", zIndex: "25" }}>
                <div className="arambh_container">
                    <h1 style={{ fontSize: "4rem", color: "#90E0EF" }}>AARAMBH</h1>
                    <p style={{ padding: "5px 10rem", fontSize: "1.5rem" }}>
                        Great things aren't just there, there's a sweet beginning that will
                        finally leads to the grand scheme of events. And so we bring you
                        sweet starting events - Arambh. Here you'll find the prefest events
                        that will make get you pull up your socks.
                    </p>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "30px",
                    paddingBottom: "0px",
                    fontSize: "40px",
                    color: "white",
                    fontWeight: 800,
                    textShadow: "2px 2px red",
                }}>
                    <span
                    >
                        Upcoming Events
                    </span>
                </div>
                {upcomingEvents.map((item) => {
                    return (
                        <Card
                            name={item.name}
                            description={item.description}
                            start_date={item.start_time}
                            end_date={item.end_time}
                            route={`${baseUrl}/workshop/join?id=${item.id}`}
							id={item.id}
                            register={true}
                        />
                    );
                })}

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "30px",
                    paddingBottom: "0px",
                    fontSize: "40px",
                    color: "white",
                    fontWeight: 800,
                    textShadow: "2px 2px red",
                }}>
                    <span
                    >
                        Completed Events
                    </span>
                </div>
                {completedEvents.map((item) => {
                    return (
                        <Card
                            name={item.name}
                            description={item.description}
                            start_date={item.start_time}
                            end_date={item.end_time}
                            route={""}
                            isCompleted={true}
                            register={true}
                        />
                    );
                })}
            </Box>
        </>
    );
};
export default Arambh;
