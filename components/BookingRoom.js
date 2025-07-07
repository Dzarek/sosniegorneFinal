import styled from "styled-components";
import { useGlobalContext } from "./context";
import { useRouter } from "next/router";
// import { useState } from "react";
// import { IoClose } from "react-icons/io5";
import { MdPhoneAndroid, MdEmail, MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

import Link from "next/link";

const logo = "/images/logo.png";
const logo2 = "/images/logo2.png";
const bookingBg = "/images/home/mobileAboutBg.png";

const BookingRoom = () => {
  const { plLanguage, offset, windowHeight, logoInvert } = useGlobalContext();
  // const [showBooking, setShowBooking] = useState(false);

  const router = useRouter();

  return (
    <>
      <div className={router.pathname !== "/" ? "mobileNone" : ""}>
        <Wrapper
          className={
            (offset > windowHeight && router.pathname == "/") ||
            (router.pathname !== "/" && router.pathname !== "/rezerwacja")
              ? ""
              : "none"
          }
          // style={showBooking ? { width: "100vw" } : { width: "18vw" }}
          style={{ width: "18vw" }}
        >
          <div className="logoContainer">
            <img src={logoInvert ? logo2 : logo} alt="" />
          </div>
          <div className="bookRoom">
            {/* {showBooking ? (
              <h3>{plLanguage ? "Rezerwacja" : "Reservation"}</h3>
            ) : ( */}
            <div className="smallContainer">
              <h3 className="smallh3">
                {plLanguage ? "Rezerwacja" : "Reservation"}
              </h3>
              <p>
                {plLanguage
                  ? "Wybierz termin i dokonaj rezerwacji!"
                  : "Choose date and make a reservation!"}
              </p>
              {/* <button onClick={() => setShowBooking(true)}> */}
              <Link href="/rezerwacja">
                <button>{plLanguage ? "Rezerwuj teraz" : "Book now"}</button>
              </Link>
              <div className="socialMediaWrapper">
                <a href="tel:+48793373246">
                  <MdPhoneAndroid /> <span>+48 793 373 246</span>
                </a>
                <a href="mailto:rezerwacja@sosniegorne.pl">
                  <MdEmail />{" "}
                  <span style={{ display: "flex", flexWrap: "wrap" }}>
                    rezerwacja
                    <div>@</div>
                    sosniegorne.pl
                  </span>
                </a>

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
            {/* )} */}
            {/* {showBooking && (
              <div className="bookForm">
                <button
                  className="closeBtn"
                  onClick={() => setShowBooking(false)}
                >
                  <IoClose />
                </button>
                <iframe
                  id="ra-reservation-form-v2-02a8f0b22bd74852b83ee3b4b05bd29a"
                  className="roomAdmin"
                  src="https://roomadmin.pl/widget/reservation-v2/start?fh=11e1aab88aeea64dba1592e5ec4ca8ba8059e69c&style=%7B%22color_accent%22%3A%22%23253a4d%22%2C%22color_bg%22%3A%22transparent%22%2C%22color_panel_header%22%3A%22%23ffffff%22%2C%22color_panel_body%22%3A%22%23fdfdfd%22%2C%22rounded_corners%22%3Afalse%7D&filter=%7B%7D"
                ></iframe>
              </div>
            )} */}
          </div>
          <img src={bookingBg} alt="" className="bookingBg" />
        </Wrapper>
      </div>
    </>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  width: 17.9vw;
  border-right: 0.1vw solid white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  z-index: 999;
  background-color: #fff;
  transition: 1s;
  overflow-x: hidden;
  overflow-y: auto;
  @media screen and (max-width: 800px) {
    display: none;
  }
  .bookingBg {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    opacity: 0.05;
  }
  .logoContainer {
    height: 13vh;
    width: 100%;
    position: absolute;
    top: 4vh;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 1;
    img {
      height: 100%;
    }
  }

  .bookRoom {
    width: 100%;
    min-height: 80vh;
    color: #111;
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 1vw;
    z-index: 1;
    h3 {
      color: var(--secondaryColor);
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 3px;
      margin-bottom: 3vh;
      margin-top: 0vh;
      font-family: var(--navFont);
    }
    .smallContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 7vh;
      height: 50vh;
      width: 100%;
      animation: showRoomAdmin 1s linear 1 forwards;
      .smallh3 {
        font-size: 1.3rem;
        margin-bottom: 5vh;
      }
      p {
        font-weight: 500;
        font-size: 1.1rem;
        text-align: center;
      }
      button {
        background: var(--secondaryColor);
        padding: 10px 20px;
        color: #fff;
        text-transform: uppercase;
        text-decoration: none;
        border-radius: 1px;
        transition: 0.5s;
        border: none;
        font-family: var(--navFont);
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 1px;
        border: 2px solid var(--secondaryColor);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 5vh;
        text-align: center;
        cursor: pointer;
        :hover {
          color: var(--secondaryColor2);
          background: #fff;
        }
      }
      .socialMediaWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        margin-top: 5vh;
        border-top: 2px solid #ddd;
        padding-top: 5vh;
        a,
        h4 {
          font-size: 1rem;
          margin-bottom: 4vh;
          font-weight: 600;
          text-decoration: none;
          color: #222;
          display: flex;
          align-items: center;
          font-family: var(--textFont);
          align-self: flex-start;
          @media screen and (max-width: 1600px) {
            font-size: 0.9rem;
          }
          svg {
            flex-shrink: 0;
            color: var(--secondaryColor);
            margin-right: 10px;
            font-size: 1.8rem;
            transition: 0.5s;
          }
          :hover svg {
            transform: scale(1.05);
          }
        }
        .fbInWrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 2vh auto 0;
          width: 50%;
          a {
            svg {
              font-size: 2rem;
            }
          }
        }
      }
    }
  }

  .bookForm {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--primaryColor);
    .roomAdmin {
      width: 100vw;
      min-height: 70vh;
      border: none;
      animation: showRoomAdmin 1s linear 1 forwards;
    }
  }
  .closeBtn {
    position: absolute;
    top: 5vh;
    right: 5vw;
    z-index: 999999;
    font-size: 3.5rem;
    justify-content: center;
    align-items: center;
    border: none;
    color: #222;
    background: transparent;
    transition: 0.4s;
    cursor: pointer;
    :hover {
      color: var(--secondaryColor2);
    }
  }
  @keyframes showRoomAdmin {
    0% {
      opacity: 0;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default BookingRoom;
