import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useGlobalContext } from "./context";
import { useRouter } from "next/router";
import { BsFillArrowUpSquareFill, BsHousesFill } from "react-icons/bs";

import { IoClose } from "react-icons/io5";
import { HiHome } from "react-icons/hi";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdContacts } from "react-icons/io";
import { FaImages, FaRegEye } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import {
  MdPhoneAndroid,
  MdFacebook,
  MdLocationOn,
  MdEmail,
} from "react-icons/md";
import { MdDirectionsBike } from "react-icons/md";

const polandFlag = "/images/poland-flag.png";
const englandFlag = "/images/england-flag.png";

const logo = "/images/logo.png";

const Navbar = () => {
  const { plLanguage, setPlLanguage, offset, windowHeight } =
    useGlobalContext();

  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  return (
    <>
      <Wrapper>
        <div className="logoContainer">
          <img src={logo} alt="" />
        </div>
        <nav className=".nav">
          <Link href="/">
            <p className={router.pathname == "/" ? "activeNav" : ""}>
              {plLanguage ? "strona główna" : "home page"}
            </p>
          </Link>
          <Link href="/rezerwacja">
            <p className={router.pathname == "/rezerwacja" ? "activeNav" : ""}>
              {plLanguage ? "rezerwacja" : "reservation"}
            </p>
          </Link>
          <Link href="/domki">
            <p className={router.pathname == "/domki" ? "activeNav" : ""}>
              {plLanguage ? "domki" : "houses"}
            </p>
          </Link>
          <Link href="/na-kolkach">
            <p className={router.pathname == "/na-kolkach" ? "activeNav" : ""}>
              {plLanguage ? "na kółkach" : "on wheels"}
            </p>
          </Link>

          <Link href="/zdjecia">
            <p className={router.pathname == "/zdjecia" ? "activeNav" : ""}>
              {plLanguage ? "galeria" : "gallery"}
            </p>
          </Link>
          <Link href="/okoliczne-atrakcje">
            <p
              className={
                router.pathname == "/okoliczne-atrakcje" ? "activeNav" : ""
              }
            >
              {plLanguage ? "okoliczne atrakcje" : "nearby attractions"}
            </p>
          </Link>
          {/* <Link href="/faq">
            <p className={router.pathname == "/faq" ? "activeNav" : ""}>faq</p>
          </Link>
          <Link href="/regulamin">
            <p className={router.pathname == "/regulamin" ? "activeNav" : ""}>
              {plLanguage ? "regulamin" : "regulations"}
            </p>
          </Link> */}
          <Link href="/kontakt">
            <p className={router.pathname == "/kontakt" ? "activeNav" : ""}>
              {plLanguage ? "kontakt" : "contact"}
            </p>
          </Link>
          <div className="languages">
            <img
              src={polandFlag}
              alt="flaga polska"
              onClick={() => setPlLanguage(true)}
              className={plLanguage ? "activeFlag" : ""}
            />
            <img
              src={englandFlag}
              alt="flaga angielska"
              onClick={() => setPlLanguage(false)}
              className={!plLanguage ? "activeFlag" : ""}
            />
          </div>
        </nav>
        <button
          className={offset > 200 ? "upBtn" : "upBtn upBtnNone"}
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <BsFillArrowUpSquareFill />
        </button>
      </Wrapper>
      <Wrapper2>
        {!showMenu && (
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={
              (offset > windowHeight && router.pathname == "/") ||
              router.pathname !== "/"
                ? "navHamburger black"
                : "navHamburger"
            }
          >
            <CgMenuGridR />
          </button>
        )}
        <div className={showMenu ? "navbar" : "navbar none"}>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="navHamburger2"
          >
            <IoClose />
          </button>
          <img src={logo} alt="logo" className="logo" />
          <Link href="/">
            <a
              className={router.pathname == "/" ? "active" : ""}
              onClick={() => setShowMenu(false)}
            >
              <HiHome />
              {plLanguage ? "Strona główna" : "Home page"}
            </a>
          </Link>
          <Link href="/domki">
            <a
              className={router.pathname == "/domki" ? "active" : ""}
              onClick={() => setShowMenu(false)}
            >
              <BsHousesFill />
              {plLanguage ? "Domki" : "Houses"}
            </a>
          </Link>
          <Link href="/na-kolkach">
            <a
              className={router.pathname == "/na-kolkach" ? "active" : ""}
              onClick={() => setShowMenu(false)}
            >
              <MdDirectionsBike />
              {plLanguage ? "na kółkach" : "on wheels"}
            </a>
          </Link>
          <Link href="/zdjecia">
            <a
              className={router.pathname == "/zdjecia" ? "active" : ""}
              onClick={() => setShowMenu(false)}
            >
              <FaImages />
              {plLanguage ? "galeria" : "gallery"}
            </a>
          </Link>
          <Link href="/okoliczne-atrakcje">
            <a
              className={
                router.pathname == "/okoliczne-atrakcje" ? "active" : ""
              }
              onClick={() => setShowMenu(false)}
            >
              <FaRegEye />
              {plLanguage ? "okoliczne atrakcje" : "nearby attractions"}
            </a>
          </Link>
          {/* <Link href="/faq">
            <a
              className={router.pathname == "/faq" ? "active" : ""}
              onClick={() => setShowMenu(false)}
            >
              <FaQuestion />
              FAQ
            </a>
          </Link>
          <Link href="/regulamin">
            <a
              className={router.pathname == "/regulamin" ? "active" : ""}
              onClick={() => setShowMenu(false)}
            >
              <HiExclamation />
              {plLanguage ? "regulamin" : "regulations"}
            </a>
          </Link> */}
          <Link href="/kontakt">
            <a
              className={router.pathname == "/kontakt" ? "active" : ""}
              onClick={() => setShowMenu(false)}
            >
              <IoMdContacts />
              {plLanguage ? "kontakt" : "contact"}
            </a>
          </Link>
          <Link href="/rezerwacja">
            <a className="bookingLink" onClick={() => setShowMenu(false)}>
              {plLanguage ? "rezerwacja" : "reservation"}
            </a>
          </Link>
          <div className="languages">
            <img
              src={polandFlag}
              alt="flaga polska"
              onClick={() => setPlLanguage(true)}
              className={plLanguage ? "activeFlag" : ""}
            />
            <img
              src={englandFlag}
              alt="flaga angielska"
              onClick={() => setPlLanguage(false)}
              className={!plLanguage ? "activeFlag" : ""}
            />
          </div>
          <div className="contactWrapper">
            <a
              href="https://goo.gl/maps/x3d8HRsPK2MKyu6d8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdLocationOn className="icon" />
            </a>
            <a href="tel:+48793373246">
              <MdPhoneAndroid className="icon" />
            </a>
            <a href="mailto:rezerwacja@sosniegorne.pl">
              <MdEmail className="icon" />
            </a>
            <a
              href="https://www.facebook.com/SosnieGorne/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdFacebook className="icon" />
            </a>
            <a
              href="https://www.instagram.com/sosniegorne/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="icon" />
            </a>
          </div>
        </div>
        {/* <button
          className={offset > 200 ? "upBtn" : "upBtn upBtnNone"}
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <BsFillArrowUpSquareFill />
        </button> */}
      </Wrapper2>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  @media screen and (max-width: 800px) {
    display: none;
  }

  .languages {
    border-left: 2px solid var(--secondaryColor);
    display: flex;
    padding-left: 2vw;
    img {
      width: 35px;
      margin: 0 15px;
      filter: saturate(0);
      transition: 0.4s;
      cursor: pointer;
      :hover {
        filter: saturate(0.9);
      }
    }
    .activeFlag {
      filter: saturate(0.7);
    }
    background: #fff;
    @media screen and (max-width: 1440px) {
      padding-left: 1vw;
    }
  }

  .logoContainer {
    height: 10vh;
    width: 18vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 999;
    background: #fff;
    img {
      height: 100%;
    }
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  nav {
    width: 82vw;
    height: 9.8vh;
    position: fixed;
    top: 0vh;
    left: 18vw;
    z-index: 999;
    padding-right: 3vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-bottom: 0.2vh solid white;
    @media screen and (max-width: 1440px) {
      padding-right: 1vw;
    }
    /* @media screen and (max-width: 1200px) {
      width: 100vw;
      left: 0vw;
    } */
    p {
      text-transform: uppercase;
      font-weight: 600;
      color: var(--secondaryColor);
      font-size: 0.95rem;
      font-family: var(--navFont);
      height: 50%;
      padding: 0 1vw;
      cursor: pointer;
      transition: 0.4s;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      border: 2px solid transparent;
      @media screen and (max-width: 1440px) {
        padding: 0 0.5vw;
        font-size: 0.9rem;
      }
      :hover {
        border-bottom: 2px solid var(--secondaryColor);
      }
    }
    .activeNav {
      background: var(--secondaryColor);
      color: #fff;
    }
    @media screen and (max-width: 800px) {
      display: none;
    }
  }

  .upBtn {
    position: fixed;
    bottom: 1.5vh;
    right: 5vw;
    font-size: 2rem;
    background: transparent;
    border: none;
    color: var(--secondaryColor0);
    transition: 0.5s;
    cursor: pointer;
    z-index: 9999;
    :hover {
      color: var(--secondaryColor3);
    }
  }
  .upBtnNone {
    opacity: 0;
  }
`;
const Wrapper2 = styled.div`
  @media screen and (min-width: 801px) {
    display: none;
  }
  .black {
    background: #222;
    color: #fff;
    transition: 0.5s;
  }
  .navbar {
    position: fixed;
    height: 100vh;
    height: 100dvh;
    width: 100vw;
    padding-top: 10vh;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 9999999999999;
    background: #fff;
    transition: 1s;
    @media screen and (min-height: 740px) {
      padding-top: 8vh;
    }
    h5,
    a {
      width: 100vw;
      margin-top: 2vh;
      padding: 7px 0;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      font-family: var(--textFont);
      text-transform: capitalize;
      transition: 0.4s;
      cursor: pointer;
      text-decoration: none;
      color: #111;
      user-select: none;
      svg {
        font-size: 1.3rem;
        margin-right: 15px;
        margin-left: -15px;
        color: var(--secondaryColor);
      }
      &.active {
        color: #fff;
        background: var(--secondaryColor);

        svg {
          color: #fff;
        }
      }
    }
    .bookingLink {
      min-width: 50%;
      font-weight: 500;
      margin-top: 5vh;
      margin-top: 5dvh;
      font-size: 1.1rem;
      background: var(--thirdColor);
      padding: 10px 10px;
      color: #222;
      width: auto;
      text-transform: uppercase;
    }

    .logo {
      width: 45%;
      margin-bottom: 2vh;
      /* position: absolute;
      top: 7vh;
      top: 7dvh;
      left: 50%;
      transform: translateX(-50%); */
      @media screen and (min-height: 740px) {
        margin-bottom: 5vh;
      }
    }
  }
  .none {
    transition: 1s;
    transform: translateY(-115vh);
    transform: translateY(-115dvh);
  }
  .languages {
    position: absolute;
    top: 2vh;
    right: 1vw;
    display: flex;
    img {
      width: 35px;
      margin: 0 10px;
      filter: saturate(0);
      transition: 0.4s;
      cursor: pointer;
    }
    .activeFlag {
      filter: saturate(0.5);
    }
  }
  .contactWrapper {
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    width: 85%;
    justify-content: space-between;
    user-select: none;
    a,
    div {
      user-select: none;
      .icon {
        font-size: 2rem;
        cursor: pointer;
        margin-right: 0px;
        margin-left: 0px;
      }
    }
  }
  .upBtn {
    position: fixed;
    bottom: 1vh;
    bottom: 1dvh;
    right: 15vw;
    font-size: 2rem;
    background: transparent;
    border: none;
    color: var(--secondaryColor0);
    transition: 0.5s;
    cursor: pointer;
    z-index: 9999;
    :hover {
      color: var(--secondaryColor0);
    }
  }
  .upBtnNone {
    opacity: 0;
  }
`;
export default Navbar;
