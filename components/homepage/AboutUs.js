import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useGlobalContext } from "../context";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

// const homeUndraw1 = "/images/home/homeUndraw5.jpg";
const homeUndraw1 = "/images/home/w-07.jpg";
const mobileBg = "/images/home/mobileAboutBg.png";

const AboutUs = () => {
  const { plLanguage } = useGlobalContext();
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "false" });
  }, []);
  return (
    <>
      <Wrapper>
        <div className="bg"></div>
        <img
          src={homeUndraw1}
          alt=""
          data-aos="fade-left"
          className="homeImg"
        />
        <section>
          <h2>{plLanguage ? "O nas" : "About Us"}</h2>
          <h1 className="aboutUsSubtitle">
            {plLanguage
              ? "Domki z jacuzzi do wynajęcia."
              : "Houses with jacuzzi for rent."}
          </h1>
          {plLanguage ? (
            <p>
              Sośnie Górne Resort &amp; Spa to jest to czego szukasz aby pobyć z
              dala od domu, a jednocześnie poczuć się jak w domu. Cisza, spokój
              i otoczenie wspaniałej przyrody oraz przepiękne widoki pozwolą
              Tobie i Twoim bliskim odpocząć od codziennej rutyny.
            </p>
          ) : (
            <p>
              Sośnie Górne Resort &amp; Spa is what you are looking for to be
              with away from home and feel at home at the same time. Peace and
              quiet and surrounded by wonderful nature and beautiful views will
              allow you and your loved ones to take a break from the daily
              routine.
            </p>
          )}
        </section>
      </Wrapper>
      <Wrapper2>
        <h4 className="opinionTitle">
          {plLanguage
            ? "Sprawdź, co piszą o nas nasi goście!"
            : "What our guests say about us?"}
        </h4>
        <Carousel
          className="carousel"
          infinite
          autoPlay={1500}
          animationSpeed={1000}
          slidesPerPage={1}
          draggable={false}
        >
          <a
            href="https://www.airbnb.pl/rooms/847582399728857550/reviews"
            target="_blank"
          >
            <img
              src="/images/reservation/airbnb-opinie.jpg"
              alt="Nasze opinie na Airbnb.com"
            />
          </a>
          <a
            href="https://alohacamp.com/pl/property/sosnie-gorne-resort-andamp-spa-1335"
            target="_blank"
          >
            <img
              src="/images/reservation/alohacamp-opinie.jpg"
              alt="Nasze opinie na Alohacamp.com"
              className="imgSmall"
            />
          </a>
          <a
            href="https://www.booking.com/hotel/pl/sosnie-gorne-resort-spa.pl.html#tab-reviews"
            target="_blank"
          >
            <img
              src="/images/reservation/booking-opinie.jpg"
              alt="Nasze opinie na Booking.com"
              className="imgSmall"
            />
          </a>
          <a href="https://maps.app.goo.gl/6KJxZnjg9ZmWJ3Wp7" target="_blank">
            <img
              src="/images/reservation/google-opinie.jpg"
              alt="Nasze opinie w Google Maps"
            />
          </a>
        </Carousel>
      </Wrapper2>
    </>
  );
};

const Wrapper = styled.div`
  width: 82vw;
  margin-left: 18vw;
  margin-top: 5vh;
  padding: 8vh 5vw 10vh;
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 100vw;
    margin-left: 0vw;
    padding: 3vh 5vw 7vh;
    margin-top: 0vh;
    margin-bottom: 3vh;
  }
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(${mobileBg});
    background-size: cover;
    opacity: 0.08;
    @media screen and (min-width: 801px) {
      display: none;
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
        margin-bottom: 5vh;
        margin-top: 5vh;
        font-size: 2rem;
        letter-spacing: 3px;
      }
      .aboutUsSubtitle {
        font-size: 1.2rem;
        margin-bottom: 2vh;
      }
      p {
        font-size: 1.1rem;
        width: 90%;
        margin: 0 auto;
      }
    }
  }
  .homeImg {
    width: 28vw;
    height: 65vh;
    object-fit: cover;
    margin-right: 5vw;
    box-shadow: -2px 2px 5px 0px var(--secondaryColor);
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
`;

const Wrapper2 = styled.div`
  @media screen and (min-width: 801px) {
    display: none;
  }
  background-color: white;
  padding: 3vh 2vw;
  width: 100vw;
  position: relative;
  .carousel {
    width: 100vw;
    margin: 2vh auto;
    a {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 60%;
      }
      .imgSmall {
        width: 90%;
      }
      :nth-child(2) {
        width: 80%;
      }
    }
    @media screen and (min-width: 801px) {
      display: none;
    }
  }
  .opinionTitle {
    margin: 3vh auto 1vh;
    font-size: 1.1rem;
    text-align: center;
    width: 90vw;
  }
`;

export default AboutUs;
