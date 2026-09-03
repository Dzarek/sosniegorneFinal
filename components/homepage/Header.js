import styled from "styled-components";
import { AiFillInstagram } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Link from "next/link";
import { useGlobalContext } from "../context";

const headerBg1 = "/images/header/01-1.jpg";
const headerBg3 = "/images/header/04-2.jpg";
const headerBg4 = "/images/header/04-3.jpg";
const headerBg5 = "/images/header/w-01.jpg";
const headerBg6 = "/images/header/w-03.jpg";
const headerBg7 = "/images/header/w-04.jpg";
const headerBg8 = "/images/header/01-1mobile.jpg";
const headerBg9 = "/images/header/m-2.jpg";

const logo = "/images/logo.png";

const Header = () => {
  const { plLanguage } = useGlobalContext();

  return (
    <>
      <Wrapper>
        <section>
          <div className="headerContact">
            <a href="tel:+48793373246">
              <span>+48 793 373 246</span>
            </a>

            <a href="mailto:rezerwacja@sosniegorne.pl">
              <span>rezerwacja@sosniegorne.pl</span>
            </a>

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

          <div className="mainImgContainer">
            <div className="mainImg mainImgContrast"></div>

            {/* Tekst na zdjęciu */}
            <div className="headerText">
              <h1>5 całorocznych domków z prywatnym jacuzzi</h1>
              <p>ogrodzone działki · widok na góry · pobyt z psem</p>
              <span>OD 650 ZŁ / NOC</span>
            </div>
          </div>

          <div className="logoContainer">
            <img src={logo} alt="Sosnie Górne" />
          </div>
        </section>
      </Wrapper>

      <Wrapper2>
        <p>
          {plLanguage
            ? "Wybierz termin i dokonaj rezerwacji!"
            : "Choose date and make a reservation!"}
        </p>

        <Link href="/rezerwacja">
          <a className="bookingLink">
            {plLanguage ? "Rezerwacja" : "Reservation"}
          </a>
        </Link>
      </Wrapper2>

      <Wrapper3>
        <section>
          <img src="/images/reservation/monety.png" alt="monety-ikona" />
          <p>Najlepsza cena</p>
        </section>

        <section>
          <img src="/images/reservation/szybko.png" alt="szybko-ikona" />
          <p>Szybko</p>
        </section>

        <section>
          <img
            src="/images/reservation/bezpiecznie.png"
            alt="bezpiecznie-ikona"
          />
          <p>Bezpiecznie</p>
        </section>
      </Wrapper3>
    </>
  );
};

