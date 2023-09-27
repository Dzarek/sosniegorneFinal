import styled from "styled-components";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useGlobalContext } from "../context";

const bikeUndraw = "/images/home/attractions/1.png";
const winterUndraw = "/images/home/attractions/2.png";
const restaurantUndraw = "/images/home/attractions/3.png";

const ShortFaqRegulations = () => {
  const { plLanguage } = useGlobalContext();

  useEffect(() => {
    Aos.init({ duration: 1000, disable: "false" });
  }, []);
  return (
    <Wrapper>
      <div className="content">
        <section>
          <h2>{plLanguage ? "Okoliczne Atrakcje" : "Nearby attractions"}</h2>
          {plLanguage ? (
            <p>
              W Grybowie i okolicznych miejscowościach można znaleźć wiele
              atrakcyjnych miejsc. Teren Beskidu Niskiego oferuje różnorodne
              szlaki do uprawiania turystyki pieszej, rowerowej i konnej. W
              niedalekiej odległości od naszych domków znajdują się również
              wyciągi narciarskie, aquaparki oraz muzea i miejsca historyczne.
              Polecamy także okoliczne restauracje, bary i pizzerie gdzie można
              dobrze zjeść i miło spędzić czas.
            </p>
          ) : (
            <p>
              You can find a lot interesting places in Grybów and in nearby
              towns. The area of the Low Beskids offers many options for hiking,
              cycling and horse riding. In a short distance from our cottages
              are also located ski lifts, water parks, museums and historical
              places. We also recommend nearby restaurants, bars and pizzerias
              where you can eat well and have a good time.
            </p>
          )}
          <Link href="/okoliczne-atrakcje">
            <button className="link">
              {plLanguage
                ? "zobacz polecane atrakcje"
                : "see recommended attractions"}
            </button>
          </Link>
        </section>
        <div className="imageContainer">
          <img data-aos="fade-left" src={bikeUndraw} alt="" />
          <img
            data-aos="fade-right"
            className="img2"
            src={winterUndraw}
            alt=""
          />
          <img data-aos="fade-left" src={restaurantUndraw} alt="" />
        </div>
        <div className="imageContainerM">
          <img data-aos="fade-right" src={bikeUndraw} alt="" />
          <img data-aos="fade-up" className="img2" src={winterUndraw} alt="" />
          <img data-aos="fade-left" src={restaurantUndraw} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 82vw;
  margin-left: 18vw;
  padding: 3vh 5vw 13vh;
  position: relative;
  background: #f7f7f7;
  @media screen and (max-width: 800px) {
    padding: 3vh 5vw 10vh;
    width: 100vw;
    margin-left: 0vw;
  }
  .content {
    width: 100%;
    margin-top: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 800px) {
      flex-direction: column;
      position: relative;
      margin-top: 2vh;
    }
  }
  section {
    width: 35vw;
    text-align: left;
    margin-right: 5vw;
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
      width: 100%;
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.5;
    }
    .link {
      padding: 10px 20px;
      background: var(--secondaryColor);
      color: #fff;
      font-size: 1.2rem;
      font-weight: 500;
      font-family: var(--navFont);
      cursor: pointer;
      border: 2px solid var(--secondaryColor);
      transition: 0.5s;
      text-transform: uppercase;
      text-align: center;
      margin: 5vh auto;
      display: block;
      :hover {
        background-color: #fff;
        color: #222;
      }
    }
    @media screen and (max-width: 800px) {
      width: 100%;
      text-align: center;
      margin-right: 0vw;
      h2 {
        margin-top: 5vh;
        font-size: 2rem;
        letter-spacing: 3px;
        margin-bottom: 5vh;
      }
      p {
        font-size: 1.1rem;
        width: 100%;
        margin: 0 auto;
      }
      .link {
        font-size: 1rem;
        margin-top: 24vh;
      }
    }
  }
  .imageContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      height: 25vh;
      margin-right: 14vw;
      :nth-child(1) {
        margin-bottom: -3vh;
      }
    }
    .img2 {
      margin-right: -18vw;
      margin-top: -3vh;
    }
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
  .imageContainerM {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    bottom: 16vh;
    left: 50%;
    transform: translateX(-50%);
    img {
      height: auto;
      width: 28vw;
      margin-right: 0;

      :nth-child(1) {
        margin-bottom: 0vh;
        width: 18vw;
        margin-right: 10vw;
      }
    }
    .img2 {
      margin-right: 0vw;
      margin-top: 0vh;
    }
    @media (min-width: 500px) and (max-width: 800px) {
      img {
        height: auto;
        width: 20vw;
        margin-right: 0;

        :nth-child(1) {
          margin-bottom: 0vh;
          width: 15vw;
          margin-right: 10vw;
        }
      }
    }
    @media screen and (min-width: 801px) {
      display: none;
    }
  }
`;

export default ShortFaqRegulations;
