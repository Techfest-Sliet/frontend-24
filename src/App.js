import React, { useState, useEffect } from "react";
import LandingPage from "./screens/landingPage/landingPage";
import { Routes, Route } from "react-router-dom";
import Merchandise from "./components/Merchandise/Merchandise.jsx"
import WorkShops from "./screens/Workshops/Workshops";
import Error from "./components/Error/Error";
import SignIn from "./components/Auth/SignIn/SignIn";
import SignUp from "./components/Auth/SignUp/SignUp";
import Login from "./components/Auth/Login/Login";

import ResetPassword from "./components/Auth/ResetPassword/ResetPassword";
import ResetPasswordForm from "./components/Auth/ResetPassword/ResetPasswordForm.js"

import EmailVerify from "./components/Auth/EmailVerify/EmailVerify";

import FAQ from "./components/FAQ/Faq";

import AboutUs from "./screens/AboutUs/AboutUs";
import Enquiry from "./screens/Enquiry/Enquiry.jsx";
import UserDashBoard from "./screens/UserDashboard/UserDashboard";
import StudentProfile from "./screens/UserDashboard/Profile/Profile";
import NavBar from "./components/navbar/Navbar";

import Footer from "./components/Footer/Footer";

import Domains from "./screens/Domains/Domains";
import EventDisplayer from "./components/eventDisplayer/EventDisplayer";
import Sponsors from "./components/sponsor/Sponsor";
import Arambh from "./components/Aarambh/Arambh";
import Events from "./components/eventDisplayer/Events";
import OurTeam from "./components/OurTeam/OurTeam";

import domainData from "./utils/domains";
import eventsData from "./utils/events";
import Gallery from "./components/gallery/Gallery";
import TeamTable from "./screens/UserDashboard/TeamTable";

import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "@mui/material";
import AddTeam from "./screens/UserDashboard/addTeam";

import { baseUrl } from "./API/api.js";

function App() {
    const [userLogIn, setUserLogIn] = useState(false);
    // const [checkStatus, setCheckStatus] = useState(false);

    // const isMobile = useMediaQuery("(min-width:450px)");
    // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    fetch(`${baseUrl}/profile`, {credentials: "include"}).then(v => setUserLogIn(v.status === 200));
    return (
        <>
            <NavBar userLogIn={userLogIn} />
            {/* <Universe/> */}
            <div className="app">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="*" element={<Error />} />
                    {
                        !userLogIn && <>
                            <Route path="/sign-in" element={<SignIn />} />
                            <Route path="/sign-up" element={<SignUp />} />
                        </>

                    }
                    <Route path="/login" element={<Login />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/password_reset/verify" element={<ResetPasswordForm />} />
                    <Route path="/verify" element={<EmailVerify />} />
                    <Route path="/user" element={<UserDashBoard />} />
                    <Route path="/addteam" element={<AddTeam />} />


                    <Route path="/sponsor" element={<Sponsors />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/ourteam" element={<OurTeam />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/enquiry" element={<Enquiry />} />
                    <Route path="/merchandise" element={<Merchandise />} />
                    {/* <Route path="/workshops" element={<WorkShops />} /> */}
                    <Route path="/arambh" element={<Arambh />} />
                    <Route path="/domains" element={<Domains />} />
                    <Route path="/student_profile" element={<StudentProfile />} />
                    <Route
                        path="/domains/:id/:name"
                        element={<Events />}
                    />
                    <Route
                        path="/events/:eventId"
                        element={<EventDisplayer events={eventsData} />}
                    />

                    <Route path="/faq" element={<FAQ />} />
                    {/* <Route path="/ca" element={<CA />} /> */}
                    {/* <Route path="/aarambh" element={<Arambh />} /> */}
                </Routes >
                <Footer userLogIn={userLogIn} />
            </div >
        </>
    );
}

export default App;
