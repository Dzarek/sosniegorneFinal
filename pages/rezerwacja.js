import Head from "next/head";
import styled from "styled-components";
import { useGlobalContext } from "../components/context";

const logo = "/images/logo.png";
const bookingBg = "/images/home/mobileAboutBg.png";

const BookingHouse = () => {
  const { plLanguage } = useGlobalContext();

  return (
    <>
      <Head>
        <title>
          Rezerwuj online domki z jacuzzi | Sośnie Górne Resort & SPA
        </title>
        <meta name="description" content="Sośnie Górne - Rezerwacja" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
      </Head>
      <Wrapper>
        <div className="title">
          <div className="titleLineR"></div>
          <h2>{plLanguage ? "Rezerwacja" : "Reservation"}</h2>
          <div className="titleLineR"></div>
        </div>
        <iframe
          id="ra-reservation-form-v2-02a8f0b22bd74852b83ee3b4b05bd29a"
          className="roomAdminMobile"
          src="https://roomadmin.pl/widget/reservation-v2/start?fh=11e1aab88aeea64dba1592e5ec4ca8ba8059e69c&style=%7B%22color_accent%22%3A%22%23253a4d%22%2C%22color_bg%22%3A%22transparent%22%2C%22color_panel_header%22%3A%22%23ffffff%22%2C%22color_panel_body%22%3A%22%23fdfdfd%22%2C%22rounded_corners%22%3Afalse%7D&filter=%7B%7D"
        ></iframe>
      </Wrapper>
      <Wrapper2>
        <div className="bookRoom">
          <h3>{plLanguage ? "Rezerwacja" : "Reservation"}</h3>
          <div className="bookForm">
            <iframe
              id="ra-reservation-form-v2-02a8f0b22bd74852b83ee3b4b05bd29a"
              className="roomAdmin"
              src="https://roomadmin.pl/widget/reservation-v2/start?fh=11e1aab88aeea64dba1592e5ec4ca8ba8059e69c&style=%7B%22color_accent%22%3A%22%23253a4d%22%2C%22color_bg%22%3A%22transparent%22%2C%22color_panel_header%22%3A%22%23ffffff%22%2C%22color_panel_body%22%3A%22%23fdfdfd%22%2C%22rounded_corners%22%3Afalse%7D&filter=%7B%7D"
            ></iframe>
          </div>
        </div>
        <img src={bookingBg} alt="" className="bookingBg" />
      </Wrapper2>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  background-color: #fff;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-image: url(${logo});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center 80%;
  background-attachment: fixed;
  @media screen and (min-width: 801px) {
    display: none;
  }
  .title {
    justify-content: space-between;
    margin: 12vh auto 5vh;
    margin: 12dvh auto 5dvh;
    padding: 0;
    h2 {
      border: 2px solid var(--thirdColor);
      text-align: center;
      background: var(--thirdColor);
      color: #222;
      font-weight: 700;
      width: 60vw;
      font-size: 1.4rem;
      padding: 10px 10px;
    }
    .titleLineR {
      background: var(--thirdColor);
      height: 2px;
      width: 0;
      animation: growLineR 3s ease 1 forwards;

      @keyframes growLineR {
        100% {
          width: 20vw;
        }
      }
    }
  }

  .logoContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 10vh;
    margin-bottom: 5vh;
    background: rgba(255, 255, 255, 1);
    border-radius: 0 0 5px 5px;

    img {
      height: 100%;
    }
  }

  h3 {
    color: var(--secondaryColor);
    font-family: var(--navFont);
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 3px;
    text-align: center;
    width: 100vw;
    height: 5vh;
    margin-bottom: 2vh;
  }

  .roomAdminMobile {
    width: 100.5vw;
    min-height: 79vh;
    min-height: 79dvh;
    border: 0;
    padding: 0vh;
  }
`;

const Wrapper2 = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
  min-height: 90vh;
  width: 100vw;
  position: fixed;
  top: 10vh;
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
  @keyframes showRoomAdmin {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default BookingHouse;
