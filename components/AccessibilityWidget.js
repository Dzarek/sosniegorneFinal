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
      {" "}
      {/* Przycisk otwierający menu */}{" "}
      <FloatingButton
        type="button"
        aria-label={
          plLanguage ? "Otwórz menu dostępności" : "Open accessibility menu"
        }
        aria-expanded={open}
        aria-controls="accessibility-panel"
        onClick={() => setOpen(!open)}
      >
        {" "}
        <FaUniversalAccess aria-hidden="true" />{" "}
      </FloatingButton>{" "}
      {open && (
        <Panel id="accessibility-panel" className="a11y-widget">
          {" "}
          <Header>
            {" "}
            <h3>
              {" "}
              {plLanguage
                ? "Menu Dostępności WWW"
                : "Web Accessibility Menu"}{" "}
            </h3>{" "}
            {/* Przycisk zamykania */}{" "}
            <Close
              type="button"
              aria-label={
                plLanguage
                  ? "Zamknij menu dostępności"
                  : "Close accessibility menu"
              }
              onClick={() => setOpen(false)}
            >
              {" "}
              <span aria-hidden="true">×</span>{" "}
            </Close>{" "}
          </Header>{" "}
          <Grid>
            {" "}
            {/* KONTRAST */}{" "}
            <Button
              type="button"
              className={contrast ? "activeWidget" : ""}
              active={contrast}
              aria-label={
                plLanguage
                  ? "Włącz lub wyłącz wysoki kontrast"
                  : "Toggle high contrast"
              }
              aria-pressed={contrast}
              onClick={() => {
                setLogoInvert(!logoInvert);
                setContrast(!contrast);
              }}
            >
              {" "}
              <MdContrast aria-hidden="true" />{" "}
              {plLanguage ? "Kontrast +" : "Contrast +"}{" "}
            </Button>{" "}
            {/* CZYTANIE */}{" "}
            {reading ? (
              <Button
                type="button"
                onClick={() => {
                  speechSynthesis.cancel();
                  setReading(false);
                }}
                className="activeWidget"
                aria-label={
                  plLanguage
                    ? "Zatrzymaj czytanie strony"
                    : "Stop reading the page"
                }
                aria-pressed="true"
              >
                {" "}
                <HiOutlineSpeakerWave aria-hidden="true" />{" "}
                {plLanguage ? "Zatrzymaj czytanie" : "Stop reading"}{" "}
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleRead}
                aria-label={
                  plLanguage ? "Czytaj stronę na głos" : "Read the page aloud"
                }
                aria-pressed="false"
              >
                {" "}
                <HiOutlineSpeakerWave aria-hidden="true" />{" "}
                {plLanguage ? "Czytaj stronę" : "Read the page"}{" "}
              </Button>
            )}{" "}
            {/* TRYB NOCNY */}{" "}
            <Button
              type="button"
              className={darkMode ? "activeWidget" : ""}
              active={darkMode}
              aria-label={
                plLanguage ? "Włącz lub wyłącz tryb nocny" : "Toggle dark mode"
              }
              aria-pressed={darkMode}
              onClick={() => setDarkMode(!darkMode)}
            >
              {" "}
              <MdNightlightRound aria-hidden="true" />{" "}
              {plLanguage ? "Tryb nocny" : "Dark mode"}{" "}
            </Button>{" "}
            {/* PODŚWIETLENIE LINKÓW */}{" "}
            <Button
              type="button"
              active={highlightLinks}
              className={highlightLinks ? "activeWidget" : ""}
              aria-label={
                plLanguage
                  ? "Włącz lub wyłącz podświetlenie linków"
                  : "Toggle link highlighting"
              }
              aria-pressed={highlightLinks}
              onClick={() => setHighlightLinks(!highlightLinks)}
            >
              {" "}
              <FaLink aria-hidden="true" />{" "}
              {plLanguage ? "Podświetlenie linków" : "Link highlighting"}{" "}
            </Button>{" "}
            {/* DUŻY TEKST */}{" "}
            <Button
              type="button"
              className={bigText ? "activeWidget" : ""}
              active={bigText}
              aria-label={
                plLanguage ? "Włącz lub wyłącz duży tekst" : "Toggle large text"
              }
              aria-pressed={bigText}
              onClick={() => setBigText(!bigText)}
            >
              {" "}
              <FaTextHeight aria-hidden="true" />{" "}
              {plLanguage ? "Duży tekst" : "Large text"}{" "}
            </Button>{" "}
            {/* ODSTĘPY TEKSTU */}{" "}
            <Button
              type="button"
              active={lineSpacing}
              className={lineSpacing ? "activeWidget" : ""}
              aria-label={
                plLanguage
                  ? "Włącz lub wyłącz większe odstępy tekstu"
                  : "Toggle text spacing"
              }
              aria-pressed={lineSpacing}
              onClick={() => setLineSpacing(!lineSpacing)}
            >
              {" "}
              <MdOutlineFormatLineSpacing aria-hidden="true" />{" "}
              {plLanguage ? "Odstępy tekstu" : "Text spacing"}{" "}
            </Button>{" "}
            {/* ANIMACJE */}{" "}
            <Button
              type="button"
              className={pauseAnimations ? "activeWidget" : ""}
              active={pauseAnimations}
              aria-label={
                plLanguage
                  ? "Włącz lub wyłącz zatrzymanie animacji"
                  : "Toggle animation pause"
              }
              aria-pressed={pauseAnimations}
              onClick={() => setPauseAnimations(!pauseAnimations)}
            >
              {" "}
              <FaPauseCircle aria-hidden="true" />{" "}
              {plLanguage ? "Zatrzymaj animacje" : "Stop animations"}{" "}
            </Button>{" "}
            {/* OBRAZY */}{" "}
            <Button
              type="button"
              className={hideImages ? "activeWidget" : ""}
              active={hideImages}
              aria-label={
                plLanguage
                  ? "Włącz lub wyłącz ukrywanie obrazów"
                  : "Toggle image hiding"
              }
              aria-pressed={hideImages}
              onClick={() => setHideImages(!hideImages)}
            >
              {" "}
              <FaImage aria-hidden="true" />{" "}
              {plLanguage ? "Ukryj obrazy" : "Hide images"}{" "}
            </Button>{" "}
            {/* DYSLEKSJA */}{" "}
            <Button
              type="button"
              className={dyslexia ? "activeWidget" : ""}
              active={dyslexia}
              aria-label={
                plLanguage
                  ? "Włącz lub wyłącz czcionkę dla dysleksji"
                  : "Toggle dyslexia-friendly font"
              }
              aria-pressed={dyslexia}
              onClick={() => setDyslexia(!dyslexia)}
            >
              {" "}
              <TbLetterCaseUpper aria-hidden="true" />{" "}
              {plLanguage ? "Dysleksja" : "Dyslexia"}{" "}
            </Button>{" "}
          </Grid>{" "}
        </Panel>
      )}{" "}
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
