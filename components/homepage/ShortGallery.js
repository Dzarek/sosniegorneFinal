import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Link from "next/link";
import { gallery } from "../../data";
import { useGlobalContext } from "../context";

const ShortGallery = () => {
  const { plLanguage } = useGlobalContext();

  return (
    <Wrapper>
      <div className="carouselContainer">
        <Carousel
          className="carousel"
          infinite
          autoPlay={1500}
          animationSpeed={1000}
          slidesPerPage={4}
          breakpoints={{
            900: {
              slidesPerPage: 2,
            },
          }}
          draggable={false}
        >
          {gallery.map((item, index) => {
            return <img key={index} src={item} alt="" />;
          })}
        </Carousel>
        <Carousel
          className="carousel"
          infinite
          autoPlay={1500}
          animationSpeed={1000}
          slidesPerPage={4}
          breakpoints={{
            900: {
              slidesPerPage: 2,
            },
          }}
          draggable={false}
          rtl={true}
        >
          {gallery
            .slice(0)
            .reverse()
            .map((item, index) => {
              return <img key={index} src={item} alt="" />;
            })}
        </Carousel>
        <Link href="/zdjecia">
          <p className="linkToGallery">
            {plLanguage ? "Zobacz galerie zdjęć" : "View photo gallery"}
          </p>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--secondaryColor0);
  width: 82vw;
  margin-left: 18vw;
  padding: 10vh 5vw 5vh;
  position: relative;
  @media screen and (max-width: 800px) {
    width: 100vw;
    margin-left: 0vw;
    padding: 2vh 2vw;
  }

  .carouselContainer {
    position: relative;
    margin-top: -5vh;
    @media screen and (max-width: 800px) {
      margin-top: 0vh;
    }
    .carousel {
      width: 90%;
      margin: 1.5vh auto;
      img {
        width: 15vw;
        height: 15vw;
        object-fit: cover;
        opacity: 0.5;
        @media screen and (max-width: 800px) {
          width: 35vw;
          height: 35vw;
        }
      }
    }
    .linkToGallery {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      background: white;
      background: var(--thirdColor);
      padding: 10px 20px;
      font-family: var(--navFont);
      font-weight: 500;
      font-size: 1.3rem;
      text-transform: uppercase;
      color: #222;
      cursor: pointer;
      transition: 0.5s;
      border: 2px solid var(--thirdColor);
      text-align: center;
      :hover {
        background-color: #222;
        color: white;
      }
      @media screen and (max-width: 800px) {
        font-size: 1.1rem;
        width: 70vw;
        padding: 10px 10px;
      }
    }
  }
`;

export default ShortGallery;
