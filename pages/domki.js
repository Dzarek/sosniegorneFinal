import fsPromises from "fs/promises";
import path from "path";
// import { udogodnienia } from "../data";

import styled from "styled-components";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useGlobalContext } from "../components/context";

import { VscDebugBreakpointLog } from "react-icons/vsc";
import { IoIosResize } from "react-icons/io";
import {
  MdBed,
  MdOutlineKitchen,
  MdOutlineBathtub,
  MdOutlineWifi,
} from "react-icons/md";
import { FaShower, FaParking } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { GiBarbecue, GiTreeSwing } from "react-icons/gi";

// const housesUndraw = "/images/houses/06-1.jpg";
const housesUndraw = "/images/houses/w-05.jpg";

const houseFeatures = [
  "70 m2",
  "salon",
  "wanna spa",
  "2 sypialnie",
  "aneks kuchenny",
  "nowoczesna łazienka",
];
const houseFeaturesEN = [
  "70 m2",
  "living room",
  "spa tub",
  "2 bedrooms",
  "kitchen",
  "modern bathroom",
];
const houseFeatures2 = [
  "wifi",
  "grill",
  "parking",
  "smart TV",
  "plac zabaw",
  "klimatyzacja",
];
const houseFeatures2EN = [
  "wifi",
  "grill",
  "parking",
  "smart TV",
  "playground",
  "air conditioning",
];

