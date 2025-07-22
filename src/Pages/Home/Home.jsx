import React from "react";
import Nav from "../../Components/Navbar/Nav";
import Banner from "../../Components/Banner/Banner";
import Players from "../../Components/Players/Players";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>
      <Players></Players>
      <Footer></Footer>
    </div>
  );
};

export default Home;
