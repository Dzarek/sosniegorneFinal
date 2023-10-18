import styled from "styled-components";
import { useGlobalContext } from "./context";
import { TbArrowBackUp } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ReservationInfoMobile = ({ setOpenModal }) => {
  const { plLanguage } = useGlobalContext();
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "false" });
  }, []);
  return (
    <Wrapper>
      <button onClick={() => setOpenModal(false)}>
        <TbArrowBackUp />
      </button>
      <div className="fourInfo">
        <article data-aos="fade-down">
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
        <article data-aos="fade-right">
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
        <article data-aos="fade-left">
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
        <article data-aos="fade-up">
          <img
            src="/images/reservation/anulowanie.png"
            alt="anulowanie-ikona"
          />
          <div className="fourInfo-text">
            <h4>{plLanguage ? "Bezpłatne anulowanie" : "Free cancellation"}</h4>
            <p>
              {plLanguage
                ? "Nagła zmiana planów? Twoja rezerwacja jest bezpieczna! Zadzwoń i poinformuj nas o sytuacji do 48h przed przyjazdem. Bezpłatnie zmienimy termin na inny!"
                : "Change of plans? Your reservation is safe! Call and inform us about the situation up to 48 hours before arrival. We will change the date to another one free of charge!"}
            </p>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media screen and (min-width: 801px) {
    display: none;
  }
  height: 100vh;
  height: 100dvh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: white;
  overflow-y: auto;
  button {
    position: absolute;
    top: 2vh;
    right: 2vw;
    z-index: 999999;
    font-size: 3.5rem;
    justify-content: center;
    align-items: center;
    border: none;
    color: #222;
    background: transparent;
    transition: 0.3s;
    cursor: pointer;
  }
  .fourInfo {
    position: relative;
    margin: 12vh auto 5vh;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    article {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: 5vh;

      img {
        margin-right: 5vw;
        width: 15%;
      }
      .fourInfo-text {
        h4 {
          font-family: var(--navFont);
          text-transform: uppercase;
          color: var(--secondaryColor);
          font-size: 1.1rem;
          font-weight: 800;
          margin-bottom: 1vh;
        }
        p {
          font-weight: 500;
          font-family: var(--navFont);
          line-height: 1.3;
          font-size: 1rem;
        }
      }
    }
  }
`;

export default ReservationInfoMobile;
