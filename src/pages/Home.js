import Footer from "../componets/Footer";
import Gallery from "../componets/Gallery";
import Hero from "../componets/Hero";
import WhatWeAreOffering from "../componets/WhatWeAreOffering";
import Whyus from "../componets/Whyus";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animate";

const Home = ({ toggle, isOpen, slides }) => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Hero slides={slides} />
      <WhatWeAreOffering />
      <Whyus />
      <Gallery />
      <Footer />
    </motion.div>
  );
};

export default Home;
