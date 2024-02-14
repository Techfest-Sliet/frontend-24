import React from "react";
import LandingPage from "./screens/landingPage/landingPage";
import { Routes, Route } from "react-router-dom";

import WorkShops from "./screens/Workshops/Workshops";
// import UserDashboard from "./screens/UserDashboard/UserDashboard";
import { useLoader } from "./components/Loader/hook";
import Loader from "./components/Loader/loader";
import Error from "./components/Error/Error";
import SignIn from "./components/Auth/SignIn/SignIn";
import SignUp from "./components/Auth/SignUp/SignUp";
import Login from "./components/Auth/Login/Login";

import ResetPassword from "./components/Auth/ResetPassword/ResetPassword";

import EmailVerify from "./components/Auth/EmailVerify/EmailVerify";
import authContext from "./components/Auth/Auth";

import FAQ from "./components/FAQ/Faq";

import AboutUs from "./screens/AboutUs/AboutUs";
import UpdateUser from "./components/User/UpdateUser/UpdateUser";
import RegisterEvent from "./components/User/RegisterEvent/RegisterEvent";
import UserDashBoard from "./screens/UserDashboard/UserDashboard";
import NavBar from "./components/navbar/Navbar";

import Footer from "./components/Footer/Footer";

import Domains from "./screens/Domains/Domains";
import EventDisplayer from "./components/eventDisplayer/EventDisplayer";
import Sponsors from "./components/sponsor/Sponsor";
import Arambh from "./components/Aarambh/Arambh";
import Events from "./components/eventDisplayer/Events";

import domainData from "./utils/domains";
import eventsData from "./utils/events";

function App() {
  const { loading } = useLoader();

  return (
    <>
      <NavBar />

      <Loader when={loading} />
      {/* <Universe/> */}
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Error />} />
          {!authContext.isUserLoggedIn && (
            <Route path="/sign-in" element={<SignIn />} />
          )}
          {!authContext.isUserLoggedIn && (
            <Route path="/sign-up" element={<SignUp />} />
          )}
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify" element={<EmailVerify />} />
          {/* <Route path="/domain" element={<Domains/>} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventsDetailed />} />
        <Route path="/event" element={<Event/>}/> */}
          {!authContext.isUserLoggedIn && (
            <Route path="/user-dashboard" element={<UserDashBoard />} />
          )}
          {!authContext.isUserLoggedIn && (
            <Route path="/register" element={<RegisterEvent />} />
          )}
          {/* <Route path="/add-team" element={<AddTeam />} />
        <Route path="/team" element={<Team />} /> */}
          {!authContext.isUserLoggedIn && (
            <Route path="/update-user" element={<UpdateUser />} />
          )}
          <Route path="/sponsor" element={<Sponsors />} />
          {/* <Route path="/about-us" element={<AboutUs />} /> */}
          <Route path="/workshops" element={<WorkShops />} />
          <Route path="/domains" element={<Domains domains={domainData} />}/>
          <Route path="/domains/:domainId" element={<Events domains={domainData} />}/>
          <Route path="/domains/:domainId/events/:eventId" element={<EventDisplayer events={eventsData} />}/>
          <Route path="/faq" element={<FAQ />} />
          <Route path="/aarambh" element={<Arambh />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
