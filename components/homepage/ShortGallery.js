import styled from "styled-components";
import Carousel from "react-multi-carousel";
import Link from "next/link";
import Image from "next/image";
import { gallery } from "../../data";
import { useGlobalContext } from "../context";

import "react-multi-carousel/lib/styles.css";

const ShortGallery = () => {
  const { plLanguage } = useGlobalContext();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 901 },
      items: 4,
    },
    tabletAndMobile: {
      breakpoint: { max: 900, min: 0 },
      items: 2,
    },
  };

  return (
    <Wrapper>
      <div className="carouselContainer">
        {/* PIERWSZY RZĄD */}
        <div className="carousel-wrapper">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1500}
            arrows={false}
            draggable={false}
            swipe={false}
            ssr={true}
          >
            {gallery.map((item, index) => (
              <div key={item} className="slide-item">
                <div className="image-wrapper">
                  <Image
                    src={item}
                    alt={`zdjęcie ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* DRUGI RZĄD - ODWRÓCONY */}
        <div className="carousel-wrapper">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1500}
            arrows={false}
            draggable={false}
            swipe={false}
            ssr={true}
            rtl={true}
          >
            {[...gallery].reverse().map((item, index) => (
              <div key={item} className="slide-item">
                <div className="image-wrapper">
                  <Image
                    src={item}
                    alt={`zdjęcie ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <Link href="/zdjecia" passHref legacyBehavior>
          <p className="linkToGallery">
            {plLanguage ? "Zobacz galerię zdjęć" : "View photo gallery"}
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
    margin-left: 0;
    padding: 2vh 2vw;
  }

  .carouselContainer {
    position: relative;
    margin-top: -5vh;

    @media screen and (max-width: 800px) {
      margin-top: 0;
    }

    .carousel-wrapper {
      width: 90%;
      margin: 15px auto;
    }

    .slide-item {
      padding: 0 10px;
      box-sizing: border-box;
    }

    .image-wrapper {
      position: relative;
      width: 100%;
      aspect-ratio: 1 / 1;
      overflow: hidden;
    }

    .image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.5;
      display: block;
    }

    .linkToGallery {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
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
      margin: 0;

      &:hover {
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
