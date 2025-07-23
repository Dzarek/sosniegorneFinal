import Head from "next/head";
import styled from "styled-components";
import { useGlobalContext } from "../components/context";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import ReservationInfoMobile from "../components/ReservationInfoMobile";

const logo = "/images/logo.png";
const bookingBg = "/images/home/mobileAboutBg.png";

const BookingHouse = () => {
  const { plLanguage } = useGlobalContext();
  const [active, setActive] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Head>
        <title>
          Rezerwuj online domki z jacuzzi | Sośnie Górne Resort & SPA
        </title>
        <meta
          name="description"
          content="Najlepsze ceny. Szybka i bezpieczna rezerwacja. Płatność online. Nowoczesne i komfortowe domki z jacuzzi do wynajęcia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
        <meta property="og:image" content="/logo192.png" />
      </Head>
      <Wrapper>
        <button className="whyUsBtn" onClick={() => setOpenModal(true)}>
          {plLanguage ? "Dlaczego rezerwować tutaj?" : "Why book here?"}
        </button>
        {openModal && <ReservationInfoMobile setOpenModal={setOpenModal} />}
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
        <img src={bookingBg} alt="" className="bookingBg" />
        <div className="contentWrapper">
          <div className="title">
            <div className="titleLineRez"></div>
            <h2>{plLanguage ? "Rezerwacja" : "Reservation"}</h2>
            <div className="titleLineRez"></div>
          </div>
          <div className="fourInfo">
            <section>
              <article>
                <img src="/images/reservation/szybko.png" alt="szybko-ikona" />
                <div className="fourInfo-text">
                  <h4>{plLanguage ? "SZYBKO" : "FAST"}</h4>
                  <p>
                    {plLanguage
                      ? "Domek z jacuzzi na wyłączność może być Twój w ciągu najbliższych 5 minut. Mniej więcej tyle zajmuje wypełnienie formularza rezerwacji."
                      : "House with an exclusive jacuzzi can be yours in the next 5 minutes. This is approximately how long it takes to complete the reservation form."}
                  </p>
                </div>
              </article>
              <article>
                <img
                  src="/images/reservation/minimum.png"
                  alt="minimum-ikona"
                />
                <div className="fourInfo-text">
                  <h4>
                    {plLanguage ? "Minimum formalności" : "Minimum formalities"}
                  </h4>
                  <p>
                    {plLanguage
                      ? "Wystarczą tylko podstawowe informacje: imię, nazwisko, numer telefonu i adres e-mail. Nie musisz zakładać żadnego konta, ani podawać danych karty kredytowej."
                      : "All you need is basic information: name, surname, number telephone and e-mail address. You don't need to create any account, or provide credit card details."}
                  </p>
                </div>
              </article>
            </section>
            <div className="sep-line"></div>
            <section>
              <article>
                <img
                  src="/images/reservation/bezpiecznie.png"
                  alt="bezpiecznie-ikona"
                />
                <div className="fourInfo-text">
                  <h4>{plLanguage ? "Bezpiecznie" : "Safe"}</h4>
                  <p>
                    {plLanguage
                      ? "Proces płatności obsługuje Przelewy24, a nasza strona wykorzystuje certyfikat SSL dzięki któremu Twoje dane są bezpieczne przez cały czas pobytu na naszej stronie."
                      : "The payment process is handled by Przelewy24 and our website uses an SSL certificate thanks to which your data is secured safe throughout your stay on our website."}
                  </p>
                </div>
              </article>
              <article>
                <img
                  src="/images/reservation/anulowanie.png"
                  alt="anulowanie-ikona"
                />
                <div className="fourInfo-text">
                  <h4>
                    {plLanguage ? "Bezpłatne anulowanie" : "Free cancellation"}
                  </h4>
                  <p>
                    {plLanguage
                      ? "Nagła zmiana planów? Twoja rezerwacja jest bezpieczna! Zadzwoń i poinformuj nas o sytuacji do 48h przed przyjazdem. Bezpłatnie zmienimy termin na inny!"
                      : "Change of plans? Your reservation is safe! Call and inform us about the situation up to 48 hours before arrival. We will change the date to another one free of charge!"}
                  </p>
                </div>
              </article>
            </section>
          </div>
          <div className="bookRoom">
            <div className="bookForm">
              <h3>{plLanguage ? "Rezerwacja" : "Reservation"}</h3>

              <iframe
                onMouseOver={() => setActive(true)}
                // onMouseLeave={() => setActive(false)}
                id="ra-reservation-form-v2-02a8f0b22bd74852b83ee3b4b05bd29a"
                className={active ? "roomAdmin roomAdminActive" : "roomAdmin"}
                src="https://roomadmin.pl/widget/reservation-v2/start?fh=11e1aab88aeea64dba1592e5ec4ca8ba8059e69c&style=%7B%22color_accent%22%3A%22%23253a4d%22%2C%22color_bg%22%3A%22transparent%22%2C%22color_panel_header%22%3A%22%23ffffff%22%2C%22color_panel_body%22%3A%22%23fdfdfd%22%2C%22rounded_corners%22%3Afalse%7D&filter=%7B%7D"
              ></iframe>
              {active && (
                <div className="iframeIconActive">
                  <FaArrowUp />
                  <h4>wybierz daty i liczbę gości</h4>
                  <FaArrowUp />
                </div>
              )}
              <p>
                {plLanguage
                  ? "Rezerwując na naszej stronie masz gwarancję najniższej ceny."
                  : "When you book on our website, you are guaranteed the lowest price."}
              </p>
              <span>
                {plLanguage
                  ? "Problem z formularzem? Zadzwoń tel. 793 373 246"
                  : "Problem with the form? Call +48 793 373 246"}
              </span>
            </div>
          </div>
          <img
            src="/images/reservation/rezerwacja-img.jpg"
            alt=""
            className="rezerwacjaImg"
          />
          {/* <div className="opinionContainer">
            <h4 className="opinionTitle">
              {plLanguage
                ? "Sprawdź, co piszą o nas nasi goście!"
                : "What our guests say about us?"}
            </h4>
            <div className="opinion">
              <a
                href="https://www.airbnb.pl/rooms/847582399728857550/reviews"
                target="_blank"
              >
                <img
                  src="/images/reservation/airbnb-opinie.jpg"
                  alt="Nasze opinie na Airbnb.com"
                />
              </a>
              <div className="opinionLine"></div>
              <a
                href="https://alohacamp.com/pl/property/sosnie-gorne-resort-andamp-spa-1335"
                target="_blank"
              >
                <img
                  src="/images/reservation/alohacamp-opinie.jpg"
                  alt="Nasze opinie na Alohacamp.com"
                />
              </a>
              <div className="opinionLine"></div>
              <a
                href="https://www.booking.com/hotel/pl/sosnie-gorne-resort-spa.pl.html#tab-reviews"
                target="_blank"
              >
                <img
                  src="/images/reservation/booking-opinie.jpg"
                  alt="Nasze opinie na Booking.com"
                />
              </a>
              <div className="opinionLine"></div>
              <a
                href="https://maps.app.goo.gl/6KJxZnjg9ZmWJ3Wp7"
                target="_blank"
              >
                <img
                  src="/images/reservation/google-opinie.jpg"
                  alt="Nasze opinie w Google Maps"
                />
              </a>
            </div>
          </div> */}
        </div>
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
  .whyUsBtn {
    position: absolute;
    top: 2vh;
    right: 2vw;
    background-color: var(--secondaryColor);
    padding: 7px 10px;
    border: none;
    border-radius: 2px;
    color: white;
    font-family: var(--textFont);
    font-weight: 400;
    font-size: 0.9rem;
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
  margin-top: 10vh;
  background-color: #fff;
  transition: 1s;
  overflow-x: hidden;
  overflow-y: auto;

  .contentWrapper {
    z-index: 99;
    position: relative;
    width: 100vw;
    animation: showRoomAdmin 1s linear 1 forwards;
  }

  .bookingBg {
    z-index: 0;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    opacity: 0.05;
    object-fit: cover;
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
    .titleLineRez {
      background: var(--secondaryColor);
      height: 2px;
      width: 0;
      /* width: 35vw; */
      animation: growLine4 3s ease 1 forwards;
      @keyframes growLine4 {
        100% {
          width: 35vw;
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

  .fourInfo {
    margin: 3vh auto;
    width: 75%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .sep-line {
      width: 2px;
      height: 32vh;
      background: #777;
      margin: 0 3vw 5vh;
    }
    section {
      display: flex;
      flex-direction: column;
      width: 40vw;
      article {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 5vh;
        img {
          margin-right: 2vw;
          width: 20%;
        }
        .fourInfo-text {
          h4 {
            font-family: var(--navFont);
            text-transform: uppercase;
            color: var(--secondaryColor);
            font-size: 1.4rem;
            font-weight: 800;
          }
          p {
            font-weight: 500;
            font-family: var(--navFont);
            line-height: 1.5;
            font-size: 1rem;
          }
        }
      }
    }
  }

  .bookRoom {
    width: 100vw;
    color: #111;
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 1;
  }
  .bookForm {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--primaryColor);
    background: var(--secondaryColor);
    padding: 20px;
    font-family: var(--navFont);
    position: relative;
    .roomAdmin {
      width: 80vw;
      border: none;
      margin-bottom: 5vh;
      z-index: 1;
      /* animation: adminActive2 2.7s ease forwards; */
      /* height: 80vh; */
    }
    .roomAdminActive {
      animation: adminActive 0.7s ease forwards;
    }
    @keyframes adminActive {
      0% {
        height: 20vh;
      }
      100% {
        height: 80vh;
      }
    }
    @keyframes adminActive2 {
      0% {
        height: 80vh;
      }
      100% {
        height: 20vh;
      }
    }
    h3 {
      color: white;
      font-size: 2rem;
      border-bottom: 2px solid white;
      font-weight: 500;
      padding: 3px 20px;
      text-transform: uppercase;
      margin-bottom: 5vh;
      margin-top: 1vh;
    }
    p {
      color: white;
      font-weight: 600;
      margin: 2vh auto 1vh;
    }
    span {
      color: #aaafb5;
      margin: 1vh auto 5vh;
    }
  }
  .rezerwacjaImg {
    width: 100%;
  }
  .opinionContainer {
    background: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .opinionTitle {
    font-family: var(--navFont);
    padding: 3px 7px;
    border-bottom: 2px solid var(--secondaryColor);
    color: var(--secondaryColor);
    font-weight: 700;
    font-size: 1.2rem;
    margin: 4vh auto;
    text-align: center;
  }
  .opinion {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90vw;
    margin: 0 auto 4vh;
    a {
      width: 15%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
      }
      :nth-of-type(2) {
        width: 25%;
      }
      :nth-of-type(3) {
        width: 25%;
      }
    }
    .opinionLine {
      width: 1px;
      background: #777;
      height: 80px;
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

  .iframeIconActive {
    position: absolute;
    left: 50%;
    top: 0%;
    margin-top: 52vh;
    transform: translateX(-50%);
    z-index: 0;
    color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin: 0 20px;
      font-size: 2rem;
    }
    h4 {
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
`;

export default BookingHouse;
