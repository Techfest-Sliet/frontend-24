import React from "react";
import LandingPage from "./screens/landingPage/landingPage";
import { Routes, Route } from "react-router-dom";
import Domains from "./screens/Domains/Domains";
import Universe from "./components/Stars/globe/universe/universe";
import Workshops from "./screens/Workshops/Workshops";
import UserDashboard from "./screens/UserDashboard/UserDashboard";
import { useLoader } from "./components/Loader/hook";
import Loader from "./components/Loader/loader";
import UpdateUser from "./components/User/UpdateUser/UpdateUser";
import Error from "./components/Error/Error";


function App() {
  
  const {loading} = useLoader();

  return (
    <>
   <Loader when={loading}/>
    {/* <Universe/> */}
      <div className="app">
        <Routes>
          
          <Route path="/" element={<LandingPage />} />
          <Route path="/error" element={<Error />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/updateuser" element={<UpdateUser />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
