import styled from "styled-components";
import Map from "../images/placeholder.png";
import Phone from "../images/phone-call.png";
import Email from "../images/envelope.png";
const Contact = ({ toggle, isOpen }) => {
  return (
    <ContactStyle>
      <div className="header">
        <h1>Kontakt Uns</h1>
        <p>Schreibt uns eine Nachricht und wir melden uns bei euch</p>
      </div>

      <div className="wraper">
        {" "}
        <div className="from">
          <form
            name="contact"
            method="POST"
            netlify
            netlify-honeypot="bot-field"
          >
            <label>
              Vorname und Nachname: * <input type="text" name="name" required />
            </label>
            <label>
              E-mail Adresse: *
              <input type="email" name="email" required />
            </label>
            <label>
              Telefonnummer: *
              <input type="number" name="number" required />
            </label>
            <label>
              Nachricht: *
              <textarea name="message" cols="5" rows="1" required></textarea>
            </label>
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
            <p>info@deluxeajgeraj.ch</p>
          </div>
        </div>
      </div>
    </ContactStyle>
  );
};

export default Contact;

const ContactStyle = styled.div`
  padding-top: 80px;
  position: relative;
  .header {
    width: 100%;
    height: 50vh;
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
    margin-bottom: 20rem;

    h1 {
      font-weight: 400;
      font-size: 3rem;
      padding-bottom: 1rem;
    }
  }
  .wraper {
    position: absolute;
    top: 30vh;
    left: 20%;
    display: flex;
    border-radius: 10px;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 786px) {
      flex-direction: column;
      top: 40vh;
      left: 0;
      margin: 0 1rem;
    }
    .from {
      background-color: #fff;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      padding: 5rem;
      width: 38vw;
      height: 72vh;
      display: flex;
      align-items: center;
      justify-content: left;
      @media screen and (max-width: 786px) {
        padding: 1rem;
        width: 100%;
        border-top-right-radius: 10px;
        &input:focus {
          margin-top: 2rem;
        }
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
