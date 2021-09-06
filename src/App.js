import { useState } from "react";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import { Route, Switch } from "react-router";
import MessengerCustomerChat from "react-messenger-customer-chat";
import NavBar from "./componets/NavBar";
import MobileMenu from "./componets/MobileMenu";
import Success from "./componets/Success";
import Error404 from "./componets/Error404";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <NavBar toggle={toggle} />
      <MobileMenu toggle={toggle} isOpen={isOpen} />

      <Switch>
        <Route exact path="/">
          <Home toggle={toggle} isOpen={isOpen} slides={SliderData} />{" "}
        </Route>
        <Route path="/about">
          {" "}
          <About toggle={toggle} isOpen={isOpen} />
        </Route>
        <Route path="/services">
          {" "}
          <OurServices toggle={toggle} isOpen={isOpen} />{" "}
        </Route>
        <Route path="/contact">
          <Contact toggle={toggle} isOpen={isOpen} />{" "}
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
        <Route path="/success/">
          <Success />
        </Route>
      </Switch>
      <MessengerCustomerChat pageId="107207164985989" appId="315353580366863" />
    </>
  );
}

export default App;
