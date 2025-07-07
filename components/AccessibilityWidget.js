"use client";

import { useEffect, useState } from "react";
import { useGlobalContext } from "./context";

import styled from "styled-components";
import {
  FaUniversalAccess,
  FaTextHeight,
  FaLink,
  FaPauseCircle,
  FaImage,
} from "react-icons/fa";
import { MdContrast } from "react-icons/md";
import { MdNightlightRound } from "react-icons/md";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { MdOutlineFormatLineSpacing } from "react-icons/md";
import { TbLetterCaseUpper } from "react-icons/tb";

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [bigText, setBigText] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [pauseAnimations, setPauseAnimations] = useState(false);
  const [hideImages, setHideImages] = useState(false);
  const [dyslexia, setDyslexia] = useState(false);
  const [lineSpacing, setLineSpacing] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [reading, setReading] = useState(false);

  const { plLanguage, setLogoInvert, logoInvert } = useGlobalContext();

  useEffect(() => {
    document.body.classList.toggle("a11y-contrast", contrast);
    document.body.classList.toggle("a11y-big-text", bigText);
    document.body.classList.toggle("a11y-links", highlightLinks);
    document.body.classList.toggle("a11y-pause", pauseAnimations);
    document.body.classList.toggle("a11y-hide-images", hideImages);
    document.body.classList.toggle("a11y-dyslexia", dyslexia);
    document.body.classList.toggle("a11y-spacing", lineSpacing);
    document.body.classList.toggle("a11y-dark", darkMode);
  }, [
    contrast,
    bigText,
    highlightLinks,
    pauseAnimations,
    hideImages,
    dyslexia,
    lineSpacing,
    darkMode,
  ]);

  const handleRead = () => {
    const selection = window.getSelection()?.toString();
    const text = selection || document.body.innerText.slice(0, 500);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pl-PL";
    speechSynthesis.speak(utterance);
    setReading(true);
    utterance.onend = () => setReading(false);
  };

  return (
    <Container>
      <FloatingButton onClick={() => setOpen(!open)}>
        <FaUniversalAccess />
      </FloatingButton>

      {open && (
        <Panel className="a11y-widget">
          <Header>
            <h3>
              {plLanguage ? "Menu Dostępności WWW" : "Web Accessibility Menu"}
            </h3>
            <Close onClick={() => setOpen(false)}>×</Close>
          </Header>

          <Grid>
            <Button
              className={contrast ? "activeWidget" : ""}
              active={contrast}
              onClick={() => {
                setLogoInvert(!logoInvert);
                setContrast(!contrast);
              }}
            >
              <MdContrast />
              {plLanguage ? "Kontrast +" : "Contrast +"}
            </Button>
            {reading ? (
              <Button
                onClick={() => {
                  speechSynthesis.cancel();
                  setReading(false);
                }}
                className="activeWidget"
              >
                <HiOutlineSpeakerWave />
                {plLanguage ? "Zatrzymaj czytanie" : "Stop reading"}
              </Button>
            ) : (
              <Button onClick={handleRead}>
                <HiOutlineSpeakerWave />
                {plLanguage ? "Czytaj stronę" : "Read the page"}
              </Button>
            )}
            <Button
              className={darkMode ? "activeWidget" : ""}
              active={darkMode}
              onClick={() => setDarkMode(!darkMode)}
            >
              <MdNightlightRound />
              {plLanguage ? "Tryb nocny" : "Dark mode"}
            </Button>
            <Button
              active={highlightLinks}
              className={highlightLinks ? "activeWidget" : ""}
              onClick={() => setHighlightLinks(!highlightLinks)}
            >
              <FaLink />
              {plLanguage ? "Podświetlenie linków" : "Link highlighting"}
            </Button>
            <Button
              className={bigText ? "activeWidget" : ""}
              active={bigText}
              onClick={() => setBigText(!bigText)}
            >
              <FaTextHeight />
              {plLanguage ? "Duży tekst" : "Large text"}
            </Button>
            <Button
              active={lineSpacing}
              className={lineSpacing ? "activeWidget" : ""}
              onClick={() => setLineSpacing(!lineSpacing)}
            >
              <MdOutlineFormatLineSpacing />
              {plLanguage ? "Odstępy tekstu" : "Text spacing"}
            </Button>
            <Button
              className={pauseAnimations ? "activeWidget" : ""}
              active={pauseAnimations}
              onClick={() => setPauseAnimations(!pauseAnimations)}
            >
              <FaPauseCircle />
              {plLanguage ? "Zatrzymaj animacje" : "Stop animations"}
            </Button>
            <Button
              className={hideImages ? "activeWidget" : ""}
              active={hideImages}
              onClick={() => setHideImages(!hideImages)}
            >
              <FaImage />
              {plLanguage ? "Ukryj obrazy" : "Hide images"}
            </Button>
            <Button
              className={dyslexia ? "activeWidget" : ""}
              active={dyslexia}
              onClick={() => setDyslexia(!dyslexia)}
            >
              <TbLetterCaseUpper />
              {plLanguage ? "Dysleksja" : "Dyslexia"}
            </Button>
          </Grid>
        </Panel>
      )}
    </Container>
  );
}

// === Styled Components ===

const Container = styled.div`
  position: fixed;
  bottom: 1.5vh;
  right: 1vw;
  z-index: 999999999;
  @media screen and (max-width: 800px) {
    bottom: 1.5vh;
    right: 2vw;
    /* left: 2vw; */
  }
`;

const FloatingButton = styled.button`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: var(--secondaryColor);
  color: white;
  font-size: 24px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--secondaryColor2);
  }
  @media screen and (max-width: 800px) {
    width: 40px;
    height: 40px;
  }
`;

const Panel = styled.div`
  position: absolute;
  bottom: 9vh;
  right: 0;
  width: 320px;
  background: white;
  color: black;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  padding: 16px;
  @media screen and (max-width: 800px) {
    bottom: 9vh;
    right: calc(100% - 20px);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 12px;

  h3 {
    font-size: 16px;
    margin: 0;
    color: var(--secondaryColor3);
  }
`;

const Close = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-size: 12px;
  text-align: center;
  cursor: pointer;

  svg {
    font-size: 20px;
    margin-bottom: 4px;
  }

  @media screen and (min-width: 801px) {
    &:hover {
      background-color: #dbeafe;
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
