import styled from "styled-components";
import Map from "../images/placeholder.png";
import Phone from "../images/phone-call.png";
import Email from "../images/envelope.png";
import Footer from "../componets/Footer";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animate";
import emailjs from "emailjs-com";

const Mailer = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_k9czyir",
      "template_uewcxur",
      e.target,
      "user_lLqFzc9qYfVqRfGD9VO1l"
    )
    .then((res) => {
      console.log(res);
    });
  e.target.reset();
};

const Contact = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <div className="header">
        <h1>Kontakt Uns</h1>
        <p>Schreibt uns eine Nachricht und wir melden uns bei euch</p>
      </div>

      <div className="wraper">
        {" "}
        <div className="from">
          <form onSubmit={Mailer}>
            <label for="name">
              Vorname und Nachname: * <input type="text" name="name" />
            </label>

            <label for="email">
              E-mail Adresse: *
              <input type="email" name="email" />
            </label>
            <label for="number">
              Telefonnummer: *
              <input type="number" name="number" />
            </label>
            <label for="message">
              Nachricht: *<textarea name="message" cols="5" rows="1"></textarea>
            </label>
            <input type="hidden" name="form-name" value="contact" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="info">
          <div className="contact-items">
            <img src={Map} alt="Map logo" width="34px" height="34px" />
            <p>
              Deluxe Ajgeraj
              <br /> Ländlistrasse 10, <br />
              3047 Bremgarten bei Bern
            </p>
          </div>
          <div className="contact-items">
            <img src={Phone} alt="Phone logo" width="34px" height="34px" />
            <p>0798020201</p>
          </div>
          <div className="contact-items">
            <img src={Email} alt="Email logo" width="34px" height="34px" />
            <p>info@deluxeinfo.ch</p>
          </div>
        </div>
      </div>
      <Footer />
    </ContactStyle>
  );
};

export default Contact;

const ContactStyle = styled(motion.div)`
  position: relative;
  .header {
    width: 100%;
    height: 60vh;
    background: hsla(145, 84%, 73%, 1);
    background: linear-gradient(
      90deg,
      hsla(145, 84%, 73%, 1) 0%,
      hsla(150, 61%, 48%, 1) 100%
    );
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding-top: 4.5rem;
    color: #fff;
    margin-bottom: 23rem;
    @media screen and (max-width: 786px) {
      height: 40vh;
      margin-bottom: 45rem;
    }

    h1 {
      font-weight: 400;
      font-size: 3rem;
      padding: 1rem;
    }
  }
  .wraper {
    position: absolute;
    top: 28vh;
    left: 20%;
    display: flex;
    height: 65vh;
    border-radius: 10px;

    @media screen and (max-width: 786px) {
      flex-direction: column;
      top: 30vh;
      height: 40vh;
      left: 0;
      margin: 0 1rem;
    }
    @media screen and (min-width: 787px) and (max-width: 1300px) {
      top: 20vh;
      left: 10%;
    }

    .from {
      background-color: #fff;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      padding: 5rem;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: left;
      box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2);
      @media screen and (max-width: 786px) {
        border-top-right-radius: 10px;
        border-bottom-left-radius: 0px;
      }
      @media screen and (max-width: 1024px) {
        padding: 1rem;
        width: 100%;
        &input:focus {
          margin-top: 2rem;
        }
      }
      @media screen and (min-width: 787px) and (max-width: 1300px) {
        top: 20vh;
        left: 10%;
      }
    }
    .info {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      padding: 3rem;
      background-color: #c3def1;
      display: flex;
      flex-direction: column;
      text-align: left;
      align-items: left;
      justify-content: center;
      box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2);
      @media screen and (max-width: 786px) {
        border-top-right-radius: 0px;
        border-bottom-left-radius: 10px;
      }
      .contact-items {
        display: flex;
        align-items: center;
        padding: 1rem;

        img {
          margin-right: 1rem;
        }
      }
    }
  }

  label {
    font-size: 0.9rem;

    padding-bottom: 0.8rem;
  }
  input {
    width: 100%;
    border: 0;
    border-bottom: 2px solid #999;
    margin: 16px 0;
    outline: none;
    font-size: 1.2rem;

    &:focus {
      border-bottom: 2px solid green;
    }
    &::placeholder-shown {
      display: none;
    }
  }
  textarea {
    width: 100%;
    border: 0;
    border-bottom: 2px solid #999;
    padding: 0;
    outline: none;
    resize: none;
    font-size: 1.2rem;
    margin: 16px 0;
    &:focus {
      border-bottom: 2px solid green;
    }
  }
  button {
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    padding: 16px 60px;
    margin-top: 1rem;
    background: hsla(145, 84%, 73%, 1);
    background: linear-gradient(
      90deg,
      hsla(145, 84%, 73%, 1) 0%,
      hsla(150, 61%, 48%, 1) 100%
    );
    color: #fff;
    font-weight: 500;
    font-size: 1.1rem;
    border-radius: 10px;
    margin: 1rem 0;
  }
`;
