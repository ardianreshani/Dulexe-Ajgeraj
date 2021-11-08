import { useState, lazy, Suspense } from "react";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";
import { Route, Switch, useLocation } from "react-router";
import NavBar from "./componets/NavBar";
import MobileMenu from "./componets/MobileMenu";
import Success from "./componets/Success";
import Error404 from "./componets/Error404";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./componets/ScrollToTop";
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const OurServices = lazy(() => import("./pages/OurServices"));

function App() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <NavBar toggle={toggle} />
      <MobileMenu toggle={toggle} isOpen={isOpen} />
      <AnimatePresence exitBeforeEnter>
        <ScrollToTop />
        <Switch location={location} key={location.pathname}>
          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>
          <Route path="*">
            <Error404 />
          </Route>
          <Route path="/success/">
            <Success />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
