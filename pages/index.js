import Head from "next/head";

import Header from "../components/homepage/Header";
import AboutUs from "../components/homepage/AboutUs";
import ShortHouses from "../components/homepage/ShortHouses";
import ShortGallery from "../components/homepage/ShortGallery";
import ShortAttraction from "../components/homepage/ShortAttraction";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Całoroczne domki z jacuzzi do wynajęcia | Sośnie Górne Resort & SPA
        </title>
        <meta
          name="description"
          content="Domki z jacuzzi do wynajęcia. Nowoczesne, komfortowe i całoroczne domki do wynajęcia. Domki z prywatnym jacuzzi, tarasem, grillem oraz darmowym WiFi – Sprawdź."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
      </Head>
      <div>
        <Header />
        <AboutUs />
        <ShortHouses />
        <ShortGallery />
        <ShortAttraction />
      </div>
    </>
  );
}
