import { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { HiHome } from "react-icons/hi";

const bounceEffect = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(0, -5px) scale(1.02); }
`;

const housesData = [
  {
    id: 1,
    name: "Domek 1",
    path1:
      "polygon(14% 51%, 17% 44%, 21% 49%, 31% 45%, 39% 61%, 16% 73%, 8% 74%, 6% 63%, 10% 60%, 9% 54%)",
    path: "ellipse(14% 18% at 20% 59%)",
    offsetX: -30,
    offsetY: -100,
  },
  {
    id: 2,
    name: "Domek 2",
    path1:
      "polygon(42% 34%, 44% 36%, 45% 35%, 52% 40%, 58% 49%, 37% 61%, 29% 44%, 40% 39%)",
    path: "ellipse(12% 15% at 43% 48%)",
    offsetX: -60,
    offsetY: 70,
  },
  {
    id: 5,
    name: "Domek 3",
    path1: "polygon(75% 31%, 100% 45%, 97% 58%, 71% 49%, 68% 46%, 66% 40%)",
    path: "ellipse(16% 15% at 84% 45%)",
    offsetX: -80,
    offsetY: 90,
  },

  {
    id: 4,
    name: "Domek 4",
    path1: "polygon(60% 22%, 77% 32%, 65% 45%, 49% 37%, 45% 31%)",
    path: "ellipse(12% 12% at 61% 33%)",
    offsetX: 110,
    offsetY: 0,
  },
  {
    id: 3,
    name: "Domek 5",
    path1:
      "polygon(39% 27%, 36% 21%, 48% 13%, 61% 23%, 47% 33%, 45% 30%, 41% 26%)",
    path: "ellipse(10% 11% at 48% 23%)",
    offsetX: 0,
    offsetY: -50,
  },
];

const Wrapper = styled.div`
  padding: 10vh 5vw 4vh;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 5vw;
  align-items: flex-start;
  background: #f2f2f2;
  box-sizing: border-box;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    padding: 0vh 5vw;
  }

  .containerMapTitle {
    font-family: var(--titleFont);
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
    color: var(--secondaryColor2);
    letter-spacing: 1px;
    width: 100%;
    margin-bottom: 8vh;
    @media screen and (max-width: 800px) {
      font-size: 1.5rem;
      margin-bottom: 4vh;
    }
  }

  .lineUnderMap {
    margin: 10vh auto 0; /* Wyśrodkowane */
    width: 70%; /* Krótsza linia wygląda lepiej na mobile */
    height: 2px;
    background-color: var(--secondaryColor0, #ccc);
    @media screen and (max-width: 800px) {
      margin: 0vh auto 0;
    }
  }
`;

const MapContainer = styled.div`
  position: relative;
  flex: 1.5;
  width: 100%;
  max-width: 900px;
  cursor: pointer;
  border-radius: 20px;
  line-height: 0;
  background-color: white;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    margin-bottom: 5vh;
  }
`;

const BackgroundImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  opacity: ${(props) => (props.isAnyActive ? "0.9" : "0.5")};
  filter: ${(props) =>
    props.isAnyActive ? "grayscale(70%)" : "grayscale(60%) blur(1px)"};
  transition: all 0.5s ease;
  border-radius: 20px;
  border: 4px var(--thirdColor, #fff) solid;
`;

const HousePiece = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transition:
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.5s ease,
    clip-path 0.4s ease-in-out;
  clip-path: ${(props) =>
    props.isGlobalActive || props.isSelected ? props.path1 : props.path};
  pointer-events: none;
  z-index: ${(props) => (props.isActive ? 10 : 1)};

  /* Responsywny mnożnik rozrzutu */
  --spread: 1;
  @media screen and (max-width: 800px) {
    --spread: 0.4;
  }

  transform: ${(props) =>
    props.isGlobalActive
      ? "translate(0, 0) scale(1)"
      : `translate(calc(${props.offsetX}px * var(--spread)), calc(${props.offsetY}px * var(--spread))) scale(0.85)`};

  filter: ${(props) => {
    if (!props.isGlobalActive) return "grayscale(0%)";
    if (props.isActive) return "grayscale(0%) brightness(1.1)";
    return "grayscale(100%) brightness(0.8) opacity(1)";
  }};

  ${(props) =>
    props.isSelected &&
    css`
      animation: ${bounceEffect} 2s ease-in-out infinite;
    `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: auto;
    -webkit-tap-highlight-color: transparent;
  }
