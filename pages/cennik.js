import styled from "styled-components";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useGlobalContext } from "../components/context";
import { GiReceiveMoney } from "react-icons/gi";

import fsPromises from "fs/promises";
import path from "path";

// =========================================================
// MOCK DATA
// =========================================================

// const pricingData = {
//   sezonNiski: {
//     dates: ["1 styczeń - 20 czerwiec", "1 wrzesień - 22 grudzień"],
//     datesEN: ["January 1 - June 20", "September 1 - December 22"],
//     name: "sezon niski",
//     nameEN: "low season",

//     price1: 650,
//     priceExtra: 75,

//     saunaPrice1: 750,
//     saunaPriceExtra: 75,
//   },

//   sezonWysoki: {
//     dates: [
//       "21 czerwiec - 31 sierpień",
//       "Sylwester, Święta Wielkanocne, Święta Bożego Narodzenia, Weekend Majowy, Boże Ciało, Długie Weekendy",
//     ],
//     datesEN: [
//       "June 21 - August 31",
//       "New Year's Eve, Easter, Christmas, May Long Weekend, Corpus Christi, Long Weekends",
//     ],
//     name: "sezon wysoki",
//     nameEN: "high season",

//     price1: 900,
//     priceExtra: 100,

//     saunaPrice1: 1000,
//     saunaPriceExtra: 100,
//   },
// };

const getPrice = (basePrice, extraPrice, people) => {
  if (people <= 2) {
    return basePrice;
  }

  return basePrice + (people - 2) * extraPrice;
};

const PriceOption = ({
  title,
  basePrice,
  extraPrice,
  isHighSeason,
  plLanguage,
}) => {
  return (
    <PriceOptionWrapper $isHighSeason={isHighSeason}>
      <h4>{title}</h4>

      <div className="basePrice">
        <span className="price">{basePrice} zł</span>
        <span className="perNight">{plLanguage ? "/ doba" : "/ night"}</span>
      </div>

      <p className="baseInfo">
        {plLanguage ? "dla 1–2 osób" : "for 1–2 people"}
      </p>

      <div className="extraInfo">
        <strong>+{extraPrice} zł</strong>{" "}
        {plLanguage ? "za każdą kolejną osobę" : "for each additional person"}
      </div>

      <div className="pricesTable">
        <h5>
          {plLanguage
            ? "Cena w zależności od liczby osób"
            : "Price depending on number of people"}
        </h5>

        {[3, 4, 5, 6].map((people) => (
          <div className="priceRow" key={people}>
            <span>
              {people}{" "}
              {plLanguage
                ? people === 3 || people === 4
                  ? "osoby"
                  : "osób"
                : people === 1
                  ? "person"
                  : "people"}
            </span>

            <strong>{getPrice(basePrice, extraPrice, people)} zł</strong>
          </div>
        ))}
      </div>

      <div className="maxPeople">
        {plLanguage ? "Maksymalnie 6 osób" : "Maximum 6 people"}
      </div>
    </PriceOptionWrapper>
  );
};

