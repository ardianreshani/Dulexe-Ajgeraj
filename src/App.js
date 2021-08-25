import { useState } from "react";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import { Route, Switch } from "react-router";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
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
      </Switch>
    </>
  );
}

export default App;
