import React from "react";
import Hero from "./Lhero";
import Feature from "../Landingpage/Feature";
import OurDoctors from "./Ourdoctors";
import Review from "../Landingpage/Review";
import NavBar from "../Landingpage/Lnavbar";
const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <OurDoctors />
      <Feature />
      <Review />
    </>
  );
};

export default LandingPage;
