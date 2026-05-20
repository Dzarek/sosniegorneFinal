import fsPromises from "fs/promises";
import path from "path";

import Head from "next/head";
import Header from "../components/homepage/Header";
import AboutUs from "../components/homepage/AboutUs";
import ShortHouses from "../components/homepage/ShortHouses";
import ShortGallery from "../components/homepage/ShortGallery";
import ShortAttraction from "../components/homepage/ShortAttraction";
import KPO from "../components/homepage/KPO";
import Opinions from "../components/Opinions";

export default function Home({ dataPrice, dataOpinions, dataOpinionsDate }) {
  const { sezonNiski } = dataPrice;

  return (
    <>
      <Head>
        <title>Domki z jacuzzi do wynajęcia | Sośnie Górne Resort & SPA</title>
        <meta
          name="description"
          content="Domki z jacuzzi do wynajęcia. Nowoczesne, komfortowe i całoroczne domki do wynajęcia. Domki z prywatnym jacuzzi, tarasem, grillem – Sprawdź."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
        <meta
          property="og:title"
          content="Domki z jacuzzi do wynajęcia | Sośnie Górne Resort & SPA"
        />
        <meta
          property="og:description"
          content="Nowoczesne, komfortowe domki z prywatnym jacuzzi – Zarezerwuj już dziś!"
        />
        <meta
          property="og:image"
          content="https://sosniegorne.pl/logo192.png"
        />
        <meta property="og:url" content="https://sosniegorne.pl/" />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <Header />
        <AboutUs price={sezonNiski.price1 || 650} />
        <ShortHouses />
        <ShortGallery />
        <ShortAttraction />
        <Opinions
          dataOpinionsDate={dataOpinionsDate}
          dataOpinions={dataOpinions}
        />
        <KPO />
      </div>
    </>
  );
}

export async function getStaticProps() {
  let dataPrice;
  let dataOpinions;
  let dataOpinionsDate;
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const localData = JSON.parse(jsonData);

  try {
    const res = await fetch(
      "https://sosniegornedata-fee8c-default-rtdb.europe-west1.firebasedatabase.app/price.json",
    );
    dataPrice = await res.json();

    const resReviews = await fetch(
      "https://sosniegornedata-fee8c-default-rtdb.europe-west1.firebasedatabase.app/reviews.json",
    );
    dataOpinions = await resReviews.json();

    const resReviewsDate = await fetch(
      "https://sosniegornedata-fee8c-default-rtdb.europe-west1.firebasedatabase.app/reviewsDate.json",
    );
    dataOpinionsDate = await resReviewsDate.json();
  } catch (error) {
    dataPrice = localData.price;
    dataOpinions = localData.reviews;
    dataOpinionsDate = localData.reviewsDate;
  }

  return {
    props: {
      dataPrice,
      dataOpinions,
      dataOpinionsDate,
    },
    revalidate: 60,
  };
}