`;

const Sidebar = styled.div`
  flex: 0 0 280px;
  width: 100%;
  max-width: 500px;

  h2 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 1.3rem;
    color: #444;
  }
`;

const HouseList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    li:last-child {
      grid-column: 1 / span 2;
      width: 50%;
      justify-self: center;
    }
  }
`;

const ListItem = styled.li`
  padding: 12px 15px;
  background: ${(props) => (props.isActive ? "#333" : "white")};
  color: ${(props) => (props.isActive ? "white" : "#333")};
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;

  @media screen and (min-width: 1024px) {
    justify-content: flex-start;
    &:hover {
      background: ${(props) => (props.isActive ? "#333" : "#f8f8f8")};
      transform: translateX(5px);
    }
  }

  svg {
    margin-right: 8px;
    flex-shrink: 0;
  }
  -webkit-tap-highlight-color: transparent; /* Usuwa niebieskie tło przy dotknięciu */
  touch-action: manipulation; /* Optymalizuje szybkość kliknięć na mobile */
`;

const HouseOutline = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: opacity 0.3s ease;
  polygon {
    fill: none;
    stroke: var(--thirdColor, #fff); /* Kolor Twojego obrysu */
    stroke-width: 1;
    stroke-linejoin: round;
    /* Efekt rysowania linii (opcjonalnie) */
    stroke-dasharray: 1000;
    stroke-dashoffset: ${(props) => (props.isActive ? 0 : 1000)};
    transition: stroke-dashoffset 3s ease-in-out;
  }
`;

const HousesMap = ({ plLanguage }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [isHoveringMap, setIsHoveringMap] = useState(false);

  const activeId = hoveredId || selectedId;
  const isGlobalActive = isHoveringMap || selectedId !== null;
  const imageSrc = "/images/houses/housesmap.jpg";

  return (
    <Wrapper>
      <h2 className="containerMapTitle">
        {plLanguage ? "Znajdź swój domek" : "Find your cottage"}
      </h2>

      <MapContainer
        onMouseEnter={() => setIsHoveringMap(true)}
        onMouseLeave={() => {
          setIsHoveringMap(false);
          setHoveredId(null);
        }}
        onTouchStart={() => setIsHoveringMap(true)}
      >
        <BackgroundImg
          src={imageSrc}
          alt="Mapa tło"
          isAnyActive={isGlobalActive}
        />

        {housesData.map((house) => {
          const svgPoints = house.path1
            .replace("polygon(", "")
            .replace(")", "")
            .replace(/%/g, "");
          return (
            <HousePiece
              key={house.id}
              path={house.path}
              path1={house.path1}
              offsetX={house.offsetX}
              offsetY={house.offsetY}
              isGlobalActive={isGlobalActive}
              isActive={activeId === house.id}
              isSelected={selectedId === house.id}
            >
              <img
                src={imageSrc}
                onMouseEnter={() => setHoveredId(house.id)}
                onClick={() =>
                  setSelectedId(selectedId === house.id ? null : house.id)
                }
              />
              <HouseOutline
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                isActive={activeId === house.id}
              >
                <polygon points={svgPoints} />
              </HouseOutline>
            </HousePiece>
          );
        })}
      </MapContainer>

      <Sidebar>
        <h2>{plLanguage ? "Lista domków" : "Cottage List"}</h2>
        <HouseList>
          {housesData.map((house) => (
            <ListItem
              key={house.id}
              isActive={activeId === house.id}
              onClick={() => {
                // Ustawiamy oba stany na raz, aby uniknąć "podwójnego kliknięcia" na mobile
                setSelectedId(house.id);
                setHoveredId(house.id);
              }}
              // HOVER (tylko dla desktop):
              onMouseEnter={() => {
                setHoveredId(house.id);
              }}
              onMouseLeave={() => {
                setHoveredId(null);
              }}
            >
              <HiHome />
              {house.name}
            </ListItem>
          ))}
        </HouseList>
      </Sidebar>
      <div className="lineUnderMap"></div>
    </Wrapper>
  );
};

export default HousesMap;
