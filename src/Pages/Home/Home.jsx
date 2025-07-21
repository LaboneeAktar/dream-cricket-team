import React from "react";
import Nav from "../../Components/Navbar/Nav";
import Banner from "../../Components/Banner/Banner";
import Players from "../../Components/Players/Players";

const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>
      <Players></Players>
    </div>
  );
};

export default Home;
