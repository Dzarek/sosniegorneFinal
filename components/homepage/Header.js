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
            <div className="mainImg" alt=""></div>
          </div>
          <div className="logoContainer">
            <img src={logo} alt="" />
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
      height: 70vh;
      height: 70dvh;
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
      @media screen and (max-width: 800px) {
        margin-top: 10vh;
        margin-top: 10dvh;
        height: 60vh;
        height: 60dvh;
        .mainImg {
          animation: none;
          background-size: cover;
          background-image: url(${headerBg1});
          background-position: center 50%;
          animation: mobileImgMove 28s linear infinite;
        }
        @keyframes mobileImgMove {
          0% {
            background-image: url(${headerBg6});
            transform: scale(1);
          }
          22% {
            background-image: url(${headerBg6});
            transform: scale(1.1);
          }
          24% {
            background-image: url(${headerBg6});
          }
          25% {
            background-image: url(${headerBg1});
            transform: scale(1.1);
          }
          47% {
            background-image: url(${headerBg1});
            transform: scale(1);
          }
          49% {
            background-image: url(${headerBg1});
          }
          50% {
            background-image: url(${headerBg3});
            transform: scale(1);
          }
          72% {
            background-image: url(${headerBg3});
            transform: scale(1.1);
          }
          74% {
            background-image: url(${headerBg3});
          }
          75% {
            background-image: url(${headerBg4});
            transform: scale(1.1);
          }
          97% {
            background-image: url(${headerBg4});
            transform: scale(1);
          }
          100% {
            background-image: url(${headerBg4});
          }
        }
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
  /* height: 30vh;
  height: 30dvh; */
  height: 30vh;
  height: 30dvh;
  position: absolute;
  top: 70vh;
  top: 70dvh;
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
