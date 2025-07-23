import Head from "next/head";
import styled from "styled-components";
import MyForm from "../components/MyForm";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useGlobalContext } from "../components/context";
import {
  MdPhoneAndroid,
  MdFacebook,
  MdLocationOn,
  MdEmail,
  MdHomeWork,
} from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { BsPiggyBankFill } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";

const KontaktPage = () => {
  const { plLanguage } = useGlobalContext();
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
  return (
    <>
      <Head>
        <title>Dane kontaktowe | Sośnie Górne Resort & SPA</title>
        <meta
          name="description"
          content="Masz pytania? Skontaktuj się z nami – chętnie odpowiemy. Zadzwoń, skorzystaj z formularza kontaktowego lub napisz wiadomość bezpośrednią.
"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
        <meta
          property="og:image"
          content="https://sosniegorne.pl/logo192.png"
        />
      </Head>
      <Wrapper>
        <div className="title">
          <div className="titleLine4"></div>
          <h2>{plLanguage ? "Kontakt" : "Contact"}</h2>
          <div className="titleLine4"></div>
        </div>
        <div className="contactHeader">
          <div data-aos="flip-right" data-aos-delay="300" className="oneHalf">
            <a href="tel:+48793373246">
              <div className="text">
                <MdPhoneAndroid />
                <p>{plLanguage ? "Numer Telefonu" : "Phone Number"}</p>
              </div>
              <h3>+48 793 373 246</h3>
            </a>
            <a href="mailto:rezerwacja@sosniegorne.pl">
              <div className="text">
                <MdEmail />
                <p>{plLanguage ? "Adres Email" : "E-mail Adress"}</p>
              </div>
              <h3>rezerwacja@sosniegorne.pl</h3>
            </a>
          </div>
          <IoMdContacts className="headerImg" />
          <div data-aos="flip-left" data-aos-delay="300" className="oneHalf">
            <a
              href="https://goo.gl/maps/x3d8HRsPK2MKyu6d8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text">
                <MdLocationOn />
                <p>{plLanguage ? "Lokalizacja" : "Location"}</p>
              </div>
              <h3>Sośnie Górne 37, 33-330 Grybów</h3>
            </a>
            <section className="socialMSection">
              <div className="socialMContainer">
                <a
                  href="https://www.facebook.com/SosnieGorne/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdFacebook />
                  <h3 className="h3Fb">Facebook</h3>
                </a>
              </div>
              <div className="text">
                <p>Social Media</p>
              </div>
              <div className="socialMContainer">
                <a
                  href="https://www.instagram.com/sosniegorne/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                  <h3 className="h3In">Instagram</h3>
                </a>
              </div>
            </section>
          </div>
          <div
            data-aos="flip-up"
            data-aos-delay="300"
            className="oneHalf oneHalfBottom"
          >
            <section>
              <div className="text">
                <MdHomeWork />
                <p>{plLanguage ? "Dane Firmy" : "Company data"}</p>
              </div>
              <h3>
                Firma Usługowa Jerzy Góra
                <br />
                {plLanguage ? "NIP" : "TAX ID"}: 7381732843
              </h3>
            </section>
            <section>
              <div className="text">
                <BsPiggyBankFill />
                <p>{plLanguage ? "Numer Konta" : "Account number"}</p>
              </div>
              <h3>
                Alior Bank <br /> 26 2490 0005 0000 4500 6495 3244
              </h3>
            </section>
          </div>
        </div>
        <div className="contactContainer">
          <section className="contactForm">
            <h3>{plLanguage ? "Formularz kontaktowy" : "Contact form"}</h3>
            <MyForm />
          </section>
        </div>
        <iframe
          data-aos="fade-left"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.8362712281128!2d20.971555799999997!3d49.6196913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dc377faafd0ab%3A0x953126b01b313d69!2zU2_Fm25pZSBHw7NybmUgUmVzb3J0ICYgU3Bh!5e0!3m2!1spl!2spl!4v1732366466658!5m2!1spl!2spl"
          className="map"
          title="mapa"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 82vw;
  min-height: 100vh;
  margin-left: 18vw;
  padding: 10vh 0vw 0;
  position: relative;
  @media screen and (max-width: 800px) {
    width: 100vw;
    min-height: auto;
    margin-left: 0;
    padding: 5vh 0vw 0;
  }
  .title {
    padding: 0 5vw;
    margin: 10vh auto 5vh;
    justify-content: space-between;
    @media screen and (max-width: 800px) {
      margin: 5vh auto 5vh;
      padding: 0;
    }
    h2 {
      border: 2px solid var(--secondaryColor);
      width: 20vw;
      text-align: center;
      padding: 2vh;
      background: var(--secondaryColor);
      color: #fff;
    }
    @media screen and (max-width: 800px) {
      h2 {
        width: 50vw;
        font-size: 1.5rem;
        padding: 10px 10px;
      }
    }
    .titleLine4 {
      background: var(--secondaryColor);
      height: 2px;
      width: 0;
      animation: growLine4 3s ease 1 forwards;
      @keyframes growLine4 {
        100% {
          width: 26vw;
        }
      }
      @media screen and (max-width: 800px) {
        @keyframes growLine4 {
          100% {
            width: 25vw;
          }
        }
      }
    }
  }
  .contactHeader {
    padding: 0 5vw;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
    .oneHalf {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 19vw;
      @media screen and (max-width: 800px) {
        width: 100%;
        order: 2;
      }
      section,
      a {
        width: 19vw;
        height: 17vh;
        overflow: hidden;
        padding: 3vh 1vw;
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 2vh auto;
        text-decoration: none;
        color: var(--primaryColor);
        transition: 0.5s;
        border: 2px solid #fff;
        position: relative;
        @media screen and (max-width: 800px) {
          width: 100%;
          height: 20vh;
        }
        svg {
          font-size: 2.5rem;
          color: var(--thirdColor);
          flex-shrink: 0;
          transition: 0.5s;
          position: absolute;
          top: 15%;
          left: 7%;
        }
        .text {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin: 1vh auto 4vh;
          p {
            color: #888;
            font-weight: 500;
            font-size: 1.2rem;
            text-align: center;
          }
        }
        h3 {
          font-weight: 600;
          font-size: 1rem;
          text-align: center;
          line-height: 1.3;
          @media screen and (max-width: 800px) {
            font-size: 1.1rem;
          }
        }
        :hover {
          border: 2px solid var(--secondaryColor);
        }
        :hover svg {
          color: var(--secondaryColor);
        }
      }
      .socialMSection {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: relative;
        @media screen and (max-width: 800px) {
          padding: 3vh 5vw;
        }
        :hover svg {
          color: var(--thirdColor);
        }
        a {
          width: auto;
          height: auto;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0vh auto 0;
          text-decoration: none;
          transition: 0.5s;
          border: none;
          :hover {
            color: var(--secondaryColor2);
          }
          :hover svg {
            color: var(--secondaryColor2);
          }
        }
        .text {
          width: auto;
          margin: 0vh auto 2vh;
        }

        svg {
          font-size: 2.5rem;
          color: var(--thirdColor);
          flex-shrink: 0;
          transition: 0.5s;
          position: static;
          margin-bottom: 2vh;
          :hover {
            color: var(--secondaryColor);
          }
        }
      }
    }
    .oneHalfBottom {
      flex-direction: row;
      width: 45vw;
      @media screen and (max-width: 800px) {
        flex-direction: column;
        width: 100%;
        order: 2;
      }
    }
  }

  .headerImg {
    width: 30vw;
    font-size: 12rem;
    color: var(--thirdColor);
    @media screen and (max-width: 800px) {
      order: 1;
      font-size: 10rem;
    }
  }

  .contactContainer {
    padding: 0 5vw;
    position: relative;
    width: 85%;
    margin: 10vh auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    section {
      width: 100%;
    }

    .contactForm {
      h3 {
        font-family: var(--titleFont);
        font-size: 2rem;
        text-transform: uppercase;
        text-align: center;
        color: var(--secondaryColor2);
        letter-spacing: 1px;
        margin-bottom: 5vh;
        @media screen and (max-width: 800px) {
          font-size: 1.8rem;
          width: 90%;
          margin: 0 auto 5vh;
        }
      }
    }
    @media screen and (max-width: 800px) {
      flex-direction: column;
      margin: 10vh auto 0vh;
      width: 100vw;
      section {
        width: 100%;
      }
    }
  }

  .map {
    width: 100%;
    height: 50vh;
    margin-top: 5vh;
    margin-bottom: -5px;
    filter: saturate(0.2);
    transition: 0.5s;
    border: none;
    border-top: 2px solid var(--secondaryColor);
    :hover {
      filter: saturate(0.9);
    }
    @media screen and (max-width: 800px) {
      width: 100%;
      margin-top: 10vh;
      border-radius: 0px;
    }
  }
`;

export default KontaktPage;
