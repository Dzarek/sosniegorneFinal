import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useGlobalContext } from "../context";
import { MdOutlinePets, MdOutlineAccessTimeFilled } from "react-icons/md";
import { ImPriceTag } from "react-icons/im";

// const homeUndraw1 = "/images/home/homeUndraw5.jpg";
const homeUndraw1 = "/images/home/w-07.jpg";
const homeUndraw2 = "/images/gallery/out1.jpg";
const mobileBg = "/images/home/mobileAboutBg.png";

const AboutUs = ({ price }) => {
  const { plLanguage } = useGlobalContext();
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "false" });
  }, []);
  return (
    <>
      <Wrapper>
        <div className="bg"></div>
        <div className="firstPart">
          <div className="homeImgs">
            <img
              src={homeUndraw2}
              alt=""
              data-aos="fade-left"
              className="homeImg"
            />
            <img
              src={homeUndraw1}
              alt=""
              data-aos="fade-right"
              className="homeImg"
            />
          </div>
          <section>
            <h2>{plLanguage ? "O nas" : "About Us"}</h2>
            <h1 className="aboutUsSubtitle">
              {plLanguage
                ? "Domki z jacuzzi do wynajęcia."
                : "Houses with jacuzzi for rent."}
            </h1>
            {plLanguage ? (
              <p>
                Sośnie Górne Resort &amp; Spa to jest to czego szukasz aby pobyć
                z dala od domu, a jednocześnie poczuć się jak w domu. Cisza,
                spokój i otoczenie wspaniałej przyrody oraz przepiękne widoki
                pozwolą Tobie i Twoim bliskim odpocząć od codziennej rutyny.
                <br /> <br />
                <span className="spaSpan">
                  {" "}
                  Podgrzewana wanna SPA jest czynna cały rok 24/7 - bez
                  dodatkowych opłat.
                </span>
              </p>
            ) : (
              <p>
                Sośnie Górne Resort &amp; Spa is what you are looking for to be
                with away from home and feel at home at the same time. Peace and
                quiet and surrounded by wonderful nature and beautiful views
                will allow you and your loved ones to take a break from the
                daily routine.
                <br /> <br />
                <span className="spaSpan">
                  {" "}
                  The heated spa tub is open 24/7 all year round - at no extra
                  charge.
                </span>
              </p>
            )}
          </section>
        </div>
        <div className="secondPart">
          <FeaturesGrid>
            <FeatureCard data-aos="zoom-in" data-aos-delay="100">
              <MdOutlineAccessTimeFilled />
              <div className="info">
                <h3>{plLanguage ? "Doba hotelowa" : "Check-in / Out"}</h3>
                <p>15:00 - 11:00</p>
              </div>
            </FeatureCard>

            <FeatureCard data-aos="zoom-in" data-aos-delay="200">
              <MdOutlinePets />
              <div className="info">
                <h3>{plLanguage ? "Zwierzęta" : "Pets Welcome"}</h3>
                <p>{plLanguage ? "Akceptujemy pupile" : "We accept pets"}</p>
              </div>
            </FeatureCard>

            <FeatureCard data-aos="zoom-in" data-aos-delay="300">
              <ImPriceTag />
              <div className="info">
                <h3>{plLanguage ? "Najlepsza cena" : "Best Price"}</h3>
                <p>
                  {plLanguage
                    ? `od ${price} PLN / noc`
                    : `from ${price} PLN / night`}
                </p>
              </div>
            </FeatureCard>
          </FeaturesGrid>
        </div>
      </Wrapper>
    </>
  );
};

// --- STYLED COMPONENTS ---

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-top: 6vh;
  width: 100%;
  gap: 30px;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 4vh auto 0;
    flex-direction: row; /* Zmieniamy układ na poziomy na telefonach! */
    justify-content: space-around;
    align-items: stretch;
    gap: 10px;
    background: rgba(255, 255, 255, 0.02); /* Delikatne wspólne tło dla paska */
    padding: 20px 10px;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
