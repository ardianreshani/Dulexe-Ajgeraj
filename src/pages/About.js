import Footer from "../componets/Footer";
import styled from "styled-components";
import ImageOne from "../images/workerWithLogo.png";
import ImageTwo from "../images/CeaningWithLogo.png";
import ImageThree from "../images/gardenerWithLogo.png";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animate";
const About = ({ toggle, isOpen }) => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutStyle>
        <div className="fistsection">
          <div className="imagecontainer"></div>
          <div className="textcontainer">
            <h2>Unsere Mission</h2>
            <p>
              Deluxe Ajgeraj ist ein Familienunternehmen mit über 10 Jahren
              Erfahrung. Wir sind erst zufrieden, wenn Sie zufrieden sind.
              Deshalb ist es uns wichtig, Ihnen bei Ihrem Bau- oder
              Renovierungsprojekt mit Rat und Tat zur Seite zu stehen. An
              unserem Standort in Beren freuen sich qualifizierte Fachkräfte und
              ein motiviertes Team darauf, Sie bei Ihrem Projekt zu
              unterstützen. Wir tun Reinigungen, Umbau, Renovationen und
              Betriebsunterhalt.
            </p>
          </div>
        </div>
        <div className="secondsection">
          <div className="imagecontainertwo"></div>
          <div className="textcontainer">
            <h2>Reinigungen</h2>
            <p>
              Wir kümmern uns um die Reinigung Ihres Zuhauses und lassen Ihnen
              Zeit, Ihr Zuhause zu genießen – anstatt sich Gedanken über die
              Reinigung zu machen.
              <br /> Wir bieten: Regelmäßiger Reinigungsservice,
              Fensterreinigungsservice, Umzugsreinigungsservice
            </p>
          </div>
        </div>
        <div className="thirdsection">
          <div className="imagecontainerthree">
            <div className="textcontainer top">
              <h2>Betriebsunterhaltung</h2>
              <p>
                Die regelmäßige Pflege Ihres Gartens kann mit zunehmendem Alter
                schwieriger werden. Wir können Sie mit vertrauenswürdigen,
                zuverlässigen Gärtnern verbinden, die Ihnen helfen können: Rasen
                mähen, Beschneiden, Schneiden und Unkraut jäten, Mulchen,
                Futter- und Wasserpflanzen
              </p>
            </div>
          </div>
        </div>
      </AboutStyle>
      <Footer />
    </motion.div>
  );
};
const AboutStyle = styled.div`
  line-height: 1.5rem;
  padding: 2rem 0;
  .fistsection,
  .secondsection,
  .thirdsection {
    display: flex;
    align-items: center;
    @media screen and (max-width: 786px) {
      flex-direction: column;
    }
  }
  .textcontainer {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    h2 {
      padding: 1rem 0;
    }
  }
  .secondsection {
    .imagecontainertwo {
      order: 1;
    }
    .textcontainer {
      order: 0;
    }
    @media screen and (max-width: 786px) {
      .imagecontainertwo {
        order: 0;
      }
      .textcontainer {
        order: 1;
      }
    }
  }
  .imagecontainer {
    width: 50%;
    height: 620px;
    background-color: #ffc2ac;
    background-image: url(${ImageOne});
    background-size: 620px;
    background-repeat: no-repeat;
    background-position: center;
    @media screen and (max-width: 786px) {
      width: 100%;
      height: 350px;
      background-size: 350px;
    }
  }
  .imagecontainertwo {
    width: 50%;
    height: 620px;
    background-color: #c3def1;
    background-image: url(${ImageTwo});
    background-size: 620px;
    background-repeat: no-repeat;
    background-position: center;
    @media screen and (max-width: 786px) {
      width: 100%;
      height: 350px;
      background-size: 350px;
    }
  }
  .thirdsection {
  }
  .imagecontainerthree {
    width: 100%;
    height: 620px;
    position: relative;
    background-color: #9fe5c3;
    background-image: url(${ImageThree});
    background-size: 610px;
    background-repeat: no-repeat;
    background-position: left;
    z-index: 0;

    @media screen and (max-width: 786px) {
      width: 100%;
      height: 350px;
      background-size: 350px;
      margin-bottom: 12rem;
    }
  }
  .top {
    flex: 0;
    position: absolute;
    top: 30%;
    left: 50%;
    z-index: 1;
    color: #272727;
    @media screen and (max-width: 500px) {
      width: 100%;
      top: 100%;
      left: 0;
    }
  }
`;

export default About;
