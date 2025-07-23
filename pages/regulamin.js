import fsPromises from "fs/promises";
import path from "path";

import styled from "styled-components";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../components/context";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
// import { regulationShort, regulationFull } from "../data";

const reqImg = "/images/regulations/regPixabay.png";

const Regulations = ({ regulationShort, regulationFull }) => {
  const { plLanguage } = useGlobalContext();

  useEffect(() => {
    Aos.init({ duration: 1000, disable: "false" });
  }, []);
  const [activeReg, setActiveReg] = useState(null);

  const handleShortReg = () => {
    setActiveReg("short");
  };
  const handleFullReg = () => {
    setActiveReg("full");
  };

  return (
    <>
      <Head>
        <title>Regulamin rezerwacji | Sośnie Górne Resort & SPA</title>
        <meta
          name="description"
          content="Zapoznaj się ze skróconym lub pełnym regulaminem rezerwacji. Pamiętaj, że dokonanie rezerwacji jest jednoznaczne z akceptacją jego postanowień."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
        <meta property="og:image" content="/logo192.png" />
      </Head>
      <Wrapper className="mainPage">
        <div className="title">
          <div className="titleLine3"></div>
          <h2>{plLanguage ? "Regulamin rezerwacji" : "Booking regulations"}</h2>
          <div className="titleLine3"></div>
        </div>
        <div className="regHeader">
          <Link
            to="reg"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-100}
            className={activeReg === "short" && "activeBtn"}
            onClick={handleShortReg}
          >
            {plLanguage ? "Skrócony" : "Short"}
          </Link>
          <BsArrowLeft />
          <img src={reqImg} alt="" className="headerImg" data-aos="fade-up" />
          <BsArrowRight />
          <Link
            to="reg"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-100}
            className={activeReg === "full" && "activeBtn"}
            onClick={handleFullReg}
          >
            {plLanguage ? "Pełny" : "Full"}
          </Link>
        </div>
        {activeReg === "short" ? (
          <div name="reg" className="content">
            <h3>
              {plLanguage ? regulationShort.title : regulationShort.titleEN}{" "}
              <br /> <br />
            </h3>
            <h4>
              {plLanguage
                ? regulationShort.firstInfo
                : regulationShort.firstInfoEN}
            </h4>
            {plLanguage ? (
              <>
                {" "}
                {regulationShort.content.map((info, index) => {
                  return (
                    <p key={index}>
                      <span>{index + 1}.</span> {info}
                    </p>
                  );
                })}
              </>
            ) : (
              <>
                {" "}
                {regulationShort.contentEN.map((info, index) => {
                  return (
                    <p key={index}>
                      <span>{index + 1}.</span> {info}
                    </p>
                  );
                })}
              </>
            )}
          </div>
        ) : (
          <div name="reg"></div>
        )}
        {activeReg === "full" && (
          <div name="reg" className="content">
            <h3>
              {plLanguage ? regulationFull.title : regulationFull.titleEN}{" "}
              <br /> <br />
            </h3>
            <h4>
              {plLanguage
                ? regulationFull.firstInfo
                : regulationFull.firstInfoEN}
            </h4>
            {plLanguage ? (
              <>
                {regulationFull.content.map((oneContent, index) => {
                  const { nr, name, details } = oneContent;
                  return (
                    <div className="oneRule" key={index}>
                      <span className="paragraph">§ {nr}</span>
                      <h4>{name}</h4>
                      {oneContent.mainInfo && <p>{oneContent.mainInfo}</p>}
                      {details.map((info, index) => {
                        return (
                          <p key={index}>
                            <span>{index + 1}.</span> {info}
                          </p>
                        );
                      })}
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {regulationFull.contentEN.map((oneContent, index) => {
                  const { nr, name, details } = oneContent;
                  return (
                    <div className="oneRule" key={index}>
                      <span className="paragraph">§ {nr}</span>
                      <h4>{name}</h4>
                      {oneContent.mainInfo && <p>{oneContent.mainInfo}</p>}
                      {details.map((info, index) => {
                        return (
                          <p key={index}>
                            <span>{index + 1}.</span> {info}
                          </p>
                        );
                      })}
                    </div>
                  );
                })}
              </>
            )}
          </div>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .title {
    margin: 10vh auto 5vh;
    justify-content: space-between;
    @media screen and (max-width: 800px) {
      margin: 5vh auto 5vh;
    }
    h2 {
      border: 2px solid var(--secondaryColor);
      width: 40vw;
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
    .titleLine3 {
      background: var(--secondaryColor);
      height: 2px;
      width: 0;
      animation: growLine3 3s ease 1 forwards;
      @keyframes growLine3 {
        100% {
          width: 16vw;
        }
      }
      @media screen and (max-width: 800px) {
        @keyframes growLine3 {
          100% {
            width: 20vw;
          }
        }
      }
    }
  }
  .regHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70vw;
    margin: 0 auto;
    position: relative;
    @media screen and (max-width: 800px) {
      width: 90vw;
      justify-content: space-between;
    }
    .headerImg {
      width: 11vw;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      @media screen and (max-width: 800px) {
        width: 20vw;
      }
    }
    svg {
      font-size: 3rem;
      :nth-of-type(1) {
        transform: rotate(-45deg);
        margin: 14vh 12vw 0 -3vw;
      }
      :nth-of-type(2) {
        transform: rotate(45deg);
        margin: 14vh -3vw 0 12vw;
      }
      @media screen and (max-width: 800px) {
        position: absolute;
        top: 60%;

        :nth-of-type(1) {
          left: 20%;
          transform: rotate(-45deg);
          margin: 0;
        }
        :nth-of-type(2) {
          right: 20%;
          transform: rotate(45deg);
          margin: 0;
        }
      }
    }
    a {
      margin-top: 38vh;
      font-family: var(--navFont);
      font-size: 1.3rem;
      font-weight: 500;
      text-transform: uppercase;
      padding: 10px 10px;
      width: 200px;
      color: #fff;
      background: var(--footerBgColor);
      cursor: pointer;
      border: none;
      transition: 0.4s;
      text-align: center;
      border: 2px solid var(--footerBgColor);
      display: block;
      @media screen and (max-width: 800px) {
        width: 40vw;
        font-size: 1.2rem;
      }
      :hover {
        background: var(--thirdColor);
        color: var(--footerBgColor);
        border: 2px solid var(--thirdColor);
      }
    }
    .activeBtn {
      border: 2px solid var(--footerBgColor);
      background: var(--thirdColor);
      color: var(--footerBgColor);
    }
  }

  .content {
    width: 85%;
    margin: 2vh auto 15vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: var(--textFont);
    @media screen and (max-width: 800px) {
      width: 90vw;
      margin: 0vh auto 10vh;
    }
    h2,
    h3 {
      margin: 5vh auto;
      align-self: center;
      color: var(--secondaryColor);
      text-align: center;
      width: 100%;
      font-family: var(--headerFont);
      font-size: 1.8rem;
      font-weight: 500;
      @media screen and (max-width: 800px) {
        font-size: 1.6rem;
      }
    }
    .oneRule {
      width: 100%;
    }
    h4 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 5vh;
      text-align: center;
      align-self: center;
      width: 100%;
      line-height: 1.4;
    }
    .paragraph {
      text-align: center;
      font-size: 1.5rem;
      margin: 3vh auto 1vh;
      display: block;
      color: var(--secondaryColor);
    }
    @media screen and (max-width: 800px) {
      h3:nth-last-of-type(1) {
        font-weight: 500;
        font-size: 1.4rem;
      }
    }
    p {
      margin: 1vh auto 1vh 0;
      letter-spacing: 1.3;
      font-size: 1.1rem;
      line-height: 1.5;
      @media screen and (max-width: 800px) {
        text-align: justify;
      }
      span {
        color: var(--secondaryColor2);
        font-weight: 600;
        font-size: 1.3rem;
      }
    }
  }
`;

export async function getStaticProps() {
  let regulationShort;
  let regulationFull;
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const localData = JSON.parse(jsonData);

  try {
    const res = await fetch(
      "https://sosniegornedata-fee8c-default-rtdb.europe-west1.firebasedatabase.app/regulationShort.json"
    );
    regulationShort = await res.json();
    const res2 = await fetch(
      "https://sosniegornedata-fee8c-default-rtdb.europe-west1.firebasedatabase.app/regulationFull.json"
    );
    regulationFull = await res2.json();
  } catch (error) {
    regulationShort = localData.regulationShort;
    regulationFull = localData.regulationFull;
  }

  return {
    props: {
      regulationShort,
      regulationFull,
    },
    revalidate: 60,
  };
}

export default Regulations;
