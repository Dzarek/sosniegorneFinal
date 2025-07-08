import "../styles/globals.css";
import { useState } from "react";
import { AppProvider } from "../components/context";
import Navbar from "../components/Navbar";
import BookingRoom from "../components/BookingRoom";
import Footer from "../components/Footer";
import CookieAccept from "../components/CookieAccept";
import Cookie from "../components/RodoCookies";

import Script from "next/script";

// PIXEL;
import { useEffect } from "react";
import { useRouter } from "next/router";
import AccessibilityWidget from "../components/AccessibilityWidget";
// PIXEL;

function MyApp({ Component, pageProps }) {
  const [visibleCookie, setVisibleCookie] = useState(false);

  // PIXEL;
  const router = useRouter();
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(process.env.NEXT_PUBLIC_PIXEL_SERVICE); // facebookPixelId
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);

  // PIXEL;

  return (
    <div className="app">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC}');
        `}
      </Script>
      <AppProvider>
        <AccessibilityWidget />
        <Navbar />
        <BookingRoom />
        <Component {...pageProps} />
        <Footer />
        <CookieAccept setVisibleCookie={setVisibleCookie} />
        {visibleCookie && <Cookie setVisibleCookie={setVisibleCookie} />}
      </AppProvider>
    </div>
  );
}

export default MyApp;
