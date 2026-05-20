import { useState, useMemo } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { useGlobalContext } from "./context";
import { SAMPLE_REVIEWS } from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Funkcja mieszająca tablicę (Algorytm Fisher-Yates)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Pojedyncza karta opinii
const CardOpinion = ({ item, plLanguage }) => {
  const { author, text, rating, maxRating, source, date, textEn } = item;
  const [isExpanded, setIsExpanded] = useState(false);

  const currentText = plLanguage ? text : textEn || text;
  const isTranslated = !plLanguage && item.textEn;
  // Konfiguracja limitu słów
  const WORD_LIMIT = 25;
  const words = currentText.split(" ");
  const isLongReview = words.length > WORD_LIMIT;

  // Przycinanie tekstu, jeśli nie jest rozwinięty
  const displayedText =
    isLongReview && !isExpanded
      ? words.slice(0, WORD_LIMIT).join(" ") + "..."
      : currentText;

  // Renderowanie tekstowych marek w ich oryginalnym brandingu
  const renderBrandLogo = () => {
    switch (source) {
      case "google":
        return (
          <LogoContainer>
            <img src="/images/reservation/google-opinie.png" alt="Google" />
          </LogoContainer>
        );
      case "airbnb":
        return (
          <LogoContainer>
            <img src="/images/reservation/airbnb-opinie.jpg" alt="Airbnb" />
          </LogoContainer>
        );
      case "alohacamp":
        return (
          <LogoContainer>
            <img
              src="/images/reservation/alohacamp-opinie.jpg"
              alt="AlohaCamp"
              className="contain"
            />
          </LogoContainer>
        );
      case "booking":
        return (
          <LogoContainer>
            <span className="bookingText">Booking.com</span>
          </LogoContainer>
        );
      default:
        return null;
    }
  };

  // Renderowanie oceny: pełne + puste gwiazdki lub ułamek dla Booking
  const renderRating = () => {
    if (source === "booking") {
      return (
        <span className="ratingNumber">
          {rating}/{maxRating}
        </span>
      );
    }

    const fullStars = "★".repeat(rating);
    const emptyStars = "☆".repeat(maxRating - rating);

    return (
      <span className="stars">
        {fullStars}
        <span className="emptyStars">{emptyStars}</span>
      </span>
    );
  };

  return (
    <Card>
      <CardTop>
        <AuthorInfo>
          <span className="authorName">{author}</span>
          <span className="date">{date}</span>
        </AuthorInfo>
        <SourceBlock>
          {renderRating()}
          {renderBrandLogo()}
        </SourceBlock>
      </CardTop>

      {/* Kontener tekstu z warunkowym suwakiem */}
      <ReviewTextContainer $scrollable={isExpanded}>
        <p className="reviewText">"{displayedText}"</p>
        {isTranslated && (
          <TranslationNote>*Translated from Polish</TranslationNote>
        )}
      </ReviewTextContainer>

      {isLongReview && (
        <ExpandButton onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded
            ? plLanguage
              ? "Zwiń tekst"
              : "Show less"
            : plLanguage
              ? "Rozwiń opinię"
              : "Read more"}
        </ExpandButton>
      )}
    </Card>
  );
};

// Główny komponent karuzeli
const Opinions = ({ dataOpinionsDate, dataOpinions }) => {
  const { plLanguage } = useGlobalContext();

  const mixedReviews = useMemo(() => shuffleArray(dataOpinions), []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <h2 className="opinionTitle">
        {plLanguage
          ? "Sprawdź, co piszą o nas nasi goście!"
          : "What our guests say about us?"}
      </h2>

      <div className="slider-container">
        <Slider {...settings}>
          {mixedReviews.map((item) => (
            <SlideInner key={item.id}>
              <CardOpinion item={item} plLanguage={plLanguage} />
            </SlideInner>
          ))}
        </Slider>
      </div>

      <FooterNote>
        {plLanguage ? (
          <>
            Prezentowane opinie pochodzą od gości, którzy faktycznie odwiedzili
            nasz obiekt. Weryfikacja rzetelności opinii dokonywana jest przez
            platformy rezerwacyjne. Stan bazy opinii na dzień:{" "}
            {dataOpinionsDate}. Pełną listę możesz sprawdzić bezpośrednio na
            naszych profilach.
          </>
        ) : (
          <>
            The presented reviews come from guests who actually visited our
            property. Verification of the reliability of reviews is carried out
            by booking platforms. Database status as of: {dataOpinionsDate}. You
            can check the full list directly on our profiles.
          </>
        )}
      </FooterNote>
    </Wrapper>
  );
};