const Pricing = ({ data: price }) => {
  const { plLanguage } = useGlobalContext();

  const { sezonNiski, sezonWysoki } = price;

  useEffect(() => {
    Aos.init({
      duration: 1000,
      disable: false,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Cennik domków do wynajęcia | Sośnie Górne Resort & SPA</title>

        <meta
          name="description"
          content="Aktualny cennik wynajmu naszych domków. Wejdź i sprawdź dostępne terminy. Zaplanuj swój pobyt z wyprzedzeniem."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
      </Head>

      <Wrapper className="mainPage">
        <div className="title">
          <div className="titleLine5"></div>

          <h2>{plLanguage ? "Cennik" : "Pricing"}</h2>

          <div className="titleLine5"></div>
        </div>

        <Season>
          {/* <SeasonHeader>
            <h3>{plLanguage ? sezonNiski.name : sezonNiski.nameEN}</h3>

            <div className="dates">
              <p>{plLanguage ? sezonNiski.dates[0] : sezonNiski.datesEN[0]}</p>

              <p>{plLanguage ? sezonNiski.dates[1] : sezonNiski.datesEN[1]}</p>
            </div>
          </SeasonHeader> */}

          <div className="options">
            <PriceOption
              title={plLanguage ? "Domek z Jacuzzi" : "House with a Jacuzzi"}
              basePrice={sezonNiski.price1}
              extraPrice={sezonNiski.priceExtra}
              isHighSeason={false}
              plLanguage={plLanguage}
            />

            <IconDivider>
              <GiReceiveMoney />
            </IconDivider>

            <PriceOption
              title={
                plLanguage
                  ? "Domek z jacuzzi i sauną"
                  : "House with jacuzzi and sauna"
              }
              basePrice={sezonNiski.saunaPrice1}
              extraPrice={sezonNiski.saunaPriceExtra}
              isHighSeason={false}
              plLanguage={plLanguage}
            />
          </div>
        </Season>
        <div className="line-separator"></div>
        <Season>
          <SeasonHeader>
            {/* <h3>{plLanguage ? sezonWysoki.name : sezonWysoki.nameEN}</h3> */}

            <div className="dates">
              {/* <p>
                {plLanguage ? sezonWysoki.dates[0] : sezonWysoki.datesEN[0]}
              </p> */}

              <p>
                {plLanguage ? sezonWysoki.dates[1] : sezonWysoki.datesEN[1]}
              </p>
            </div>
          </SeasonHeader>

          <div className="options">
            <PriceOption
              title={plLanguage ? "Domek z Jacuzzi" : "House with a Jacuzzi"}
              basePrice={sezonWysoki.price1}
              extraPrice={sezonWysoki.priceExtra}
              isHighSeason={true}
              plLanguage={plLanguage}
            />

            <IconDivider>
              <GiReceiveMoney />
            </IconDivider>

            <PriceOption
              title={
                plLanguage
                  ? "Domek z jacuzzi i sauną"
                  : "House with jacuzzi and sauna"
              }
              basePrice={sezonWysoki.saunaPrice1}
              extraPrice={sezonWysoki.saunaPriceExtra}
              isHighSeason={true}
              plLanguage={plLanguage}
            />
          </div>
        </Season>

        <h3 className="lengthInfo">
          {plLanguage ? (
            <>
              Odpocznij dłużej! Minimalna rezerwacja to <span>2 doby </span>
              (długie weekendy: min. <span>3 doby</span>)
            </>
          ) : (
            <>
              Relax longer! Minimum booking is <span>2 days </span>
              (long weekends: <span>3 days</span> minimum)
            </>
          )}
        </h3>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding-bottom: 6vh;

  .title {
    margin: 10vh auto 7vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: 800px) {
      margin: 7vh auto 5vh;
    }

    h2 {
      border: 2px solid var(--secondaryColor);
      width: 20vw;
      text-align: center;
      padding: 2vh;
      background: var(--secondaryColor);
      color: #fff;
      font-family: var(--titleFont);
    }

    @media screen and (max-width: 800px) {
      h2 {
        width: 50vw;
        font-size: 1.5rem;
        padding: 10px;
      }
    }

    .titleLine5 {
      background: var(--secondaryColor);
      height: 2px;
      width: 0;
      animation: growLine5 3s ease 1 forwards;

      @keyframes growLine5 {
        100% {
          width: 26vw;
        }
      }

      @media screen and (max-width: 800px) {
        @keyframes growLine5 {
          100% {
            width: 25vw;
          }
        }
      }
    }
  }

  .lengthInfo {
    margin: 8vh auto 10vh;
    text-align: center;
    font-weight: 500;
    font-size: 1.2rem;
    color: #222;
    padding-top: 5vh;
    border-top: var(--secondaryColor) 2px solid;
    width: 70%;

    span {
      font-weight: 700;
      color: var(--secondaryColor);
    }

    @media screen and (max-width: 800px) {
      width: 80%;
      line-height: 1.5;
    }
  }
  .line-separator {
    /* display: none; */
    /* @media screen and (max-width: 800px) { */
    width: 50%;
    height: 2px;
    background-color: #222;
    display: block;
    margin: 2vh auto 7vh;
    /* } */
  }
`;

const Season = styled.section`
  width: 100%;
  margin: 0 auto 10vh;

  .options {
    display: flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;

    @media screen and (max-width: 950px) {
      flex-direction: column;
      align-items: center;
      gap: 7vh;
    }
  }
`;

const SeasonHeader = styled.div`
  text-align: center;
  margin-bottom: 4vh;

  h3 {
    display: inline-block;
    padding: 1vh 3vw;
    /* background: var(--secondaryColor); */
    color: var(--secondaryColor);
    font-family: var(--titleFont);
    font-size: 2.3rem;
    text-transform: uppercase;
  }

  .dates {
    margin-top: 2vh;

    p {
      font-size: 1.1rem;
      margin: 0.5vh auto;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 800px) {
    h3 {
      font-size: 1.8rem;
    }

    .dates {
      width: 90%;
      margin: 2vh auto 0;
    }
  }
`;

const PriceOptionWrapper = styled.div`
  width: 31vw;
  min-height: 54vh;
  padding: 4vh 3vw;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => (props.$isHighSeason ? "#2b2b2b" : "#ffffff")};
  color: ${(props) => (props.$isHighSeason ? "#ffffff" : "#222222")};
  border: 1px solid
    ${(props) =>
      props.$isHighSeason ? "var(--thirdColor)" : "rgba(37, 58, 77, 0.25)"};
  box-shadow: ${(props) =>
    props.$isHighSeason
      ? "0 8px 30px rgba(0, 0, 0, 0.18)"
      : "0 8px 30px rgba(0, 0, 0, 0.08)"};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) =>
      props.$isHighSeason
        ? "0 15px 35px rgba(0, 0, 0, 0.25)"
        : "0 15px 35px rgba(0, 0, 0, 0.12)"};
  } /* Delikatny akcent u góry karty */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 15%;
    right: 15%;
    height: 3px;
    background: ${(props) =>
      props.$isHighSeason ? "var(--thirdColor)" : "var(--secondaryColor)"};
  }
  h4 {
    margin: 0 0 2.5vh;
    font-family: var(--navFont);
    font-size: 1.35rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: ${(props) =>
      props.$isHighSeason ? "var(--thirdColor)" : "var(--secondaryColor)"};
  }
  .basePrice {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 0.4vw;
    margin-top: 0.5vh;
  }
  .price {
    font-size: 2.6rem;
    line-height: 1;
    font-weight: 700;
    color: ${(props) =>
      props.$isHighSeason ? "var(--thirdColor)" : "var(--secondaryColor)"};
  }
  .perNight {
    font-size: 0.95rem;
    font-weight: 500;
    opacity: 0.8;
  }
  .baseInfo {
    margin: 1vh 0 2.5vh;
    font-size: 1rem;
    font-weight: 500;
    opacity: 0.8;
  }
  .extraInfo {
    width: 100%;
    margin: 0 0 3vh;
    padding: 1.5vh 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5vh;
    border-top: 1px solid
      ${(props) =>
        props.$isHighSeason
          ? "rgba(238, 207, 81, 0.35)"
          : "rgba(37, 58, 77, 0.18)"};
    border-bottom: 1px solid
      ${(props) =>
        props.$isHighSeason
          ? "rgba(238, 207, 81, 0.35)"
          : "rgba(37, 58, 77, 0.18)"};
    span {
      font-size: 0.9rem;
      opacity: 0.8;
    }
    strong {
      font-size: 1.15rem;
      font-weight: 700;
      color: ${(props) =>
        props.$isHighSeason ? "var(--thirdColor)" : "var(--secondaryColor)"};
    }
  }
  .pricesTable {
    width: 100%;
    margin-top: 0.5vh;
    h5 {
      margin-bottom: 1.5vh;
      font-family: var(--navFont);
      font-size: 0.85rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      opacity: 0.65;
    }
  }
  .priceRow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8vh 0.5vw;
    font-size: 0.95rem;
    border-bottom: 1px solid
      ${(props) =>
        props.$isHighSeason
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(0, 0, 0, 0.08)"};
    &:last-child {
      border-bottom: none;
    }
    span {
      opacity: 0.85;
    }
    strong {
      font-size: 1rem;
      font-weight: 700;
      color: ${(props) =>
        props.$isHighSeason ? "var(--thirdColor)" : "var(--secondaryColor)"};
    }
  }
  .maxPeople {
    margin-top: auto;
    padding-top: 2.5vh;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.3px;
    opacity: 0.55;
  }
  @media screen and (max-width: 950px) {
    width: 90%;
    min-height: auto;
    padding: 4vh 7vw;
  }
  @media screen and (max-width: 500px) {
    width: 92%;
    padding: 4vh 6vw;
    h4 {
      font-size: 1.1rem;
    }
    .price {
      font-size: 2rem;
    }
    .priceRow {
      padding: 1vh 1vw;
      font-size: 0.95rem;
    }
  }
`;

const IconDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;

  svg {
    font-size: 4rem;
    margin: 0 3vw;
    color: #222;
  }

  @media screen and (max-width: 950px) {
    margin: 0 auto;
    display: none;
  }
`;

export async function getStaticProps() {
  let data;
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const localData = JSON.parse(jsonData);

  try {
    const res = await fetch(
      "https://sosniegornedata-fee8c-default-rtdb.europe-west1.firebasedatabase.app/price.json",
    );
    data = await res.json();
  } catch (error) {
    data = localData.price;
  }

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

export default Pricing;
