import fsPromises from "fs/promises";
import path from "path";

import styled from "styled-components";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useGlobalContext } from "../components/context";
import { GiReceiveMoney } from "react-icons/gi";

const Pricing = ({ data }) => {
  const { sezonNiski, sezonWysoki } = data;
  const { plLanguage } = useGlobalContext();

  useEffect(() => {
    Aos.init({ duration: 1000, disable: false });
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

        <div className="pricesGrid">
          {/* Sezon Niski - Jasna karta */}
          <PriceCard data-aos="fade-left" $isHighSeason={false}>
            <h3>{plLanguage ? sezonNiski.name : sezonNiski.nameEN}</h3>

            <div className="datesBlock">
              <h5>{plLanguage ? "Termin" : "Dates"}</h5>
              <p>{plLanguage ? sezonNiski.dates[0] : sezonNiski.datesEN[0]}</p>
              <p>{plLanguage ? sezonNiski.dates[1] : sezonNiski.datesEN[1]}</p>
            </div>

            <div className="priceBlock">
              <h5>{plLanguage ? "Cena" : "Price"}</h5>
              <p>
                {plLanguage ? "Domek dla 1-4 osób =" : "House for 1-4 people ="}
                <span className="amount">
                  {" "}
                  {sezonNiski.price1} {plLanguage ? "zł/doba" : "pln/night"}
                </span>
              </p>
              <p>
                {plLanguage ? "Domek dla 5-6 osób =" : "House for 5-6 people ="}
                <span className="amount">
                  {" "}
                  {sezonNiski.price2} {plLanguage ? "zł/doba" : "pln/night"}
                </span>
              </p>
            </div>
          </PriceCard>

          <IconDivider>
            <GiReceiveMoney />
          </IconDivider>

          {/* Sezon Wysoki - Ciemna karta */}
          <PriceCard data-aos="fade-right" $isHighSeason={true}>
            <h3>{plLanguage ? sezonWysoki.name : sezonWysoki.nameEN}</h3>

            <div className="datesBlock">
              <h5>{plLanguage ? "Termin" : "Dates"}</h5>
              <p>
                {plLanguage ? sezonWysoki.dates[0] : sezonWysoki.datesEN[0]}
              </p>
              <p>
                {plLanguage ? sezonWysoki.dates[1] : sezonWysoki.datesEN[1]}
              </p>
            </div>

            <div className="priceBlock">
              <h5>{plLanguage ? "Cena" : "Price"}</h5>
              <p>
                {plLanguage ? "Domek dla 1-4 osób =" : "House for 1-4 people ="}
                <span className="amount">
                  {" "}
                  {sezonWysoki.price1} {plLanguage ? "zł/doba" : "pln/night"}
                </span>
              </p>
              <p>
                {plLanguage ? "Domek dla 5-6 osób =" : "House for 5-6 people ="}
                <span className="amount">
                  {" "}
                  {sezonWysoki.price2} {plLanguage ? "zł/doba" : "pln/night"}
                </span>
              </p>
            </div>
          </PriceCard>
        </div>

        <h3 className="lengthInfo">
          {plLanguage ? (
            <>
              Odpocznij dłużej! Minimalna rezerwacja to <span>2 doby </span>
              (długie weekendy: min. <span>3 doby</span>)
            </>
          ) : (
            <>
              Relax longer! Minimum booking is <span>2 days </span>(long
              weekends: <span>3 days</span> minimum)
            </>
          )}
        </h3>
      </Wrapper>
    </>
  );
};

// --- STYLED COMPONENTS ---

const Wrapper = styled.div`
  padding-bottom: 6vh;

  .title {
    margin: 10vh auto 5vh;
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

  .pricesGrid {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 7vh auto;

    @media screen and (max-width: 950px) {
      flex-direction: column;
      gap: 4vh;
    }
  }

  .lengthInfo {
    margin: 8vh auto 10vh;
    text-align: center;
    font-weight: 500;
    font-size: 1.2rem;
    color: #222; /* Domyślny ciemny tekst dla sekcji dolnej */

    span {
      font-weight: 700;
      color: var(--secondaryColor);
    }

    @media screen and (max-width: 800px) {
      width: 90%;
      line-height: 1.5;
    }
  }
`;

const PriceCard = styled.section`
  width: 30vw;
  min-height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 2.5vw 2vw;
  box-sizing: border-box;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  /* Stylizacja warunkowa na podstawie sezonu */
  background: ${(props) => (props.$isHighSeason ? "#333333" : "#ffffff")};
  color: ${(props) => (props.$isHighSeason ? "#ffffff" : "#222222")};
  border: 5px solid
    ${(props) =>
      props.$isHighSeason ? "var(--thirdColor)" : "var(--secondaryColor)"};

  /* Układ obramowań stykających się na desktopie */
  border-right: ${(props) =>
    !props.$isHighSeason ? "none" : "5px solid var(--thirdColor)"};
  border-left: ${(props) =>
    props.$isHighSeason ? "none" : "5px solid var(--secondaryColor)"};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    z-index: 2; /* Sprawia, że najechana karta lekko nachodzi na sąsiada bez ucinania cienia */
  }

  h3 {
    font-family: var(--navFont);
    margin-bottom: 2vh;
    text-transform: uppercase;
    font-size: 1.4rem;
    color: ${(props) =>
      props.$isHighSeason ? "var(--thirdColor)" : "var(--secondaryColor)"};
  }

  h5 {
    text-transform: uppercase;
    font-size: 1.15rem;
    margin: 1.5vh auto 1vh;
    font-family: var(--navFont);
    opacity: 0.8;
  }

  .datesBlock,
  .priceBlock {
    width: 100%;
  }

  p {
    font-size: 1.05rem;
    margin-bottom: 1vh;
    line-height: 1.5;
    font-weight: 500;
    @media screen and (max-width: 950px) {
      font-size: 1rem;
    }
  }

  .amount {
    font-weight: 700;
    font-size: 1.2rem;
    /* dynamiczny kolor wyróżnionej kwoty */
    color: ${(props) =>
      props.$isHighSeason ? "var(--thirdColor)" : "var(--secondaryColor)"};
    @media screen and (max-width: 950px) {
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 950px) {
    width: 90%;
    height: auto;
    min-height: auto;
    padding: 4vh 4vw;
    border: 5px solid
      ${(props) =>
        props.$isHighSeason
          ? "var(--thirdColor)"
          : "var(--secondaryColor)"} !important;

    p {
      font-weight: 400;
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
    margin: 2vh auto;
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