`;

const FeatureCard = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  background: var(--opinionBgColor);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 16px 24px;
  /* backdrop-filter: blur(5px); */
  transition: 0.5s;
  width: 290px;
  box-sizing: border-box;

  /* EFEKT SCALE - Teraz zaimplementowany w sposób nie do zablokowania */
  &:hover {
    transform: scale(1.06);
    /* border-color: var(--thirdColor); */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
  }

  svg {
    font-size: 2rem;
    color: var(--thirdColor);
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: rotate(5deg); /* Delikatny smaczek przy hoverze na ikonę */
  }

  .info {
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    /* height: 100%; */
    h3 {
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: rgba(255, 255, 255, 0.4);
      margin: 0 0 4px 0;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      font-weight: 600;
      color: white;
      margin: 0;
      line-height: 1.2;
      white-space: nowrap;
    }
  }

  /* NOWY, LEPSZY WYGLĄD NA MOBILCE */
  @media screen and (max-width: 800px) {
    flex-direction: column; /* Ikona nad tekstem */
    justify-content: flex-start;
    gap: 0px;
    /* background: transparent; Usuwamy osobne tła, bo mają wspólny pasek wyżej */
    border: none;
    padding: 20px 5px;
    width: 33%; /* Trzy równe kolumny obok siebie */
    box-shadow: none;
    &:hover {
      transform: none; /* Na dotyk i tak nie ma klasycznego hovera */
    }

    svg {
      font-size: 1.7rem; /* Nieco mniejsze ikony na smartfonie */
      margin-bottom: 10px;
    }

    .info {
      text-align: center;
      height: 100%;
      h3 {
        font-size: 0.7rem; /* Mniejszy, schludny podpis */
        letter-spacing: 0.5px;
        margin-bottom: 15px;
      }

      p {
        font-size: 0.85rem; /* Kompaktowy tekst główny */
        white-space: normal; /* Pozwalamy na łamanie tekstu na bardzo małych ekranach */
        word-break: break-word;
      }
    }
  }
`;

const Wrapper = styled.div`
  width: 82vw;
  margin-left: 18vw;
  margin-top: 5vh;
  padding: 8vh 5vw 10vh;
  position: relative;

  @media screen and (max-width: 800px) {
    width: 100vw;
    margin-left: 0vw;
    padding: 5vh 0vw 7vh;
    margin-top: 0vh;
    margin-bottom: 3vh;
  }

  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${mobileBg});
    background-size: cover;
    opacity: 0.08;
    z-index: 0;

    @media screen and (min-width: 801px) {
      display: none;
    }
  }

  .firstPart {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;

    @media screen and (max-width: 800px) {
      flex-direction: column;
      padding: 0vh 6vw 0vh;
    }
  }

  .secondPart {
    width: 100%;
    position: relative;
    z-index: 2;
    @media screen and (max-width: 800px) {
      flex-direction: column;
      padding: 0vh 3vw 0vh;
    }
  }

  section {
    width: 33vw;
    text-align: left;
    margin-right: 5vw;
    z-index: 1;

    h2 {
      margin-bottom: 5vh;
      color: var(--secondaryColor);
      text-transform: uppercase;
      font-size: 3rem;
      letter-spacing: 5px;
      font-family: var(--titleFont);
      text-align: center;
    }

    .aboutUsSubtitle {
      text-align: center;
      font-size: 1.6rem;
      margin-bottom: 3vh;
    }

    p {
      width: 100%;
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.5;
    }

    @media screen and (max-width: 800px) {
      width: 100%;
      margin: 0 auto;
      text-align: center;

      h2 {
        margin-bottom: 3vh;
        margin-top: 2vh;
        font-size: 2.2rem;
        letter-spacing: 3px;
      }

      .aboutUsSubtitle {
        font-size: 1.3rem;
        margin-bottom: 3vh;
      }

      p {
        font-size: 1.1rem;
        width: 100%;
        margin: 0 auto;
      }
    }
  }

  .homeImgs {
    width: 32vw;
    height: 55vh;
    margin-right: 5vw;
    display: flex;
    justify-content: space-between;
    margin-top: 4vh;
    margin-bottom: 6vh;

    @media screen and (max-width: 800px) {
      display: none;
    }
  }

  .homeImg {
    width: 48%;
    height: 45vh;
    object-fit: cover;
    box-shadow: -2px 2px 5px 0px var(--secondaryColor);
    filter: saturate(0.8);

    &:nth-child(1) {
      margin-top: 7vh;
    }

    @media screen and (max-width: 800px) {
      display: none;
    }
  }

  .spaSpan {
    color: var(--secondaryColor2);
  }
`;

export default AboutUs;
