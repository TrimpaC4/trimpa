import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, addData } from "./store/test";
import type { RootState, AppDispatch } from "./store/index";
import PassengerInfo from "./Pages/PassengerInfo";
import LandingPage from "./Pages/LandingPage";
import ProfileUser from "./Pages/ProfileUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/my-profile" element={<ProfileUser />}></Route>
        <Route path="/PassengerInfo" element={<PassengerInfo />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>


        

        
        
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;