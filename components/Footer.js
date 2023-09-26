import styled from "styled-components";
import { useGlobalContext } from "./context";

import {
  MdPhoneAndroid,
  MdEmail,
  MdFacebook,
  MdLocationOn,
} from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

const logoJarek = "/images/logoJarek.png";
const logo = "/images/logo2.png";

const Footer = () => {
  const { plLanguage } = useGlobalContext();

  return (
    <Wrapper>
      <div className="content">
        <div className="bankDetails">
          {plLanguage ? (
            <p className="cytat">
              Wszystko to czego szukasz, aby pobyć z dala od domu, a
              jednocześnie poczuć się jak w domu. Cisza, spokój i otoczenie
              wspaniałej przyrody pozwolą Tobie i Twoim bliskim odpocząć od
              codziennej rutyny.
            </p>
          ) : (
            <p className="cytat">
              Everything you are looking for to stay away from home and at the
              same time feel at home. Peace and quiet and surrounded by
              wonderful nature they will allow you and your loved ones to take a
              break from the daily routine.
            </p>
          )}
        </div>
        <img src={logo} alt="logo" className="logoFooter" />
        <div className="socialMediaWrapper">
          <a href="tel:+48793373246">
            <MdPhoneAndroid /> <span>+48 793 373 246</span>
          </a>
          <a href="mailto:rezerwacja@sosniegorne.pl">
            <MdEmail /> <span>rezerwacja@sosniegorne.pl</span>
          </a>
          <h4>
            <MdLocationOn />
            <span>
              Sośnie Górne 37 <br />
              33-330 Grybów
            </span>
          </h4>
          <div className="fbInWrapper">
            <a
              href="https://www.facebook.com/SosnieGorne/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdFacebook />
            </a>
            <a
              href="https://www.instagram.com/sosniegorne/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>

      <p className="allRights">
        <div className="line"></div>
        &copy; {new Date().getFullYear()} Firma Usługowa Jerzy Góra.{" "}
        {plLanguage ? "Wszelkie prawa zastrzeżone." : "All rights reserved"}
      </p>
      <span className="logoJarek">
        <p>{plLanguage ? "projekt i wykonanie" : "made by"}</p>
        <a href="https://www.jarekjanas.com">
          <img src={logoJarek} alt="logo Jarosław Janas" />
        </a>{" "}
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 82vw;
  margin-left: 18vw;
  padding: 5vh 7vw;
  background: var(--footerBgColor);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: white;
  @media screen and (max-width: 800px) {
    padding: 5vh 3vw 12vh;
    width: 100vw;
    margin-left: 0vw;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
    .logoFooter {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 15vh;
      filter: saturate(0);
      @media screen and (max-width: 800px) {
        position: static;
        transform: translate(0);
        align-self: center;
        margin: 5vh auto 2vh;
        order: 1;
        height: 18vh;
      }
    }
  }
  .allRights {
    margin-top: 3vh;
    font-family: var(--navFont);
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    .line {
      width: 70%;
      background: var(--thirdColor);
      height: 2px;
      margin: 0 auto 2vh;
    }
    @media screen and (max-width: 800px) {
      width: 90%;
      .line {
        margin: 0 auto 4vh;
      }
    }
  }

  .socialMediaWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    margin-top: 3vh;
    margin-bottom: -3vh;
    a,
    h4 {
      font-size: 1rem;
      margin-bottom: 2vh;
      font-weight: 500;
      text-decoration: none;
      color: white;
      display: flex;
      align-items: center;
      transition: 0.5s;
      font-family: var(--headerFont);
      letter-spacing: 2px;
      align-self: flex-start;
      @media screen and (max-width: 800px) {
        margin-left: 3vw;
        margin-bottom: 4vh;
      }
      :hover {
        transform: scale(1.1);
      }
      svg {
        flex-shrink: 0;
        color: var(--thirdColor);
        margin-right: 15px;
        font-size: 1.8rem;
      }
    }
    @media screen and (max-width: 800px) {
      width: 95%;
      margin: 5vh auto;
      order: 2;
    }
  }
  h3 {
    margin-bottom: 3vh;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-family: var(--navFont);
    font-weight: 600;
    letter-spacing: 2px;
    text-align: center;
  }

  .fbInWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2vh auto 0;
    width: 35%;
    a {
      svg {
        font-size: 2rem;
      }
    }
    @media screen and (max-width: 800px) {
      margin: 3vh auto 0;
      width: 50%;
      a {
        svg {
          font-size: 2.5rem;
        }
      }
    }
  }

  .bankDetails {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    align-self: center;
    @media screen and (max-width: 800px) {
      width: 95%;
      margin: 0vh auto 5vh;
      order: 3;
    }
    .cytat {
      font-style: italic;
      line-height: 1.7;
      font-size: 0.95rem;
      align-self: center;
      text-align: center;
      letter-spacing: 1px;
      @media screen and (max-width: 800px) {
        font-size: 1rem;
      }
    }
  }

  .logoJarek {
    position: absolute;
    bottom: 4%;
    left: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    a {
      width: 25px;
      height: 25px;
      margin-left: 10px;
      img {
        width: 100%;
        height: 100%;
        transition: 0.3s;
        opacity: 0.8;
        :hover {
          filter: invert(100%);
        }
      }
    }
    p {
      font-size: 12px;
      letter-spacing: 1px;
    }
    @media screen and (max-width: 800px) {
      bottom: 2%;
      left: 3%;
    }
  }
`;

export default Footer;
