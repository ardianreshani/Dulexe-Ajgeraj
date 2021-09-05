import Footer from "../componets/Footer";
import styled from "styled-components";
import ImageOne from "../images/workerWithLogo.png";
import ImageTwo from "../images/CeaningWithLogo.png";
import ImageThree from "../images/gardenerWithLogo.png";
import CtaCall from "../componets/CtaCall";
const About = ({ toggle, isOpen }) => {
  return (
    <>
      <AboutStyle>
        <div className="fistsection">
          <div className="imagecontainer"></div>
          <div className="textcontainer">
            <h2>Unsere Mission</h2>
            <p>
              Wir sind erst zufrieden, wenn Sie zufrieden sind. Deshalb ist es
              uns wichtig, Ihnen bei Ihrem Bau- oder Renovierungsvorhaben mit
              Rat und Tat zur Seite stehen. An unserem Standort in Beren freuen
              sich qualifizierte Fachleute und ein hochmotiviertes Team darauf,
              Sie bei Ihrem Projekt zu unterstützen.
            </p>
          </div>
        </div>
        <div className="secondsection">
          <div className="imagecontainertwo"></div>
          <div className="textcontainer">
            <h2>DELUXE AJGERAJ</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
              similique fuga. Ut nemo assumenda rem quia cum obcaecati soluta
              delectus.
            </p>
          </div>
        </div>
        <div className="thirdsection">
          <div className="imagecontainerthree">
            <div className="textcontainer top">
              <h2>DELUXE AJGERAJ</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores, similique fuga. Ut nemo assumenda rem quia cum
                obcaecati soluta delectus.
              </p>
            </div>
          </div>
        </div>
      </AboutStyle>
      <CtaCall />
      <Footer />
    </>
  );
};
const AboutStyle = styled.div`
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
    }
  }
  .top {
    flex: 0;
    position: absolute;
    top: 30%;
    left: 50%;
    z-index: 1;
    color: #272727;
  }
`;

export default About;
