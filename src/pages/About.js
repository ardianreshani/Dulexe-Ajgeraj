import React from "react";
import NavBar from "../componets/NavBar";
import MobileMenu from "../componets/MobileMenu";
import Footer from "../componets/Footer";
import styled from "styled-components";
import ImageOne from "../images/workerWithLogo.png";
import ImageTwo from "../images/CeaningWithLogo.png";
import ImageThree from "../images/gardenerWithLogo.png";
const About = ({ toggle, isOpen }) => {
  return (
    <>
      <NavBar toggle={toggle} />
      <MobileMenu toggle={toggle} isOpen={isOpen} />
      <AboutStyle>
        <div className="fistsection">
          <div className="imagecontainer">
            <img src={ImageOne} alt="Worker" width="620px" height="620px" />
          </div>
          <div className="textcontainer">
            <h2>DELUXE AJGERAJ</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
              similique fuga. Ut nemo assumenda rem quia cum obcaecati soluta
              delectus.
            </p>
          </div>
        </div>
        <div className="secondsection">
          <div className="imagecontainertwo">
            <img src={ImageTwo} alt="Worker" width="620px" height="620px" />
          </div>
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
            <img src={ImageThree} alt="Worker" width="620px" height="620px" />
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
  }
  .imagecontainer {
    width: 50%;
    background-color: #ffc2ac;
  }
  .imagecontainertwo {
    width: 50%;
    background-color: #c3def1;
  }
  .thirdsection {
  }
  .imagecontainerthree {
    width: 100%;
    position: relative;
    background-color: #9fe5c3;
    z-index: 0;
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
