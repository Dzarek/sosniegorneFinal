import styled from "styled-components";
import { useGlobalContext } from "./context";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";

import {
  MdPhoneAndroid,
  MdEmail,
  MdFacebook,
  MdLocationOn,
} from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

const logoJarek = "/images/logoJarek.png";
const logo = "/images/logo2.png";

const Footer = () => {
  const { plLanguage } = useGlobalContext();
  const router = useRouter();
  return (
    <Wrapper>
      <div
        className={
          router.pathname == "/rezerwacja" ? "fullFooter" : "smallFooter"
        }
      >
        <div className="content">
          <div className="bankDetails">
            <img src={logo} alt="logo" className="logoFooter" />
            {plLanguage ? (
              <p className="cytat">
                Sośnie Górne Resort & SPA oferuje Ci wszystko czego
                potrzebujesz, aby móc cieszyć się zasłużonym odpoczynkiem. Nasze
                domki z jacuzzi położone są w cichej i spokojnej okolicy,
                otoczone wspaniałą naturą. To idealne miejsce na wypoczynek dla
                Ciebie i Twoich bliskich.
              </p>
            ) : (
              <p className="cytat">
                Sośnie Górne Resort & SPA offers you everything you need to
                enjoy your well-deserved rest. Our cottages with jacuzzi are
                located in a quiet and peaceful area, surrounded by wonderful
                nature. It's the perfect place to relax for You and your family.
              </p>
            )}
          </div>
          <div className="usefulLinks">
            <h5 className="footerColTitle">
              {plLanguage ? "Przydatne linki:" : "Useful links:"}
            </h5>
            <ul>
              <li>
                <FaCircle />
                <Link href="/faq">
                  {plLanguage
                    ? "Często zadawane pytania (FAQ)"
                    : "Frequently Asked Questions"}
                </Link>
              </li>
              <li>
                <FaCircle />
                <Link href="/regulamin">
                  {plLanguage
                    ? "Regulamin rezerwacji i pobytu"
                    : "Reservation and stay regulations"}
                </Link>
              </li>
              <li>
                <FaCircle />
                <Link href="/rezerwacja">
                  {plLanguage ? "Rezerwacja online" : "Book now"}
                </Link>
              </li>
              <li>
                <FaCircle />
                <Link href="/domki">{plLanguage ? "Domki" : "Houses"}</Link>
              </li>
              <li>
                <FaCircle />
                <Link href="/na-kolkach">
                  {plLanguage ? "Na Kółkach" : "On Wheels"}
                </Link>
              </li>
              <li>
                <FaCircle />
                <Link href="/polityka-prywatnosci">
                  {plLanguage ? "Polityka Prywatności" : "Privacy Policy"}
                </Link>
              </li>
            </ul>
          </div>
          <div className="socialMediaWrapper">
            <h5 className="footerColTitle">
              {plLanguage ? "Szybki kontakt:" : "Contact:"}
            </h5>
            <a href="tel:+48793373246">
              <MdPhoneAndroid /> <span>+48 793 373 246</span>
            </a>
            <a href="mailto:rezerwacja@sosniegorne.pl">
              <MdEmail /> <span>rezerwacja@sosniegorne.pl</span>
            </a>
            <h4>
              <MdLocationOn />
              <span>Sośnie Górne 37, 33-330 Grybów</span>
            </h4>
            <div className="fbInWrapper">
              <a
                href="https://www.facebook.com/SosnieGorne/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdFacebook />
              </a>
              <a
                href="https://www.instagram.com/sosniegorne/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </div>
          </div>
        </div>

        <p className="allRights">
          <div className="line"></div>
          &copy; {new Date().getFullYear()} Sośnie Górne Resort & SPA.{" "}
          {plLanguage ? "Wszelkie prawa zastrzeżone." : "All rights reserved"}
        </p>
        <span className="logoJarek">
          <p>{plLanguage ? "projekt i wykonanie" : "made by"}</p>
          <a href="https://www.jarekjanas.com">
            <img src={logoJarek} alt="logo Jarosław Janas" />
          </a>{" "}
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  .smallFooter {
    width: 82vw;
    margin-left: 18vw;
    padding: 5vh 3vw;
    background: var(--footerBgColor);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    color: white;
  }
  .fullFooter {
    width: 100vw;
    margin-left: 0vw;
    padding: 5vh 3vw;
    background: var(--footerBgColor);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    color: white;
  }
  @media screen and (max-width: 800px) {
    .smallFooter {
      padding: 5vh 3vw 12vh;
      width: 100vw;
      margin-left: 0vw;
    }
    .fullFooter {
      padding: 5vh 3vw 12vh;
      width: 100vw;
      margin-left: 0vw;
    }
  }
  .content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    position: relative;
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
  }
  .allRights {
    margin-top: 5vh;
    font-family: var(--textFont);
    color: rgba(255, 255, 255, 0.4);
    font-size: 12pt;
    font-weight: 400;
    text-align: center;
    .line {
      width: 90%;
      background: var(--thirdColor);
      height: 2px;
      margin: 0 auto 3vh;
    }
    @media screen and (max-width: 800px) {
      width: 90%;
      .line {
        margin: 0 auto 4vh;
      }
    }
  }
  .footerColTitle {
    color: white;
    text-transform: none;
    font-size: 14pt;
    font-weight: 600;
    margin-bottom: 3vh;
    @media screen and (max-width: 800px) {
      width: 95%;
      text-align: center;
      margin-bottom: 5vh;
    }
  }
  .usefulLinks {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 30%;
    margin-top: 3vh;
    margin-left: 7%;

    ul {
      list-style: none;
      li {
        line-height: 24pt;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        svg {
          font-size: 8pt;
          margin-right: 10px;
        }
        a {
          color: rgba(255, 255, 255, 0.4);
          font-size: 14pt;
          text-decoration: none;
          transition: 0.5s;
          :hover {
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
    @media screen and (max-width: 800px) {
      width: 95%;
      margin: 5vh auto;
      order: 1;
      ul {
        margin-left: 5%;
      }
    }
  }

  .socialMediaWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 30%;
    margin-top: 3vh;

    a,
    h4 {
      margin-bottom: 3vh;
      text-decoration: none;
      color: white;
      display: flex;
      align-items: center;
      transition: 0.5s;
      font-family: var(--headerFont);
      align-self: flex-start;
      @media screen and (max-width: 800px) {
        margin-left: 3vw;
        margin-bottom: 4vh;
      }
      :hover {
        transform: scale(1.1);
      }
      svg {
        flex-shrink: 0;
        color: var(--thirdColor);
        margin-right: 15px;
        font-size: 1.8rem;
      }
    }
    h4 {
      font-size: 12pt;
      font-weight: 400;
    }
    a {
      :nth-of-type(1) {
        font-size: 16pt;
        font-weight: 600;
      }
      :nth-of-type(2) {
        font-size: 14pt;
        font-weight: 600;
      }
    }
    @media screen and (max-width: 800px) {
      width: 95%;
      margin: 5vh auto;
      order: 2;
    }
  }
  h3 {
    margin-bottom: 3vh;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-family: var(--navFont);
    font-weight: 600;
    letter-spacing: 2px;
    text-align: center;
  }

  .fbInWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2vh auto 0;
    width: 35%;
    a {
      svg {
        font-size: 2rem;
      }
    }
    @media screen and (max-width: 800px) {
      margin: 3vh auto 0;
      width: 50%;
      a {
        svg {
          font-size: 2.5rem;
        }
      }
    }
  }

  .bankDetails {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    align-self: center;
    @media screen and (max-width: 800px) {
      width: 95%;
      margin: 0vh auto 5vh;
      order: 3;
    }
    .cytat {
      line-height: 20pt;
      font-size: 12pt;
      align-self: center;
      text-align: center;
      color: rgba(255, 255, 255, 0.4);
      @media screen and (max-width: 800px) {
        font-size: 1rem;
      }
    }
    .logoFooter {
      height: 15vh;
      filter: saturate(0);
      margin-bottom: 1vh;
      @media screen and (max-width: 800px) {
        position: static;
        transform: translate(0);
        align-self: center;
        margin: 5vh auto 2vh;
        order: 1;
        height: 18vh;
      }
    }
  }

  .logoJarek {
    position: absolute;
    bottom: 4%;
    left: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    a {
      width: 25px;
      height: 25px;
      margin-left: 10px;
      img {
        width: 100%;
        height: 100%;
        transition: 0.3s;
        opacity: 0.8;
        :hover {
          filter: invert(100%);
        }
      }
    }
    p {
      font-size: 12px;
      letter-spacing: 1px;
    }
    @media screen and (max-width: 800px) {
      bottom: 2%;
      left: 3%;
    }
  }
`;

export default Footer;