const Wrapper = styled.div`
  @media screen and (max-width: 800px) {
    height: 100dvh;
  }

  section {
    height: 90vh;
    width: 100vw;
    margin-top: 10vh;
    z-index: 1;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: space-between;
    overflow: hidden;
    background: #fff;

    @media screen and (max-width: 800px) {
      height: 75vh;
      height: 75dvh;
      margin-top: 0vh;
      display: block;
      position: relative;
    }

    .headerContact {
      width: 70%;
      margin: 0 auto;
      height: 10%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        font-size: 1rem;
        color: var(--secondaryColor);
        font-weight: 700;
        font-family: var(--navFont);
        text-decoration: none;
        transition: 0.4s;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          font-size: 2rem;
        }

        :hover {
          color: var(--secondaryColor0);
        }
      }

      @media screen and (max-width: 800px) {
        display: none;
      }
    }

    .mainImgContainer {
      width: 100%;
      height: 90%;
      overflow: hidden;
      position: relative;

      .mainImg {
        width: 100%;
        height: 100%;
        background-size: 100%;
        background-image: url(${headerBg5});
        background-repeat: no-repeat;
        background-position: center 70%;
        animation: mainImgMove 28s linear infinite;
      }

      /* =========================
         TEKST NA ZDJĘCIU
         ========================= */

      .headerText {
        position: absolute;
        z-index: 5;
        right: 12%;
        bottom: 10%;
        /* width: 60%; */
        color: #fff;
        text-align: right;
        text-shadow: 0 2px 5px rgba(0, 0, 0, 0.9);
        /* font-family: var(--navFont); */

        h1 {
          margin: 0 0 14px;
          font-size: clamp(2rem, 3.5vw, 3.4rem);
          line-height: 1.05;
          font-weight: 400;
          letter-spacing: -0.02em;
        }

        p {
          margin: 0 0 18px;
          font-size: clamp(1rem, 1.4vw, 1.3rem);
          font-weight: 400;
          letter-spacing: 0.02em;
        }

        span {
          display: inline-block;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.6);
        }
      }

      @media screen and (max-width: 800px) {
        margin-top: 10vh;
        margin-top: 10dvh;

        height: 65vh;
        height: 65dvh;

        .mainImg {
          animation: none;
          background-size: cover;
          background-image: url(${headerBg1});
          background-position: center 50%;
          animation: mobileImgMove 35s linear infinite;
        }

        /* Tekst mobilny */
        .headerText {
          top: auto;
          right: 0%;
          bottom: 10%;
          left: 0%;
          transform: none;

          width: auto;
          padding: 22px 18px;

          text-align: center;

          /* background: rgba(20, 20, 20, 0.38);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px); */

          /* border: 1px solid rgba(255, 255, 255, 0.2); */
          border-radius: 2px;

          h1 {
            font-size: clamp(1.5rem, 7vw, 2rem);
            line-height: 1.12;
            margin-bottom: 12px;
          }

          p {
            font-size: clamp(0.9rem, 3.8vw, 1.1rem);
            line-height: 1.35;
            margin-bottom: 14px;
            display: none;
          }

          span {
            font-size: 0.9rem;
            letter-spacing: 0.1em;
          }
        }

        @keyframes mobileImgMove {
          0% {
            background-image: url(${headerBg6});
            transform: scale(1);
          }

          22% {
            background-image: url(${headerBg6});
            transform: scale(1.05);
          }

          24% {
            background-image: url(${headerBg6});
          }

          25% {
            background-image: url(${headerBg8});
            transform: scale(1.05);
          }

          47% {
            background-image: url(${headerBg8});
            transform: scale(1);
          }

          49% {
            background-image: url(${headerBg8});
          }

          50% {
            background-image: url(${headerBg9});
            transform: scale(1);
          }

          72% {
            background-image: url(${headerBg9});
            transform: scale(1.05);
          }

          74% {
            background-image: url(${headerBg9});
          }

          75% {
            background-image: url(${headerBg7});
            transform: scale(1.05);
          }

          97% {
            background-image: url(${headerBg7});
            transform: scale(1);
          }

          100% {
            background-image: url(${headerBg7});
          }
        }
      }
    }
    .mainImgContainer::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 1;
      pointer-events: none;

      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.6) 30%,
        rgba(0, 0, 0, 0.2) 60%
      );
      @media screen and (max-width: 800px) {
        background: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.8) 15%,
          rgba(0, 0, 0, 0.6) 40%,
          rgba(0, 0, 0, 0.1) 60%
        );
      }
    }
    .logoContainer {
      display: none;

      @media screen and (max-width: 800px) {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translate(-50%, 0%);
        width: 100vw;
        height: 10vh;
        background: rgba(255, 255, 255, 1);
        border-radius: 0 0 5px 5px;

        img {
          height: 100%;
        }
      }
    }

    @keyframes mainImgMove {
      0% {
        transform: scale(1);
        background-image: url(${headerBg5});
      }

      24% {
        transform: scale(1.1);
        background-image: url(${headerBg5});
      }

      25% {
        transform: scale(1.1);
        background-image: url(${headerBg1});
      }

      49% {
        transform: scale(1);
        background-image: url(${headerBg1});
      }

      50% {
        transform: scale(1);
        background-image: url(${headerBg4});
      }

      74% {
        transform: scale(1.1);
        background-image: url(${headerBg4});
      }

      75% {
        transform: scale(1.1);
        background-image: url(${headerBg3});
      }

      100% {
        transform: scale(1);
        background-image: url(${headerBg3});
      }
    }
  }
`;

const Wrapper2 = styled.div`
  width: 100vw;
  height: 25vh;
  height: 25dvh;
  position: absolute;
  top: 75vh;
  top: 75dvh;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  background-color: #fff;

  @media screen and (min-width: 801px) {
    display: none;
  }

  p {
    text-align: center;
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 5vh;
  }

  .bookingLink {
    min-width: 50%;
    font-weight: 500;
    font-size: 1.1rem;
    background: var(--thirdColor);
    padding: 10px 10px;
    color: #222;
    width: auto;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
  }
`;

const Wrapper3 = styled.div`
  @media screen and (min-width: 801px) {
    display: none;
  }

  width: 100vw;
  padding: 0vh 3vw 8vh;
  margin: 0vh auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33%;

    img {
      height: 40px;
      margin-bottom: 10px;
    }

    p {
      font-weight: 600;
      text-align: center;
      font-size: 0.9rem;
    }
  }
`;

export default Header;
