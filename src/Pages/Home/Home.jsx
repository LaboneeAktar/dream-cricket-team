import { useState } from "react";
import Nav from "../../Components/Navbar/Nav";
import Banner from "../../Components/Banner/Banner";
import Players from "../../Components/Players/Players";
import Footer from "../../Components/Footer/Footer";
import { toast } from "react-toastify";

const Home = () => {
  const [creditValue, setCreditValue] = useState(0);

  const handleCreditValue = () => {
    if (creditValue + 25000000 <= 100000000) {
      const newCredit = creditValue + 25000000;
      setCreditValue(newCredit);
      if (newCredit === 75000000) {
        toast.warning("Only One Chance Left to Claim");
      }
    } else {
      toast.error("You've reached the maximum amount!");
      return;
    }
  };

  return (
    <div>
      <Nav creditValue={creditValue}></Nav>
      <Banner handleCreditValue={handleCreditValue}></Banner>
      <Players></Players>
      <Footer></Footer>
    </div>
  );
};

export default Home;