const Houses = ({ data: udogodnienia }) => {
  const { plLanguage } = useGlobalContext();

  useEffect(() => {
    Aos.init({ duration: 1000, disable: "false" });
  }, []);

  return (
    <>
      <Head>
        <title>
          Poznaj nasze domki do wynajęcia | Sośnie Górne Resort & SPA
        </title>
        <meta
          name="description"
          content="Poznaj nasze domki z jacuzzi do wynajęcia. Zobacz udogodnienia w jakie zostały wyposażone nasze domki do wynajęcia i co będzie do Twojej dyspozycji."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
        <meta property="og:image" content="/logo192.png" />
      </Head>
      <Wrapper>
        <div className="title">
          <div className="titleLine4a"></div>
          <h2>{plLanguage ? "Nasze Domki" : "Our Houses"}</h2>
          <div className="titleLine4a"></div>
        </div>
        <header className="desktopHeader">
          {plLanguage ? (
            <div className="halfFeatures" data-aos="fade-left">
              {houseFeatures.map((item, index) => {
                return (
                  <h4 key={index}>
                    {item} <VscDebugBreakpointLog />
                  </h4>
                );
              })}
            </div>
          ) : (
            <div className="halfFeatures" data-aos="fade-left">
              {houseFeaturesEN.map((item, index) => {
                return (
                  <h4 key={index}>
                    {item} <VscDebugBreakpointLog />
                  </h4>
                );
              })}
            </div>
          )}
          <img src={housesUndraw} alt="" className="headerImg" />
          {plLanguage ? (
            <div className="halfFeatures" data-aos="fade-right">
              {houseFeatures2.map((item, index) => {
                return (
                  <h4 key={index}>
                    <VscDebugBreakpointLog />
                    {item}
                  </h4>
                );
              })}
            </div>
          ) : (
            <div className="halfFeatures" data-aos="fade-right">
              {houseFeatures2EN.map((item, index) => {
                return (
                  <h4 key={index}>
                    <VscDebugBreakpointLog />
                    {item}
                  </h4>
                );
              })}
            </div>
          )}
        </header>
        <header className="mobileHeader">
          <img src={housesUndraw} alt="" className="headerImg" />
          <div className="iconContent">
            <section data-aos="flip-right">
              <IoIosResize />
              <h4>
                70 m<sup>2</sup>
              </h4>
            </section>
            <section data-aos="flip-right" data-aos-delay="200">
              <MdBed />
              <h4>2 {plLanguage ? "sypialnie" : "bedrooms"}</h4>
            </section>
            <section data-aos="flip-right" data-aos-delay="400">
              <MdOutlineKitchen />
              <h4>{plLanguage ? "aneks kuchenny" : "kitchen"}</h4>
            </section>
            <section data-aos="flip-right" data-aos-delay="600">
              <FaShower />
              <h4>{plLanguage ? "nowoczesna łazienka" : "modern bathroom"}</h4>
            </section>
            <section data-aos="flip-right" data-aos-delay="800">
              <TbAirConditioning />
              <h4>{plLanguage ? "klimatyzacja" : "air conditioning"}</h4>
            </section>
            <section data-aos="flip-left" data-aos-delay="1000">
              <MdOutlineBathtub />
              <h4>{plLanguage ? "wanna spa" : "spa tub"}</h4>
            </section>
            <section data-aos="flip-left" data-aos-delay="1200">
              <MdOutlineWifi />
              <h4>wifi</h4>
            </section>
            <section data-aos="flip-left" data-aos-delay="1400">
              <FaParking />
              <h4>parking</h4>
            </section>
            <section data-aos="flip-left" data-aos-delay="1600">
              <GiBarbecue />
              <h4>grill</h4>
            </section>
            <section data-aos="flip-left" data-aos-delay="1800">
              <GiTreeSwing />
              <h4>{plLanguage ? "plac zabaw" : "playground"}</h4>
            </section>
          </div>
        </header>
        {plLanguage ? (
          <p className="mainText">
            W <span> Sośnie Górne - Resort & Spa </span> do dyspozycji gości
            mamy <span> 5</span> nowoczesnych, w pełni ogrodzonych domków{" "}
            <span>
              {" "}
              70 m<sup>2</sup>
            </span>{" "}
            przystosowane dla max <span> 6</span> osób każdy. Domki są
            identycznie zbudowane i posiadają: dwie przytulne sypialnie,
            komfortowy salon z aneksem kuchennym, stylową łazienkę oraz taras z
            wanna spa, placem zabaw i grilem. Jeden domek dodatkowo posiada
            saune. <br />
            Budynki są w pełni klimatyzowane, zarówno do chłodzenia jak i
            ogrzewania. W domkach zainstalowane zostały szybkie połączenia
            internetu bezprzewodowego WIFI. Dla komfortu gości w salonie
            znajduje się 50″ TV z technologią SMART, a osoby potrzebujące
            miejsca do pracy znajdą swój kącik z biurkiem. <br /> Do każdego
            domku przynależą 2 miejsca parkingowe.
            <div className="plot">
              <div className="verticalLine" data-aos="zoom-in"></div>
              <div className="horizontalLine" data-aos="zoom-in-right"></div>
              <p className="plotInfo">
                Powierzchnia każdej działki to aż{" "}
                <span>
                  800 m<sup>2</sup>
                </span>
              </p>
            </div>
          </p>
        ) : (
          <p className="mainText">
            In <span> Sośnie Górne - Resort & Spa </span> we have{" "}
            <span> 5</span> modern, fully fenced cottages{" "}
            <span>
              {" "}
              70 m<sup>2</sup>
            </span>
            adapted for a maximum of 6 people each. The houses are identically
            built and have: two cozy bedrooms, a comfortable living room with a
            kitchen, a stylish bathroom and a terrace with a spa tub, playground
            and grill. One house also has a sauna. <br /> The buildings are full
            air conditioned for cooling and heating. For the comfort of guests,
            there is a WIFI and 50″ TV with SMART technology in the living room.
            For those who need a place to work, there will be a place with a
            desk. <br /> Each house has 2 parking spaces.
            <div className="plot">
              <div className="verticalLine" data-aos="zoom-in"></div>
              <div className="horizontalLine" data-aos="zoom-in-right"></div>
              <p className="plotInfo">
                The area of each plot is around{" "}
                <span>
                  800 m<sup>2</sup>
                </span>
              </p>
            </div>
          </p>
        )}
        <div className="container">
          <h2 className="containerTitle">
            {plLanguage
              ? "Udogodnienia i wyposażenie"
              : "Facilities and equipment"}
          </h2>
          {udogodnienia.map((item, index) => {
            return (
              <section key={index} data-aos="fade-up">
                <img src={item.img} alt="" />
                <article>
                  <h3>{plLanguage ? item.name : item.nameEN}</h3>
                  {plLanguage ? (
                    <ul>
                      {item.details.map((info, i) => {
                        return (
                          <li key={i}>
                            <VscDebugBreakpointLog /> {info}
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <ul>
                      {item.detailsEN.map((info, i) => {
                        return (
                          <li key={i}>
                            <VscDebugBreakpointLog /> {info}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </article>
              </section>
            );
          })}
        </div>
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
    margin: 7vh auto 5vh;
    justify-content: space-between;
    @media screen and (max-width: 800px) {
      padding: 0;
    }
    h2 {
      border: 2px solid var(--secondaryColor);
      width: 26vw;
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
    .titleLine4a {
      background: var(--secondaryColor);
      height: 2px;
      width: 0;
      animation: growLine4a 3s ease 1 forwards;
      @keyframes growLine4a {
        100% {
          width: 23vw;
        }
      }
      @media screen and (max-width: 800px) {
        @keyframes growLine4a {
          100% {
            width: 25vw;
          }
        }
      }
    }
  }
  header {
    padding: 0 2vw;
    margin: 0 auto;
    width: 100%;
    height: 50vh;
    position: relative;
    margin-top: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 800px) {
      flex-wrap: wrap;
      padding: 0;
      height: auto;
      width: 90%;
    }
    .halfFeatures {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 17vw;
      @media screen and (max-width: 800px) {
        order: 2;
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      svg {
        color: var(--secondaryColor);
        margin: 0 10px 0 0;
        flex-shrink: 0;
      }
      :nth-of-type(1) {
        align-items: flex-end;
        svg {
          margin: 0 0 0 10px;
        }
        @media screen and (max-width: 800px) {
          align-items: flex-start;
          h4 {
            flex-direction: row-reverse;
            justify-content: flex-end;
          }
          svg {
            margin: 0 10px 0 0;
          }
        }
      }
    }
  }
  .headerImg {
    width: 38vw;
    margin: 0 1.5vw;
    z-index: 1;
    box-shadow: 0px 2px 5px 0px var(--secondaryColor2);
    @media screen and (max-width: 800px) {
      width: 100%;
      order: 1;
      margin: 0 auto 5vh;
    }
  }
  h4 {
    text-transform: uppercase;
    font-size: 1.1rem;
    font-family: var(--textFont);
    margin-top: 2.5vh;
    margin-bottom: 2.5vh;
    font-weight: 500;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 800px) {
      font-size: 1rem;
      width: 45%;
      margin-top: 1vh;
      margin-bottom: 1vh;
      text-align: left;
      justify-content: flex-start;
    }
  }
  .iconContent {
    margin: 3vh auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    order: 2;
    section {
      width: 28vw;
      height: 28vw;
      margin: 1vw;
      background: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding: 2px;
      text-align: center;
      overflow: hidden;
      svg {
        font-size: 2.3rem;
        color: var(--thirdColor);
      }
      h4 {
        font-size: 0.8rem;
        text-align: center;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      :hover {
        background: #444;
        color: #fff;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .desktopHeader {
      display: none;
    }
  }
  @media screen and (min-width: 801px) {
    .mobileHeader {
      display: none;
    }
  }
  .mainText {
    padding: 5vh 10vw;
    margin: 12vh auto;
    width: 100%;
    background: #fcfcfc;
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.7;
    @media screen and (max-width: 800px) {
      padding: 5vh 7vw;
      font-size: 1.1rem;
      margin: 6vh auto;
    }
    span {
      color: var(--secondaryColor2);
      font-weight: 700;
    }
    .plot {
      position: relative;
      margin: 5vh auto 0;
      display: flex;
      flex-direction: column;
      width: 50%;
      @media screen and (max-width: 800px) {
        width: 100%;
        margin: 2vh auto 0;
      }
      .horizontalLine {
        width: 100%;
        height: 3px;
        background-color: var(--thirdColor);
      }
      .verticalLine {
        width: 3px;
        height: 100px;
        background-color: var(--thirdColor);
      }
      .plotInfo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        font-style: italic;
        @media screen and (max-width: 800px) {
          font-size: 1rem;
        }
      }
    }
  }
  .containerTitle {
    font-family: var(--titleFont);
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
    color: var(--secondaryColor2);
    letter-spacing: 1px;
    @media screen and (max-width: 800px) {
      width: 90%;
      margin: 0 auto;
    }
  }
  .container {
    width: 80%;
    margin: 10vh auto 15vh;
    @media screen and (max-width: 800px) {
      width: 100%;
      margin: 12vh auto 5vh;
    }
    section {
      width: 100%;
      height: 50vh;
      margin-top: 13vh;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 800px) {
        flex-direction: column;
        height: 50vh;
        justify-content: space-between;
        padding-bottom: 3vh;
      }
      img {
        width: 60%;
        object-fit: cover;
        height: 50vh;
        margin: 8vh auto 0 2vw;
        border: 5px solid var(--appBgColor);
        border-bottom: 5px solid var(--thirdColor);
        @media screen and (max-width: 800px) {
          height: 70%;
          width: 80%;
          margin: -5vh auto 2vh;
          border-bottom: 5px solid var(--appBgColor);
        }
      }
      article {
        display: flex;
        flex-direction: column;
        color: #444;
        align-items: center;
        justify-content: center;
        width: 50%;
        @media screen and (max-width: 800px) {
          width: 100%;
        }
        h3 {
          font-size: 1.8rem;
          text-transform: uppercase;
          margin-bottom: 5vh;
          font-family: var(--navFont);
          @media screen and (max-width: 800px) {
            margin-bottom: 2vh;
          }
        }
        ul {
          list-style: none;
          @media screen and (max-width: 800px) {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
          }
          li {
            margin-bottom: 1.5vh;
            font-size: 1.1rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            text-transform: lowercase;
            svg {
              margin-right: 5px;
              flex-shrink: 0;
            }
            @media screen and (max-width: 800px) {
              font-size: 1rem;
              margin-right: 3vw;
            }
          }
        }
      }
      :nth-of-type(odd) {
        background: var(--thirdColor);
        margin-left: -3vw;
        @media screen and (max-width: 800px) {
          margin-left: 0vw;
        }
      }
      :nth-of-type(even) {
        background: var(--secondaryColor);
        flex-direction: row-reverse;
        margin-left: 3vw;
        @media screen and (max-width: 800px) {
          margin-left: 0vw;
          flex-direction: column;
        }
        img {
          height: 50vh;
          margin: 8vh 2vw 0 auto;
          border-bottom: 5px solid var(--secondaryColor);
          @media screen and (max-width: 800px) {
            height: 70%;
            width: 80%;
            margin: -5vh auto 2vh;
            border-bottom: 5px solid var(--appBgColor);
          }
        }
        article {
          color: #eee;
        }
      }
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
      "https://sosniegornedata-fee8c-default-rtdb.europe-west1.firebasedatabase.app/udogodnienia.json"
    );
    data = await res.json();
  } catch (error) {
    data = localData.udogodnienia;
  }

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

export default Houses;
