import styled from "styled-components";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../components/context";
import { Link } from "react-scroll";
import { atractionsData } from "../data";

const Attractions = () => {
  const { plLanguage } = useGlobalContext();

  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 1000, disable: "false" });
  }, []);

  const handleScroll = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <Head>
        <title>
          Zobacz jakie atrakcje oferuje nasza okolica | Sośnie Górne Resort &
          SPA
        </title>
        <meta
          name="description"
          content="Nie samym jacuzzi człowiek żyje. Zobacz jakie atrakcje oferuje nasza najbliższa okolica. Dowiedz się gdzie dobrze zjeść i co ciekawego zobaczyć."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
      </Head>
      <Wrapper>
        <div className="title">
          <div className="titleLine6"></div>
          <h2>{plLanguage ? "Okoliczne Atrakcje" : "Nearby Attractions"}</h2>
          <div className="titleLine6"></div>
        </div>
        {plLanguage ? (
          <p className="mainText">
            <span>Grybów</span> stanowi fantastyczną bazą wypadową dla amatorów
            aktywnego wypoczynku o każdej porze roku jak i miejsce do
            leniuchowania w otoczeniu otaczającej przyrody. Teren Beskidu
            Niskiego oferuje różnorodne szlaki do uprawiania turystyki pieszej,
            rowerowej i konnej. W niedalekiej odległości od Grybowa znajdują się
            wyciągi narciarskie które przyciągają amatorów sportów zimowych.
            Polecamy także okoliczne restauracje gdzie można dobrze zjeść i miło
            spędzić czas.
          </p>
        ) : (
          <p className="mainText">
            <span>Grybów</span> is a fantastic place for sports amateurs at any
            time of the year as well as a place to lazing around in the
            surrounding nature. The area of the Low Beskids offers a variety of
            trails for hiking, biking and horse riding. In a short distance from
            our cottages are also located ski lifts, water parks, museums and
            historical places. We also recommend nearby restaurants, bars and
            pizzerias where you can eat well and have a good time.
          </p>
        )}
        <h2 className="containerTitle">
          {plLanguage ? "Wybierz Kategorie" : "Select Categories"}
        </h2>
        <div className="categories">
          {atractionsData.map((item, index) => {
            return (
              <Link
                to="content"
                spy={true}
                smooth={true}
                duration={1000}
                key={index}
                onClick={() => handleScroll(item.category)}
                className={activeCategory === item.category && "activeBtn"}
              >
                <img src={item.image} alt="" />
                <span>{plLanguage ? item.category : item.categoryEN}</span>
              </Link>
            );
          })}
        </div>
        {activeCategory && (
          <div className="content" name="content">
            {atractionsData
              .find((item) => item.category === activeCategory)
              .places.map((i, index) => {
                return (
                  <section key={index} data-aos="fade-up">
                    <iframe
                      src={i.mapSrc}
                      className="map"
                      title="mapa"
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                    <div className="info">
                      <h4>{plLanguage ? i.name : i.nameEN}</h4>
                      {i.icon}
                      <p>{i.address}</p>
                    </div>
                  </section>
                );
              })}
          </div>
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
      width: 36vw;
      text-align: center;
      padding: 2vh;
      background: var(--secondaryColor);
      color: #fff;
    }
    @media screen and (max-width: 800px) {
      h2 {
        width: 60vw;
        font-size: 1.5rem;
        padding: 10px 10px;
      }
    }
    .titleLine6 {
      background: var(--secondaryColor);
      height: 2px;
      width: 0;
      animation: growLine6 3s ease 1 forwards;
      @keyframes growLine6 {
        100% {
          width: 18vw;
        }
      }
      @media screen and (max-width: 800px) {
        @keyframes growLine6 {
          100% {
            width: 20vw;
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
    @media screen and (max-width: 800px) {
      width: 90%;
      margin: 0 auto;
    }
  }
  .categories {
    width: 80%;
    margin: 7vh auto 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 800px) {
      flex-wrap: wrap;
      justify-content: center;
      width: 90%;
      margin: 7vh auto 5vh;
    }
    a {
      width: 23%;
      height: 28vh;
      background: #fff;
      cursor: pointer;
      border: 2px solid var(--thirdColor);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      transition: 0.5s;
      @media screen and (max-width: 800px) {
        width: 38vw;
        height: 38vw;
        margin: 2vw;
      }
      img {
        width: 100%;
        height: 80%;
        object-fit: cover;
      }
      span {
        height: 20%;
        width: 100%;
        background: var(--thirdColor);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--navFont);
        font-weight: 500;
        text-transform: uppercase;
        font-size: 1rem;
        transition: 0.5s;
      }
      :hover {
        border: 2px solid var(--secondaryColor);
      }
      :hover span,
      .activeBtn span {
        background: var(--secondaryColor);
        color: #fff;
      }
    }
    .activeBtn {
      border: 2px solid var(--secondaryColor2);
      span {
        background: var(--secondaryColor2);
        color: #fff;
      }
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5vh auto;
    border-top: 2px solid var(--secondaryColor);
    width: 30vw;
    padding-top: 10vh;
    @media screen and (max-width: 800px) {
      margin: 5vh auto;
      padding-top: 5vh;
      width: 50vw;
    }
    section {
      width: 50vw;
      height: 35vh;
      display: flex;
      justify-content: space-between;
      background: #fff;
      border: 5px solid #fff;
      margin-bottom: 10vh;
      @media screen and (max-width: 800px) {
        width: 90vw;
        flex-direction: column-reverse;
        height: 50vh;
        margin-bottom: 5vh;
      }
      .map {
        height: 100%;
        width: 60%;
        border: 2px solid var(--thirdColor);
        filter: saturate(0.5);
        transition: 0.5s;
        border-right: none;
        @media screen and (max-width: 800px) {
          width: 100%;
          height: 55%;
          border-top: none;
          border-right: 2px solid var(--thirdColor);
        }
      }
      :hover .map {
        filter: saturate(1);
        border: 2px solid var(--secondaryColor2);
        border-right: none;
        @media screen and (max-width: 800px) {
          border-top: none;
          border-right: 2px solid var(--secondaryColor2);
        }
      }
      .info {
        height: 100%;
        width: 40%;
        padding: 5vh 2vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border: 2px solid var(--thirdColor);
        border-left: none;
        transition: 0.5s;
        svg {
          font-size: 3rem;
          color: var(--thirdColor);
          transition: 0.5s;
        }
        h4 {
          text-align: center;
          font-size: 1.1rem;
        }
        p {
          text-align: center;
          font-weight: 500;
        }
        @media screen and (max-width: 800px) {
          width: 100%;
          height: 45%;
          padding: 2vh 2vw;
          border-left: 2px solid var(--thirdColor);
          border-bottom: none;
        }
      }
      :hover .info {
        border: 2px solid var(--secondaryColor2);
        border-left: none;
        @media screen and (max-width: 800px) {
          border-left: 2px solid var(--secondaryColor2);
          border-bottom: none;
        }
        svg {
          color: var(--secondaryColor2);
        }
      }
    }
  }
`;

export default Attractions;
