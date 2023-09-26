import fsPromises from "fs/promises";
import path from "path";

import styled from "styled-components";
import Masonry from "react-masonry-css";
import { SRLWrapper } from "simple-react-lightbox";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { useEffect } from "react";
import { useGlobalContext } from "../components/context";
// import { gallery } from "../data";

const Gallery = ({ data }) => {
  const { plLanguage } = useGlobalContext();

  useEffect(() => {
    Aos.init({ duration: 1000, disable: "false" });
  }, []);

  const breakpointColumnsObj = {
    default: 2,
    1440: 2,
    900: 2,
    500: 1,
  };

  return (
    <>
      <Head>
        <title>
          Zdjęcia naszych nowoczesnych i komfortowych domków do wynajęcia
        </title>
        <meta
          name="description"
          content="Zobacz zdjęcia, poznaj układ pomieszczeń oraz warunki pobytu jakie oferują nasze domki z jacuzzi do wynajęcia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
      </Head>
      <Wrapper className="mainPage">
        <div className="title">
          <div className="titleLine"></div>
          <h2>{plLanguage ? "Galeria zdjęć" : "Photo Gallery"}</h2>
          <div className="titleLine"></div>
        </div>
        <div className="galleryContent">
          <SRLWrapper>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {data.map((item, index) => {
                return (
                  <img
                    data-aos="fade-down"
                    className="oneImg"
                    key={index}
                    src={item}
                    alt=""
                  />
                );
              })}
            </Masonry>
          </SRLWrapper>
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
      width: 30vw;
      text-align: center;
      padding: 2vh;
      background: var(--secondaryColor);
      color: #fff;
    }
    @media screen and (max-width: 800px) {
      h2 {
        width: 50vw;
        font-size: 1.5rem;
        padding: 10px 10px;
      }
    }
    .titleLine {
      background: var(--secondaryColor);
      height: 2px;
      width: 0;
      animation: growLine 3s ease 1 forwards;
      @keyframes growLine {
        100% {
          width: 21vw;
        }
      }
      @media screen and (max-width: 800px) {
        @keyframes growLine {
          100% {
            width: 25vw;
          }
        }
      }
    }
  }
  .galleryContent {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    flex-wrap: wrap;
    padding: 5vh 5vw;
    @media screen and (max-width: 800px) {
      padding: 15px 2.5vw;
    }
  }
  .oneImg {
    cursor: pointer;
    transition: 0.2s;
    border: 4px solid #fff;
    :hover {
      border: 4px solid var(--secondaryColor);
    }
  }
  .my-masonry-grid {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
  }

  .my-masonry-grid_column > img {
    background: grey;
    margin: 20px;
    width: 27vw;
    @media screen and (max-width: 800px) {
      width: 95vw;
      margin: 0 auto 10px;
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
      "https://sosniegornedata-fee8c-default-rtdb.europe-west1.firebasedatabase.app/gallery.json"
    );
    data = await res.json();
  } catch (error) {
    data = localData.gallery;
  }

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

export default Gallery;
