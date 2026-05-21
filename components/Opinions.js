import { useState, useMemo } from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import { useGlobalContext } from "./context";
import "react-multi-carousel/lib/styles.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

// Funkcja mieszająca tablicę (Algorytm Fisher-Yates)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <ArrowButton className="left" onClick={onClick} aria-label="Previous">
      <IoIosArrowDropleftCircle />
    </ArrowButton>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <ArrowButton className="right" onClick={onClick} aria-label="Next">
      <IoIosArrowDroprightCircle />
    </ArrowButton>
  );
};

// Pojedyncza karta opinii
const CardOpinion = ({ item, plLanguage }) => {
  const { author, text, rating, maxRating, source, date, textEn } = item;
  const [isExpanded, setIsExpanded] = useState(false);

  const currentText = plLanguage ? text : textEn || text;
  const isTranslated = !plLanguage && item.textEn;

  const WORD_LIMIT = 25;
  const words = currentText.split(" ");
  const isLongReview = words.length > WORD_LIMIT;

  const displayedText =
    isLongReview && !isExpanded
      ? words.slice(0, WORD_LIMIT).join(" ") + "..."
      : currentText;

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
  const [isHovered, setIsHovered] = useState(false);

  const mixedReviews = useMemo(
    () => shuffleArray(dataOpinions),
    [dataOpinions],
  );

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1301 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1300, min: 901 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1,
    },
  };

  return (
    <Wrapper>
      <h2 className="opinionTitle">
        {plLanguage
          ? "Sprawdź, co piszą o nas nasi goście!"
          : "What our guests say about us?"}
      </h2>

      <div className="slider-container">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={!isHovered}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          pauseOnHover={true}
          slidesToSlide={1}
          itemClass="carousel-item-padding"
          containerClass="carouselClass"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {mixedReviews.map((item) => (
            <SlideInner
              key={item.id}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <CardOpinion item={item} plLanguage={plLanguage} />
            </SlideInner>
          ))}
        </Carousel>
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
  margin-top: 2vh;
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
    position: relative;

    .carousel-item-padding {
      padding-bottom: 60px;
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

const ArrowButton = styled.button`
  position: absolute;
  bottom: 15px;
  z-index: 20;

  width: 40px;
  height: 40px;
  border-radius: 50%;

  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(0, 0, 0, 0.45);

  color: white;
  font-size: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  backdrop-filter: blur(6px);

  transition:
    transform 0.2s ease,
    background 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    transform: scale(1.08);
  }

  &.left {
    left: calc(50% - 70px);
  }

  &.right {
    right: calc(50% - 70px);
  }

  @media screen and (max-width: 900px) {
    /* bottom: -65px; */

    &.left {
      left: calc(50% - 55px);
    }

    &.right {
      right: calc(50% - 55px);
    }
  }
`;

export default Opinions;
