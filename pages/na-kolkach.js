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
