import fsPromises from "fs/promises";
import path from "path";

import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useGlobalContext } from "../components/context";
import Head from "next/head";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
// import { questions } from "../data";
import { MdExpandMore } from "react-icons/md";

const questionImg = "/images/faq/faqPixabay.png";

const Faq = ({ data: questions }) => {
  const { plLanguage } = useGlobalContext();

  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);

  return (
    <>
      <Head>
        <title>Często zadawane pytania | Sośnie Górne Resort & SPA</title>
        <meta
          name="description"
          content="Tutaj znajdziesz odpowiedzi na najczęściej zadawane pytania naszych gości. Jak dokonać rezerwacji? Czy można przyjechać ze zwierzętami? I inne…"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
        <meta property="og:image" content="/logo192.png" />
      </Head>
      <Wrapper className="mainPage">
        <div className="title">
          <div className="titleLine2"></div>
          <h2>
            {plLanguage
              ? "Najczęściej zadawane pytania"
              : "Frequently Asked Questions"}
          </h2>
          <div className="titleLine2"></div>
        </div>
        <div className="content">
          <img src={questionImg} alt="" data-aos="flip-right" />
          <Accordion allowZeroExpanded={true}>
            {questions.map((oneInfo) => {
              const { title, info, id, titleEN, infoEN } = oneInfo;
              return (
                <AccordionItem
                  key={id}
                  className="singleQuestion"
                  data-aos="fade-up"
                >
                  <div>
                    <header>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <h3>
                            <button type="button" className="btn">
                              <MdExpandMore />
                            </button>
                            {plLanguage ? title : titleEN}
                          </h3>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                    </header>
                    <AccordionItemPanel>
                      <p>{plLanguage ? info : infoEN}</p>
                    </AccordionItemPanel>
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
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
      width: 50vw;
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
    .titleLine2 {
      background: var(--secondaryColor);
      height: 2px;
      width: 0;
      animation: growLine2 3s ease 1 forwards;
      @keyframes growLine2 {
        100% {
          width: 11vw;
        }
      }
      @media screen and (max-width: 800px) {
        @keyframes growLine2 {
          100% {
            width: 20vw;
          }
        }
      }
    }
  }
  .content {
    width: 70vw;
    margin: 0 auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 15vh;
    @media screen and (max-width: 800px) {
      width: 95vw;
      flex-direction: column;
      margin: 5vh auto 0;
      align-items: center;
    }
    img {
      width: 10vw;
      margin: 3vh auto 5vh;
      @media screen and (max-width: 800px) {
        width: 20vw;
      }
    }

    .accordion__panel {
      animation: fadein 0.5s ease-in;
      overflow: hidden;
    }
    @keyframes fadein {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    .btn {
      background: transparent;
      border: none;
      font-size: 2rem;
      color: white;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: 0.4s;
      margin-right: 10px;
      margin-left: 10px;
      @media screen and (max-width: 800px) {
        font-size: 1.8rem;
        margin-left: 0px;
      }
      :hover {
        color: var(--secondaryColor0);
      }
    }

    .singleQuestion {
      margin: 2vh auto;
      width: 50vw;
      background: #fff;
      border-radius: 5px;
      border: 2px solid var(--secondaryColor2);
      padding: 2px;

      @media screen and (max-width: 800px) {
        width: 90vw;
      }
      p {
        margin: 2vh auto;
        font-family: var(--textFont);
        font-size: 1.1rem;
        font-weight: 400;
        padding: 20px 25px;
        line-height: 1.5;
        @media screen and (max-width: 800px) {
          text-align: justify;
          line-height: 1.4;
          font-size: 1.1rem;
          font-weight: 500;
          margin: 1vh auto;
          padding: 10px 15px;
        }
      }
    }

    header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-shrink: 0;
      background: var(--footerBgColor);
      color: white;
      padding: 15px 15px;

      h3 {
        display: flex;
        align-items: center;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        width: 50vw;
        @media screen and (max-width: 800px) {
          font-size: 1.1rem;
          width: 100%;
        }
      }
    }
  }
`;

export async function getStaticProps() {
  let data;
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const localData = JSON.parse(jsonData);

  try {
    const res = await fetch(
      "https://sosniegornedata-fee8c-default-rtdb.europe-west1.firebasedatabase.app/questions.json"
    );
    data = await res.json();
  } catch (error) {
    data = localData.questions;
  }

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

export default Faq;
