import { useEffect, useState } from "react";
import Navbar from "./views/navbar";
import { SelectedPage } from "./shared/SelectedPage";
import Home from "./views/homePage";
import Benefits from "./views/benefits";
import OurClasses from "./views/ourClasses";
import ContactUs from "./views/contactUs";
import Footer from "./views/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="app bg-gray-20">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        ></Navbar>
        <Home setSelectedPage={setSelectedPage}></Home>
        <Benefits setSelectedPage={setSelectedPage}></Benefits>
        <OurClasses setSelectedPage={setSelectedPage}></OurClasses>
        <ContactUs setSelectedPage={setSelectedPage}></ContactUs>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
