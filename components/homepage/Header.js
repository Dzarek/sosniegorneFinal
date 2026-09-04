import styled from "styled-components";
import { AiFillInstagram } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { useGlobalContext } from "../context";

const desktopImages = [
  "/images/header/w-01.jpg",
  "/images/header/01-1.jpg",
  "/images/header/04-3.jpg",
  "/images/header/04-2.jpg",
];

const mobileImages = [
  "/images/header/w-03.jpg",
  "/images/header/01-1mobile.jpg",
  "/images/header/m-2.jpg",
  "/images/header/w-04.jpg",
];

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
            {/* =========================
                DESKTOP
                ========================= */}
            <div className="hero desktopHero">
              {desktopImages.map((image, index) => (
                <div key={image} className={`heroImage heroImage-${index + 1}`}>
                  <Image
                    src={image}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    priority={index === 0}
                    loading={index === 0 ? undefined : "lazy"}
                    unoptimized
                  />
                </div>
              ))}
            </div>

            {/* =========================
                MOBILE
                ========================= */}
            <div className="hero mobileHero">
              {mobileImages.map((image, index) => (
                <div key={image} className={`heroImage heroImage-${index + 1}`}>
                  <Image
                    src={image}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    priority={index === 0}
                    loading={index === 0 ? undefined : "lazy"}
                    unoptimized
                  />
                </div>
              ))}
            </div>

            {/* Gradient */}
            <div className="heroGradient" />

            {/* Tekst */}
            <div className="headerText">
              <h1>5 całorocznych domków z prywatnym jacuzzi</h1>

              <p>ogrodzone działki · widok na góry · pobyt z psem</p>

              <span>OD 650 ZŁ / NOC</span>
            </div>
          </div>

          {/* Logo mobilne */}
          <div className="logoContainer">
            <img src={logo} alt="Sosnie Górne" />
          </div>
        </section>
      </Wrapper>

      {/* =========================
          REZERWACJA - MOBILE
          ========================= */}
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

      {/* =========================
          IKONY - MOBILE
          ========================= */}
      <Wrapper3>
        <section>
          <img
            src="/images/reservation/monety.png"
            alt="monety-ikona"
            loading="lazy"
          />
          <p>Najlepsza cena</p>
        </section>

        <section>
          <img
            src="/images/reservation/szybko.png"
            alt="szybko-ikona"
            loading="lazy"
          />
          <p>Szybko</p>
        </section>

        <section>
          <img
            src="/images/reservation/bezpiecznie.png"
            alt="bezpiecznie-ikona"
            loading="lazy"
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

      margin-top: 0;

      display: block;
      position: relative;
    }

    /* =========================
       KONTAKT
       ========================= */

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

        &:hover {
          color: var(--secondaryColor0);
        }
      }

      @media screen and (max-width: 800px) {
        display: none;
      }
    }

    /* =========================
       HERO
       ========================= */

    .mainImgContainer {
      width: 100%;
      height: 90%;

      overflow: hidden;
      position: relative;

      /* =========================
         HERO IMAGES
         ========================= */

      .hero {
        position: absolute;
        inset: 0;

        overflow: hidden;
      }

      .heroImage {
        position: absolute;
        inset: 0;

        width: 100%;
        height: 100%;

        opacity: 0;

        /*
         * Powiększenie zdjęcia.
         * Dzięki transform zamiast background-size zachowujemy
         * ten sam efekt co wcześniej.
         */
        transform: scale(1);

        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-fill-mode: both;

        span {
          display: block !important;
          width: 100% !important;
          height: 100% !important;
        }

        img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
        }
      }

      /* =========================
         DESKTOP ANIMATION
         ========================= */

      .desktopHero {
        display: block;

        .heroImage-1 {
          opacity: 1;
          animation: desktopImage1 28s linear infinite;
          img {
            object-position: center 70% !important;
          }
        }

        .heroImage-2 {
          animation: desktopImage2 28s linear infinite;
        }

        .heroImage-3 {
          animation: desktopImage3 28s linear infinite;
        }

        .heroImage-4 {
          animation: desktopImage4 28s linear infinite;
        }
      }

      @keyframes desktopImage1 {
        0% {
          opacity: 1;
          transform: scale(1);
        }

        24% {
          opacity: 1;
          transform: scale(1.1);
        }

        25% {
          opacity: 0;
          transform: scale(1.1);
        }

        100% {
          opacity: 0;
        }
      }

      @keyframes desktopImage2 {
        0% {
          opacity: 0;
        }

        24% {
          opacity: 0;
          transform: scale(1.1);
        }

        25% {
          opacity: 1;
          transform: scale(1.1);
        }

        49% {
          opacity: 1;
          transform: scale(1);
        }

        50% {
          opacity: 0;
          transform: scale(1);
        }

        100% {
          opacity: 0;
        }
      }

      @keyframes desktopImage3 {
        0%,
        49% {
          opacity: 0;
        }

        50% {
          opacity: 1;
          transform: scale(1);
        }

        74% {
          opacity: 1;
          transform: scale(1.1);
        }

        75% {
          opacity: 0;
          transform: scale(1.1);
        }

        100% {
          opacity: 0;
        }
      }

      @keyframes desktopImage4 {
        0%,
        74% {
          opacity: 0;
        }

        75% {
          opacity: 1;
          transform: scale(1.1);
        }

        100% {
          opacity: 1;
          transform: scale(1);
        }
      }

      /* =========================
         MOBILE
         ========================= */

      .mobileHero {
        display: none;
      }

      /* =========================
         GRADIENT
         ========================= */

      .heroGradient {
        position: absolute;
        inset: 0;

        z-index: 3;

        pointer-events: none;

        background: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(0, 0, 0, 0.6) 30%,
          rgba(0, 0, 0, 0.2) 60%
        );
      }

      /* =========================
         TEKST
         ========================= */

      .headerText {
        position: absolute;

        z-index: 5;

        right: 12%;
        bottom: 10%;

        color: #fff;

        text-align: right;

        text-shadow: 0 2px 5px rgba(0, 0, 0, 0.9);

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

      /* =========================
         MOBILE STYLES
         ========================= */

      @media screen and (max-width: 800px) {
        margin-top: 10vh;
        margin-top: 10dvh;

        height: 65vh;
        height: 65dvh;

        .desktopHero {
          display: none;
        }

        .mobileHero {
          display: block;

          .heroImage {
            animation-duration: 35s;
          }

          .heroImage-1 {
            opacity: 1;
            animation-name: mobileImage1;
          }

          .heroImage-2 {
            animation-name: mobileImage2;
          }

          .heroImage-3 {
            animation-name: mobileImage3;
          }

          .heroImage-4 {
            animation-name: mobileImage4;
          }
        }

        /* =========================
           MOBILE ANIMATION
           ========================= */

        @keyframes mobileImage1 {
          0% {
            opacity: 1;
            transform: scale(1);
          }

          22% {
            opacity: 1;
            transform: scale(1.05);
          }

          25% {
            opacity: 0;
            transform: scale(1.05);
          }

          100% {
            opacity: 0;
          }
        }

        @keyframes mobileImage2 {
          0%,
          24% {
            opacity: 0;
          }

          25% {
            opacity: 1;
            transform: scale(1.05);
          }

          47% {
            opacity: 1;
            transform: scale(1);
          }

          50% {
            opacity: 0;
          }

          100% {
            opacity: 0;
          }
        }

        @keyframes mobileImage3 {
          0%,
          49% {
            opacity: 0;
          }

          50% {
            opacity: 1;
            transform: scale(1);
          }

          72% {
            opacity: 1;
            transform: scale(1.05);
          }

          75% {
            opacity: 0;
            transform: scale(1.05);
          }

          100% {
            opacity: 0;
          }
        }

        @keyframes mobileImage4 {
          0%,
          74% {
            opacity: 0;
          }

          75% {
            opacity: 1;
            transform: scale(1.05);
          }

          97% {
            opacity: 1;
            transform: scale(1);
          }

          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* =========================
           MOBILE TEKST
           ========================= */

        .headerText {
          top: auto;

          right: 0;
          bottom: 10%;
          left: 0;

          transform: none;

          width: auto;

          padding: 22px 18px;

          text-align: center;

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

        /* =========================
           MOBILE GRADIENT
           ========================= */

        .heroGradient {
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8) 15%,
            rgba(0, 0, 0, 0.6) 40%,
            rgba(0, 0, 0, 0.1) 60%
          );
        }
      }
    }

    /* =========================
       LOGO MOBILE
       ========================= */

    .logoContainer {
      display: none;

      @media screen and (max-width: 800px) {
        display: flex;

        align-items: center;
        justify-content: center;

        position: absolute;

        top: 0;
        left: 50%;

        transform: translate(-50%, 0);

        width: 100vw;

        height: 10vh;
        height: 10dvh;

        background: rgba(255, 255, 255, 1);

        border-radius: 0 0 5px 5px;

        img {
          height: 100%;
        }
      }
    }
  }
`;

/* =========================
   MOBILE - REZERWACJA
   ========================= */

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

    padding: 10px;

    color: #222;

    width: auto;

    text-transform: uppercase;

    text-decoration: none;

    text-align: center;
  }
`;

/* =========================
   MOBILE - IKONY
   ========================= */

const Wrapper3 = styled.div`
  @media screen and (min-width: 801px) {
    display: none;
  }

  width: 100vw;

  padding: 0 3vw 8vh;

  margin: 0 auto;

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
