import styled from "styled-components";
import { useGlobalContext } from "../context";

const KPOImagePLHorizont = "/images/home/KPO-PL-Horizont.jpg";
const KPOImageENHorizont = "/images/home/KPO-EN-Horizont.jpg";
const KPOImagePLVertical = "/images/home/KPO-PL-Vertical.jpg";
const KPOImageENVertical = "/images/home/KPO-EN-Vertical.jpg";

const KPO = () => {
  const { plLanguage } = useGlobalContext();

  return (
    <Wrapper>
      <img
        src={plLanguage ? KPOImagePLHorizont : KPOImageENHorizont}
        className="KPO-PL-Horizont"
        alt="KPO-PL-Horizont"
      />
      <img
        src={plLanguage ? KPOImagePLVertical : KPOImageENVertical}
        className="KPO-PL-Vertical"
        alt="KPO-PL-Vertical"
      />
      {plLanguage ? (
        <div className="KPOText">
          <h2>
            <span>Nazwa projektu:</span>Dywersyfikacja działalności firmy FIRMA
            USŁUGOWA JERZY GÓRA.
          </h2>
          <h3>
            <span>Beneficjent:</span>FIRMA USŁUGOWA JERZY GÓRA.
          </h3>
          <section>
            <h3>
              <span>Koszt przedsięwzięcia:</span> 458 200 zł
            </h3>
            <h3>
              <span>Wartość dofinansowania:</span> 316 158 zł
            </h3>
          </section>
          <p>
            Celem głównym projektu jest rozpoczęcie świadczenia dwóch nowych
            usług tj. rozszerzenie asortymentu o wynajem krótkoterminowy domku
            dostosowanego do potrzeb klientów typy Premium oraz dywersyfikacja
            działalności firmy w kierunku rozpoczęcia działania wypożyczalni
            sprzętu rekreacyjnego do końca czerwca 2025 roku. Grupą docelową
            projektu są przede wszystkim turyści, którzy poszukują wysokiej
            jakości usług, dostosowanych do ich potrzeb i oczekiwań.
          </p>
        </div>
      ) : (
        <div className="KPOText">
          <h2>
            <span>Project name:</span>
            Diversification of the activities of the company FIRMA USŁUGOWA
            JERZY GÓRA.
          </h2>
          <h3>
            <span>Beneficiary:</span> FIRMA USŁUGOWA JERZY GÓRA.
          </h3>
          <section>
            <h3>
              <span>Project costs:</span> 458 200 PLN
            </h3>
            <h3>
              <span>Funding value:</span> 316 158 PLN
            </h3>
          </section>
          <p>
            The main objective of the project is to start providing two new
            services, i.e. expanding the product range with short-term rental of
            a cottage adapted to the needs of Premium customers and diversifying
            the company's activities towards starting a recreational equipment
            rental business by the end of June 2025. The target group of the
            project are primarily tourists who are looking for high-quality
            services tailored to their needs and expectations.
          </p>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 82vw;
  margin-left: 18vw;
  padding: 8vh 5vw 10vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-top: 3px dotted var(--footerBgColor);
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 100vw;
    margin-left: 0vw;
    padding: 3vh 5vw 7vh;
    margin-top: 0vh;
  }
  .KPO-PL-Horizont {
    width: 70%;
    margin-bottom: 7vh;
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
  .KPO-PL-Vertical {
    width: 50%;
    margin-bottom: 5vh;
    @media screen and (min-width: 801px) {
      display: none;
    }
  }

  .KPOText {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    section {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5vh auto;
      @media screen and (max-width: 800px) {
        margin: 5vh auto;
      }
      h3 {
        margin: 0 3vw;
        @media screen and (max-width: 800px) {
          width: 45%;
        }
      }
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 600;
      line-height: 1.5;
      margin-bottom: 3vh;

      @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
      }
    }
    h3 {
      font-size: 1.1rem;
      font-weight: 500;
      @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 3vh auto;
      }
    }
    p {
      font-size: 1rem;
      line-height: 1.5;
      width: 90%;
    }
    span {
      margin-right: 5px;
      color: var(--secondaryColor);
      @media screen and (max-width: 800px) {
        margin-right: 0px;
        margin-bottom: 10px;
      }
    }
  }
`;

export default KPO;
