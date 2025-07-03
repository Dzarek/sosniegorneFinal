import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useGlobalContext } from "../context";

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
import { RiHome2Fill, RiHome2Line } from "react-icons/ri";

const ShortHouses = () => {
  const { plLanguage } = useGlobalContext();

  useEffect(() => {
    Aos.init({ duration: 1000, disable: "false" });
  }, []);

  return (
    <Wrapper>
      {plLanguage ? <h2>Nasze Domki</h2> : <h2>Our Houses</h2>}
      <div className="iconsContainer">
        <RiHome2Fill />
        <RiHome2Line />
        <RiHome2Fill />
      </div>
      {plLanguage ? (
        <p>
          Do dyspozycji gości mamy 5 nowoczesnych, w pełni ogrodzonych domków 70
          m<sup>2</sup> przystosowane dla max 6 osób każdy. Domki są identycznie
          zbudowane i posiadają: dwie przytulne sypialnie, komfortowy salon z
          aneksem kuchennym, stylową łazienkę oraz taras z wanna spa, placem
          zabaw i grilem. Jeden domek dodatkowo posiada saune.
        </p>
      ) : (
        <p>
          We have 5 modern, fully fenced cottages 70 m<sup>2</sup>
          adapted for a maximum of 6 people each. The houses are identically
          built and have: two cozy bedrooms, a comfortable living room with a
          kitchen, a stylish bathroom and a terrace with a spa tub, playground
          and grill. One house also has a sauna.
        </p>
      )}
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 82vw;
  margin-left: 18vw;
  padding: 5vh 5vw 0vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .iconsContainer {
    width: 70%;
    margin: 0vh auto 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      font-size: 3rem;
      color: var(--thirdColor);
    }
    @media screen and (min-width: 801px) {
      display: none;
    }
  }

  h2 {
    margin-bottom: 8vh;
    color: var(--secondaryColor);
    text-transform: uppercase;
    font-size: 3rem;
    letter-spacing: 5px;
    font-family: var(--titleFont);
    text-align: center;
  }
  p {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.5;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 100vw;
    margin-left: 0vw;
    padding: 0vh 5vw 5vh;
    h2 {
      margin-bottom: 5vh;
      margin-top: 5vh;
      font-size: 2rem;
      letter-spacing: 3px;
    }
    p {
      font-size: 1.1rem;
      width: 100%;
      margin: 0 auto;
    }
  }
  .iconContent {
    margin: 5vh auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    section {
      width: 12vw;
      height: 12vw;
      background: #fff;
      margin: 1.2vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding: 10px;
      text-align: center;
      svg {
        font-size: 3rem;
        color: var(--thirdColor);
      }
      h4 {
        font-size: 0.9rem;
      }
      :hover {
        background: #444;
        color: #fff;
      }
      @media screen and (max-width: 800px) {
        width: 40vw;
        height: 40vw;
        margin: 2.5vw;
      }
    }
  }
`;

export default ShortHouses;
