import React, { useState } from "react";
import Nav from "../../Components/Navbar/Nav";
import Banner from "../../Components/Banner/Banner";
import Players from "../../Components/Players/Players";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const [claimCredit, setClaimCredit] = useState(0);

  const handleClaimCredit = () => {
    if (claimCredit + 25000000 <= 100000000) {
      const newCredit = claimCredit + 25000000;
      setClaimCredit(newCredit);
    } else {
      alert("Limit reached. Cannot add more.");
      return;
    }
  };

  return (
    <div>
      <Nav claimCredit={claimCredit}></Nav>
      <Banner handleClaimCredit={handleClaimCredit}></Banner>
      <Players></Players>
      <Footer></Footer>
    </div>
  );
};

export default Home;
