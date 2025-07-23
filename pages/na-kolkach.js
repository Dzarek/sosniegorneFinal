import styled from "styled-components";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useGlobalContext } from "../components/context";
// import { MdDirectionsBike, MdOutlineElectricScooter } from "react-icons/md";
// import { RiEBike2Line } from "react-icons/ri";

const Bikes = () => {
  const { plLanguage } = useGlobalContext();

  const rowerImg = "/images/bikeRent/rower.png";
  const hulajnogaImg = "/images/bikeRent/hulajnoga.png";
  const wozekImg = "/images/bikeRent/wozek.png";

  useEffect(() => {
    Aos.init({ duration: 1000, disable: "false" });
  }, []);
  return (
    <>
      <Head>
        <title>
          Wypożyczalnia sprzętu rekreacyjnego | Sośnie Górne Resort & SPA
        </title>
        <meta
          name="description"
          content="Wypożyczalnia sprzętu rekreacyjnego."
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
      <Wrapper className="mainPage">
        <div className="title">
          <div className="titleLine"></div>
          <h2>{plLanguage ? "Na kółkach" : "On wheels"}</h2>
          <div className="titleLine"></div>
        </div>
        {plLanguage ? (
          <p className="mainText">
            Na terenie naszej posesji oferujemy wypożyczalnię sprzętu mobilnego,
            idealnego na aktywny wypoczynek i wygodne poruszanie się po okolicy.
            Do dyspozycji naszych gości są{" "}
            <span>rowery, hulajnogi elektryczne</span> oraz
            <span> elektryczny wózek dla osób z niepełnosprawnościami</span>. To
            świetna opcja na krótkie przejażdżki, wycieczki po lesie lub szybkie
            zakupy w pobliskim sklepie. Sprzęt jest nowoczesny, regularnie
            serwisowany i gotowy do użytku. Wypożyczenie możliwe jest na miejscu
            – szybko i bez zbędnych formalności.
          </p>
        ) : (
          <p className="mainText">
            On our property, we offer a rental service for mobility equipment –
            perfect for exploring the area or enjoying an active break. Guests
            can use{" "}
            <span>
              bicycles, electric scooters, and an electric wheelchair for people
              with disabilities.
            </span>{" "}
            It's a great way to take short trips, ride through nearby forests,
            or quickly reach local shops. All equipment is modern,
            well-maintained, and ready to use. Rentals are available directly
            on-site – fast and hassle-free.
          </p>
        )}
        {plLanguage ? (
          <h2 className="containerTitle">
            Może przejażdżka po okolicy na jednym z naszych pojazdów?
          </h2>
        ) : (
          <h2 className="containerTitle">
            Want to discover the surroundings? <br /> Hop on one of our rental
            vehicles.
          </h2>
        )}
        <section className="vehicles">
          <div className="oneVehicle">
            <h4>{plLanguage ? "rower" : "bike"}</h4>
            {/* <MdDirectionsBike /> */}
            <img src={rowerImg} alt="rower" className="bikeImg" />
            <div className="prices">
              <p className="priceNumber">50.00</p>
              <p>PLN/{plLanguage ? "dzień" : "day"}</p>
            </div>
          </div>
          <div className="oneVehicle">
            <h4>{plLanguage ? "hulajnoga elektryczna" : "electric scooter"}</h4>
            {/* <MdOutlineElectricScooter /> */}
            <img src={hulajnogaImg} alt="hulajnoga" />
            <div className="prices">
              <p className="priceNumber">70.00</p>
              <p>PLN/{plLanguage ? "dzień" : "day"}</p>
            </div>
          </div>
          <div className="oneVehicle">
            {plLanguage ? (
              <h4>
                pojazd elektryczny dla <br /> os. niepełnosprawnych
              </h4>
            ) : (
              <h4>
                electric vehicle <br /> for disabled people
              </h4>
            )}
            {/* <RiEBike2Line /> */}
            <img src={wozekImg} alt="wóźek dla os. niepełnosprawnych" />

            <div className="prices">
              <p className="priceNumber">100.00</p>
              <p>PLN/{plLanguage ? "dzień" : "day"}</p>
            </div>
          </div>
        </section>
        <h3 className="desktop">
          {plLanguage
            ? "Zainteresowany? Zadzwoń tel. 793 373 246"
            : "Interested? Just give us a call at +48 793 373 246"}
        </h3>
        {plLanguage ? (
          <h3 className="mobile">
            Zainteresowany? Zadzwoń tel. <br /> 793 373 246
          </h3>
        ) : (
          <h3 className="mobile">
            Interested? Just give us a call at <br /> +48 793 373 246
          </h3>
        )}
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
    padding: 5vh 0vw;
  }
  .title {
    padding: 0 5vw;
    margin: 10vh auto 5vh;
    justify-content: space-between;
    @media screen and (max-width: 800px) {
      padding: 0;

      margin: 5vh auto 5vh;
    }
    h2 {
      border: 2px solid var(--secondaryColor);
      width: 30vw;
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
    .titleLine {
      background: var(--secondaryColor);
      height: 2px;
      width: 0;
      animation: growLine 3s ease 1 forwards;
      @keyframes growLine {
        100% {
          width: 21vw;
        }
      }
      @media screen and (max-width: 800px) {
        @keyframes growLine {
          100% {
            width: 25vw;
          }
        }
      }
    }
  }
  .mainText {
    padding: 5vh 10vw;
    margin: 10vh auto;
    width: 100%;
    background: #fcfcfc;
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.7;
    span {
      color: var(--secondaryColor2);
      font-weight: 500;
    }
    @media screen and (max-width: 800px) {
      padding: 5vh 7vw;
      font-size: 1.1rem;
      margin: 6vh auto;
    }
  }
  .containerTitle {
    font-family: var(--titleFont);
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
    color: var(--secondaryColor2);
    letter-spacing: 1px;
    width: 80%;
    margin: 0 auto;
    @media screen and (max-width: 800px) {
      width: 90%;
      margin: 0 auto;
      font-size: 1.4rem;
    }
  }
  .vehicles {
    width: 70%;
    margin: 10vh auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 800px) {
      width: 70%;
      flex-direction: column;
    }
    .oneVehicle {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 3% 2%;
      align-items: center;
      width: 30%;
      height: 40vh;
      text-align: center;
      border-radius: 30px;
      /* background: #e7e7e7; */
      background: white;
      box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
      transition: 0.5s;
      transform: rotate(5deg);

      @media screen and (max-width: 800px) {
        width: 100%;
        height: 50vh;
        margin-bottom: 5vh;
        padding: 15% 7%;
        transform: rotate(2deg);
      }
      @media screen and (min-height: 700px) {
        height: 40vh;
      }
      h4 {
        text-transform: uppercase;
        font-size: 1rem;
        color: var(--secondaryColor2);
        @media screen and (max-width: 1600px) {
          font-size: 0.9rem;
        }
        @media screen and (max-width: 800px) {
          font-size: 0.95rem;
        }
      }
      /* svg {
        font-size: 7rem;
        color: var(--thirdColor);
      } */
      img {
        width: 50%;
      }
      .bikeImg {
        width: 65%;
      }
      p {
        font-weight: 500;
        font-size: 1.1rem;
        line-height: 120%;
      }
      .priceNumber {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 3px;
      }
      :hover {
        transform: rotate(0deg);
      }
    }
  }
  h3 {
    margin: 0vh auto 10vh;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    width: 80%;
    line-height: 120%;
    @media screen and (max-width: 800px) {
      font-size: 1.2rem;
    }
  }
  .desktop {
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
  .mobile {
    line-height: 150%;
    @media screen and (min-width: 801px) {
      display: none;
    }
  }
`;

export default Bikes;
