import Head from "next/head";
import styled from "styled-components";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import { useGlobalContext } from "../components/context";
import ReservationInfoMobile from "../components/ReservationInfoMobile";

const logo = "/images/logo.png";
const bookingBg = "/images/home/mobileAboutBg.png";

const reservationUrl =
  "https://roomadmin.pl/widget/reservation-v2/start?fh=11e1aab88aeea64dba1592e5ec4ca8ba8059e69c&style=%7B%22color_accent%22%3A%22%23253a4d%22%2C%22color_bg%22%3A%22transparent%22%2C%22color_panel_header%22%3A%22%23ffffff%22%2C%22color_panel_body%22%3A%22%23fdfdfd%22%2C%22rounded_corners%22%3Afalse%7D&filter=%7B%7D";

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

        <meta
          property="og:image"
          content="https://sosniegorne.pl/logo192.png"
        />
      </Head>

      <Wrapper>
        {/* =========================
            MOBILE
        ========================= */}

        <button
          className="whyUsBtn"
          onClick={() => setOpenModal(true)}
          type="button"
        >
          {plLanguage ? "Dlaczego rezerwować tutaj?" : "Why book here?"}
        </button>

        {openModal && <ReservationInfoMobile setOpenModal={setOpenModal} />}

        {/* =========================
            TYTUŁ
        ========================= */}

        <div className="title">
          <div className="titleLineRez"></div>

          <h2>{plLanguage ? "Rezerwacja" : "Reservation"}</h2>

          <div className="titleLineRez"></div>
        </div>

        {/* =========================
            INFORMACJE DESKTOP
        ========================= */}

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
              <img src="/images/reservation/minimum.png" alt="minimum-ikona" />

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
                  {plLanguage ? "Bezpłatna zmiana terminu" : "Free date change"}
                </h4>

                <p>
                  {plLanguage
                    ? "Nagła zmiana planów? Twoja rezerwacja jest bezpieczna! Zadzwoń i poinformuj nas o sytuacji do 72 godzin przed przyjazdem. Bezpłatnie zmienimy termin na inny!"
                    : "Change of plans? Your reservation is safe! Call and inform us about the situation up to 72 hours before arrival. We will change the date to another one free of charge!"}
                </p>
              </div>
            </article>
          </section>
        </div>

        {/* =========================
            FORMULARZ
        ========================= */}

        <div className="bookRoom">
          <div className="bookForm">
            <h3>{plLanguage ? "Rezerwacja" : "Reservation"}</h3>

            <div
              className={
                active
                  ? "roomAdminContainer roomAdminContainerActive"
                  : "roomAdminContainer"
              }
              onMouseEnter={() => setActive(true)}
            >
              <iframe
                id="ra-reservation-form-v2-02a8f0b22bd74852b83ee3b4b05bd29a"
                className="roomAdmin"
                src={reservationUrl}
                title="Formularz rezerwacji Sośnie Górne"
                loading="eager"
              />

              {active && (
                <div className="iframeIconActive">
                  <FaArrowUp aria-hidden="true" />

                  <h4>wybierz daty i liczbę gości</h4>

                  <FaArrowUp aria-hidden="true" />
                </div>
              )}
            </div>

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
          src="/images/reservation/rezerwacja-img.webp"
          alt="rezerwacja"
          className="rezerwacjaImg"
        />

        {/* =========================
            TŁO DESKTOP
        ========================= */}

        <img src={bookingBg} alt="" className="bookingBg" />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #fff;

  overflow-x: hidden;

  position: relative;
  .whyUsBtn {
    display: none;
  }

  /*
   * MOBILE
   */
  @media screen and (max-width: 800px) {
    position: fixed;

    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
    height: 100dvh;

    overflow: hidden;

    z-index: 99;

    background-image: url(${logo});
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center 80%;

    .whyUsBtn {
      position: absolute;
      top: 2vh;
      right: 2vw;
      display: block;
      background-color: var(--secondaryColor);

      padding: 7px 10px;

      border: none;
      border-radius: 2px;

      color: white;

      font-family: var(--textFont);
      font-weight: 400;
      font-size: 0.9rem;

      z-index: 10;
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

      .titleLineRez {
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

    /*
     * Na mobile informacje desktopowe są ukryte.
     */
    .fourInfo {
      display: none;
    }

    /*
     * Nagłówek "Rezerwacja" formularza jest na mobile ukryty,
     * tak jak w oryginalnej wersji.
     */
    .bookForm h3 {
      display: none;
    }

    /*
     * Formularz RoomAdmin.
     *
     * Jest tylko JEDEN iframe w DOM.
     */
    .roomAdminContainer {
      width: 100vw;

      height: 79vh;
      height: 79dvh;

      margin: 0;

      overflow: hidden;
    }

    .roomAdmin {
      display: block;

      width: 100.5vw;
      height: 79vh;
      height: 79dvh;

      border: 0;
      padding: 0;

      margin: 0;
    }

    /*
     * Teksty pod formularzem są poza ekranem mobile,
     * ponieważ sam formularz zajmuje dostępne miejsce.
     */
    .bookForm > p,
    .bookForm > span {
      display: none;
    }

    .bookRoom {
      width: 100vw;
      display: block;
    }

    .bookForm {
      width: 100%;

      padding: 0;

      background: transparent;
    }

    .rezerwacjaImg {
      display: none;
    }

    .bookingBg {
      display: none;
    }
  }

  /*
   * DESKTOP
   */
  @media screen and (min-width: 801px) {
    min-height: 90vh;

    width: 100vw;

    margin-top: 10vh;

    background-color: #fff;

    transition: 1s;

    overflow-x: hidden;
    overflow-y: auto;

    /*
     * TŁO
     */
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

      pointer-events: none;
    }

    /*
     * GŁÓWNA ZAWARTOŚĆ
     */
    .contentWrapper {
      z-index: 99;

      position: relative;

      width: 100vw;

      animation: showRoomAdmin 1s linear 1 forwards;
    }

    /*
     * TYTUŁ
     */
    .title {
      padding: 0 5vw;
      margin: 10vh auto 5vh;
      justify-content: space-between;

      h2 {
        border: 2px solid var(--secondaryColor);
        width: 20vw;
        text-align: center;
        padding: 2vh;
        background: var(--secondaryColor);
        color: #fff;
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
      }
    }

    /*
     * INFORMACJE
     */
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

    /*
     * FORMULARZ
     */
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

    /*
     * Kontener ma własną wysokość.
     *
     * Dzięki temu nie animujemy bezpośrednio iframe.
     */
    .roomAdminContainer {
      position: relative;

      width: 80vw;

      height: 20vh;

      margin-bottom: 5vh;

      overflow: hidden;

      transition: height 0.7s ease;

      z-index: 1;
    }

    /*
     * Zachowanie oryginału:
     * po najechaniu formularz rozwija się do 80vh.
     */
    .roomAdminContainerActive {
      height: 80vh;
    }

    /*
     * JEDYNY iframe RoomAdmin
     */
    .roomAdmin {
      display: block;

      width: 100%;
      height: 100%;

      border: none;

      margin: 0;

      padding: 0;
    }

    /*
     * Ikona / komunikat pozostaje w tym samym miejscu.
     */
    .iframeIconActive {
      position: absolute;

      left: 50%;
      top: 0%;

      margin-top: 52vh;

      transform: translateX(-50%);

      z-index: 2;

      color: #ccc;

      display: flex;

      align-items: center;

      justify-content: center;

      pointer-events: none;

      svg {
        margin: 0 20px;

        font-size: 2rem;
      }

      h4 {
        font-size: 1.2rem;

        font-weight: 500;
      }
    }

    /*
     * DOLNA GRAFIKA
     */
    .rezerwacjaImg {
      display: block;

      width: 100%;
      margin-bottom: 4px;
    }

    /*
     * Pozostałe elementy z oryginału
     */
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

        &:nth-of-type(2) {
          width: 25%;
        }

        &:nth-of-type(3) {
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
  }
`;

export default BookingHouse;
