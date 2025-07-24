import { useState } from "react";
import Nav from "../../Components/Navbar/Nav";
import Banner from "../../Components/Banner/Banner";
import Players from "../../Components/Players/Players";
import Footer from "../../Components/Footer/Footer";
import { toast } from "react-toastify";

const Home = () => {
  const [creditValue, setCreditValue] = useState(0);

  const handleCreditValue = () => {
    if (creditValue + 2500000 <= 20000000) {
      const newCredit = creditValue + 2500000;
      setCreditValue(newCredit);
      if (newCredit === 17500000) {
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
      <Players
        creditValue={creditValue}
        setCreditValue={setCreditValue}
      ></Players>
      <Footer></Footer>
    </div>
  );
};

export default Home;
