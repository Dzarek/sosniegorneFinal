import fsPromises from "fs/promises";
import path from "path";
// import { cennik } from "../data";

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
    Aos.init({ duration: 1000, disable: "false" });
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
        <div className="prices">
          <section data-aos="fade-left">
            <h3>{plLanguage ? sezonNiski.name : sezonNiski.nameEN}</h3>
            <div className="dates">
              <h5>{plLanguage ? "Termin" : "Dates"}</h5>
              <p>{plLanguage ? sezonNiski.dates[0] : sezonNiski.datesEN[0]}</p>
              <p>{plLanguage ? sezonNiski.dates[1] : sezonNiski.datesEN[1]}</p>
            </div>
            {plLanguage ? (
              <div className="onePrice">
                <h5>Cena</h5>
                <p>
                  Domek dla 1-4 osób = <span>{sezonNiski.price1} zł/doba</span>{" "}
                </p>
                <p>
                  Domek dla 5-6 osób = <span>{sezonNiski.price2} zł/doba</span>
                </p>
              </div>
            ) : (
              <div className="onePrice">
                <h5>Price</h5>
                <p>
                  House for 1-4 people ={" "}
                  <span>{sezonNiski.price1} pln/night</span>{" "}
                </p>
                <p>
                  House for 5-6 people ={" "}
                  <span>{sezonNiski.price2} pln/night</span>
                </p>
              </div>
            )}
          </section>
          <GiReceiveMoney />
          <section data-aos="fade-right">
            <h3>{plLanguage ? sezonWysoki.name : sezonWysoki.nameEN}</h3>
            <div className="dates">
              <h5>{plLanguage ? "Termin" : "Dates"}</h5>
              <p>
                {plLanguage ? sezonWysoki.dates[0] : sezonWysoki.datesEN[0]}
              </p>
              <p>
                {plLanguage ? sezonWysoki.dates[1] : sezonWysoki.datesEN[1]}
              </p>
            </div>
            {plLanguage ? (
              <div className="onePrice">
                <h5>Cena</h5>
                <p>
                  Domek dla 1-4 osób = <span>{sezonWysoki.price1} zł/doba</span>{" "}
                </p>
                <p>
                  Domek dla 5-6 osób = <span>{sezonWysoki.price2} zł/doba</span>
                </p>
              </div>
            ) : (
              <div className="onePrice">
                <h5>Price</h5>
                <p>
                  House for 1-4 people ={" "}
                  <span>{sezonWysoki.price1} pln/night</span>{" "}
                </p>
                <p>
                  House for 5-6 people ={" "}
                  <span>{sezonWysoki.price2} pln/night</span>
                </p>
              </div>
            )}
          </section>
        </div>
        {plLanguage ? (
          <h3 className="lengthInfo">
            Minimalny pobyt w domku to <span>2 noce</span>. W przypadku pobytów
            długoweekendowych <span>3 noce</span>.
          </h3>
        ) : (
          <h3 className="lengthInfo">
            The minimum stay in the house is <span>2 nights</span>. For stays in
            long weekend is <span>3 nights</span>.
          </h3>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding-bottom: 2vh;
  .title {
    margin: 10vh auto 5vh;
    justify-content: space-between;
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
    }
    @media screen and (max-width: 800px) {
      h2 {
        width: 50vw;
        font-size: 1.5rem;
        padding: 10px 10px;
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
  .prices {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 7vh auto 7vh;
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
    svg {
      font-size: 4rem;
      margin: 0 3vw;
      color: #222;
      @media screen and (max-width: 800px) {
        margin: 4vh auto;
      }
    }
    section {
      width: 30vw;
      height: 55vh;
      background: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      padding: 2vw;
      border: 5px solid var(--secondaryColor);
      border-right: none;
      overflow: hidden;
      @media screen and (max-width: 800px) {
        width: 90%;
        height: auto;
        border-right: 5px solid var(--secondaryColor);
        padding: 3vh 2vw;
      }
      :nth-of-type(2) {
        background: #444;
        color: #fff;
        border: 5px solid var(--thirdColor);
        border-left: none;
        @media screen and (max-width: 800px) {
          border-left: 5px solid var(--thirdColor);
        }
      }
      h3 {
        font-family: var(--navFont);
        margin-bottom: 3vh;
        text-transform: uppercase;
      }
      h5 {
        text-transform: uppercase;
        font-size: 1.2rem;
        margin: 2vh auto;
        font-family: var(--navFont);
      }
      p {
        font-size: 1.1rem;
        margin-bottom: 1vh;
        line-height: 1.5;
        font-weight: 500;
        @media screen and (max-width: 800px) {
          font-weight: 400;
        }
      }
    }
  }
  .lengthInfo {
    margin: 8vh auto 10vh;
    text-align: center;
    font-weight: 500;
    font-size: 1.2rem;
    @media screen and (max-width: 800px) {
      width: 90%;
      line-height: 1.5;
    }
  }
`;

export async function getStaticProps() {
  let data;
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const localData = JSON.parse(jsonData);

  try {
    const res = await fetch(
      "https://sosniegornedata-fee8c-default-rtdb.europe-west1.firebasedatabase.app/price.json"
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
