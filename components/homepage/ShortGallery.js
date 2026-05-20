import styled from "styled-components";
import Slider from "react-slick";
import Link from "next/link";
import { gallery } from "../../data";
import { useGlobalContext } from "../context";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShortGallery = () => {
  const { plLanguage } = useGlobalContext();

  const baseSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    draggable: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const reverseSettings = {
    ...baseSettings,
    rtl: true,
  };

  return (
    <Wrapper>
      <div className="carouselContainer">
        {/* PIERWSZY RZĄD (Standardowy) */}
        <div className="carousel-wrapper">
          <Slider {...baseSettings}>
            {gallery.map((item, index) => (
              <div key={index} className="slide-item">
                <img src={item} alt="" />
              </div>
            ))}
          </Slider>
        </div>

        {/* DRUGI RZĄD (Odwrócony) */}
        <div className="carousel-wrapper">
          <Slider {...reverseSettings}>
            {gallery
              .slice(0)
              .reverse()
              .map((item, index) => (
                <div key={index} className="slide-item">
                  <img src={item} alt="" />
                </div>
              ))}
          </Slider>
        </div>

        <Link href="/zdjecia" passHref legacyBehavior>
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

    .carousel-wrapper {
      width: 90%;
      margin: 15px auto;
    }

    .slide-item {
      padding: 0 10px;
      box-sizing: border-box;
    }

    img {
      width: 100%;
      height: 15vw;
      object-fit: cover;
      opacity: 0.5;
      display: block;

      @media screen and (max-width: 800px) {
        height: 35vw;
      }
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