// --- STYLED COMPONENTS ---

const SlideInner = styled.div`
  padding: 0 15px;
  box-sizing: border-box;
`;

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;

  margin: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 320px;
  width: 100%;
  box-sizing: border-box;
  backdrop-filter: blur(5px);
  text-align: left;
  position: relative;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  width: 100%;
  height: 50px;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;

  .authorName {
    font-weight: 600;
    font-size: 1.05rem;
    color: white;
  }

  .date {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.4);
    margin-top: 4px;
  }
`;

const SourceBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;

  && .stars {
    color: #fbbf24 !important;
    font-size: 1rem;
    letter-spacing: 1px;

    .emptyStars {
      color: rgba(251, 191, 36, 0.3) !important;
    }
  }

  && .ratingNumber {
    font-size: 0.85rem;
    font-weight: 700;
    background: rgba(255, 255, 255, 0.15);
    padding: 2px 6px;
    border-radius: 4px;
    color: white !important;
  }
`;

const LogoContainer = styled.div`
  width: 90px;
  height: 25px;
  background-color: #ffffff;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .bookingText {
    font-family:
      BlinkMacSystemFont,
      -apple-system,
      Arial,
      sans-serif;
    font-weight: 800;
    color: #003580;
    font-size: 0.7rem;
    letter-spacing: -0.2px;
    white-space: nowrap;
  }
`;

const ReviewTextContainer = styled.div`
  flex: 1;
  margin-bottom: 8px;
  margin-top: 10px;

  overflow-y: ${(props) => (props.$scrollable ? "auto" : "hidden")};
  padding-right: ${(props) => (props.$scrollable ? "6px" : "0px")};

  .reviewText {
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.92rem;
    line-height: 1.6;
    font-style: italic;
    margin: 0;
    white-space: pre-wrap;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const ExpandButton = styled.button`
  background: none;
  border: none;
  color: #aaa;
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  padding: 4px 0;
  margin-top: 4px;
  align-self: flex-start;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const FooterNote = styled.div`
  width: 90%;
  text-align: center;
  margin-top: 4vh;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
  line-height: 1.5;
  max-width: 800px;
`;

const Wrapper = styled.div`
  width: 82vw;
  margin-left: 18vw;
  padding: 8vh 5vw 10vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--opinionBgColor);
  color: white;

  @media screen and (max-width: 800px) {
    width: 100vw;
    margin-left: 0vw;
    padding: 5vh 5vw 5vh;
  }

  .slider-container {
    width: 100%;
    margin-top: 4vh;
    @media screen and (max-width: 900px) {
      margin-bottom: 60px;
    }
  }

  .slick-prev:before,
  .slick-next:before {
    color: #fbbf24;
    font-size: 28px;
    opacity: 0.85;
    transition: opacity 0.2s ease;
  }

  .slick-prev:hover:before,
  .slick-next:hover:before {
    opacity: 1;
  }

  .slick-prev,
  .slick-next {
    z-index: 10;
    width: 35px;
    height: 35px;

    @media screen and (min-width: 901px) {
      &.slick-prev {
        left: -30px;
      }
      &.slick-next {
        right: -30px;
      }
    }

    @media screen and (max-width: 900px) {
      top: auto;
      bottom: -50px;
      transform: none;

      &.slick-prev {
        left: 35%;
      }
      &.slick-next {
        right: 35%;
      }
    }
  }

  .opinionTitle {
    margin: 3vh auto 1vh;
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: 3px;
    font-family: var(--titleFont);
    text-align: center;
    width: 90%;

    @media screen and (max-width: 800px) {
      font-size: 1.4rem;
    }
  }
`;
const TranslationNote = styled.span`
  display: block;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.3);
  font-style: normal;
  margin-top: 6px;
`;

export default Opinions;
