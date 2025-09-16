import styled from "styled-components";
import { useGlobalContext } from "../components/context";
import { ImCross } from "react-icons/im";
import Head from "next/head";

const RodoCookies = () => {
  const { plLanguage } = useGlobalContext();

  const admin =
    " Firma Usługowa Jerzy Góra, adres e-mail: rezerwacja@sosniegorne.pl tel. +48 793 373 246";
  const website = "sosniegorne.pl";

  return (
    <>
      <Head>
        <title>Polityka Prywatności | Sośnie Górne Resort & SPA</title>
        <meta name="description" content="Polityka Prywatności." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
        <meta
          property="og:image"
          content="https://sosniegorne.pl/logo192.png"
        />
      </Head>
      {plLanguage ? (
        <Wrapper className="mainPage">
          <div className="title">
            <div className="titleLine"></div>
            <h2>Polityka Prywatności i Cookies</h2>
            <div className="titleLine"></div>
          </div>
          <div className="paddingContainer">
            <h2>Polityka Prywatności</h2>
            <p>
              Zgodnie z art. 13 ust. 1 i ust. 2 rozporządzenia Parlamentu
              Europejskiego i Rady (UE) 2016/679 z 27 kwietnia 2016 r. w sprawie
              ochrony osób fizycznych w związku z przetwarzaniem danych
              osobowych i w sprawie swobodnego przepływu takich danych oraz
              uchylenia dyrektywy 95/46/WE (RODO), informujemy:
            </p>
            <p> Administratorem Pani/Pana danych osobowych jest {admin}. </p>
            <p>
              {" "}
              Ochrona danych odbywa się zgodnie z wymogami powszechnie
              obowiązujących przepisów prawa. Szanujemy prawo do prywatności i
              dbamy o bezpieczeństwo danych. W tym celu używany jest m.in.
              bezpieczny protokół szyfrowania komunikacji (SSL), a dane
              przechowywane są na zabezpieczonych serwerach, komputerach i u
              podmiotów trzecich (m.in. biuro rachunkowe, bank).Państwa zwykłe
              dane osobowe (np. imię, nazwisko, adres korespondencyjny, mail,
              numer telefonu, adres rozliczeniowy, NIP) mogą być przekazane
              Administratorowi za pomocą podanego numeru telefonu, adresu
              e-mail, oraz formularza dostępnego na stronie internetowej{" "}
              {website}. Dane mogą być zbierane także podczas firmowych eventów
              jak wystawy, targi, pokazy.{" "}
            </p>
            <p>
              {" "}
              Nasza strona internetowa {website} nie zbiera w sposób
              automatyczny żadnych informacji, z wyjątkiem informacji zawartych
              w plikach cookies. Więcej o plikach cookies (tzw. „ciasteczka”) w
              naszej Polityce cookies.{" "}
            </p>
            <p>
              {" "}
              Przetwarzanie Pani/Pana danych osobowych będzie się odbywać na
              podstawie art. 6 RODO. Administrator powołuje się na prawnie
              uzasadniony interes, którym jest zbieranie danych statystycznych i
              analizowanie ruchu na stronie internetowej. Państwa dane zbierane
              są w celu:{" "}
              <li>
                prowadzenie korespondencji z Klientami, w tym udzielania
                odpowiedzi na wiadomości, zapytania oraz prośbę o ofertę.
              </li>{" "}
              <li>
                zawarcie i realizację Umowy o Świadczenie Usług lub Umowa
                Sprzedaży.
              </li>{" "}
            </p>
            <p>
              Dane Osobowe przetwarzane są na podstawie zgody wyrażanej przez
              Państwa:
              <li>
                dobrowolną zgodę w przypadku danych wprowadzanych w formularzach
                w celu wynikającym z funkcji konkretnego formularza np. w celu
                kontaktowym.
              </li>{" "}
              <li>
                obowiązkowe w celu zawarcia i wykonywania Umowy Sprzedaży /
                Umowy o świadczenie usług, będąc niezbędne do realizacji celów
                sprzedażowych bądź wynikające z obowiązków prawnych.
              </li>
            </p>
            <p>
              W niektórych sytuacjach dane Klienta mogą być przekazywane
              podmiotom trzecim. Odbiorcami danych Klienta są:{" "}
              <li>
                upoważnieni pracownicy w celu wykonania powierzonych im
                obowiązków
              </li>
              <li>serwisanci oprogramowania i sprzętu komputerowego</li>
              <li>Bank</li>
              <li>Biuro rachunkowe</li>
              <li>Firma hostingowa</li>
              <li>
                Inni partnerzy: Facebook, Google AdWords, Google Analytics
              </li>
            </p>
            <p>
              Pani/Pana dane osobowe będą przechowywane przez okres 5 lat do
              czasu wykorzystywania możliwości marketingowych i analizy danych
              potrzebnych do prowadzenia działalności gospodarczej. W przypadku
              zawierania z Nami umowy, Twoje dane osobowe będą przez Nas
              przetwarzane przez cały czas, przez który umowa będzie wykonywana,
              a także później tj. do czasu upływu terminu przedawnienia
              ewentualnych roszczeń wynikających z umowy i w związku z
              realizacją 5 letniego obowiązku archiwizacyjnego.
            </p>
            <p>
              Posiada Pani/Pan prawo dostępu do treści swoich danych osobowych,
              prawo do ich sprostowania, usunięcia, jak i również prawo do
              ograniczenia ich przetwarzania/ prawo do cofnięcia zgody, prawo do
              przenoszenia danych, prawo do wniesienia sprzeciwu wobec
              przetwarzania Pani/Pana danych osobowych. Przysługuje Pani/Panu
              prawo wniesienia skargi do organu nadzorczego, jeśli Pani/Pana
              zdaniem, przetwarzanie danych osobowych Pani/Pana – narusza
              przepisy unijnego rozporządzenia RODO.{" "}
            </p>
            <p>
              Dane osobowe pozostawione w serwisie nie zostaną sprzedane ani
              udostępnione osobom trzecim, zgodnie z przepisami Ustawy o
              ochronie danych osobowych.
            </p>
            <h2>Polityka Cookies</h2>
            <p>
              Serwis nie zbiera w sposób automatyczny żadnych informacji, z
              wyjątkiem informacji zawartych w plikach cookies. Pliki cookies
              (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności
              pliki tekstowe, które przechowywane są w urządzeniu końcowym
              Użytkownika Serwisu i przeznaczone są do korzystania ze stron
              internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony
              internetowej, z której pochodzą, czas przechowywania ich na
              urządzeniu końcowym oraz unikalny numer.
            </p>
            <p>
              Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika
              Serwisu pliki cookies oraz uzyskującym do nich dostęp jest
              operator Serwisu –{admin}.
            </p>
            <p>
              Pliki cookies wykorzystywane są w celu: <br /> 1. Dostosowania
              zawartości stron internetowych Serwisu do preferencji Użytkownika
              oraz optymalizacji korzystania ze stron internetowych; w
              szczególności pliki te pozwalają rozpoznać urządzenie Użytkownika
              Serwisu i odpowiednio wyświetlić stronę internetową, dostosowaną
              do jego indywidualnych potrzeb; <br /> 2. Tworzenia statystyk,
              które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisu
              korzystają ze stron internetowych, co umożliwia ulepszanie ich
              struktury i zawartości;
            </p>
            <p>
              W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików
              cookies: „sesyjne” (session cookies) oraz „stałe” (persistent
              cookies). Cookies „sesyjne” są plikami tymczasowymi, które
              przechowywane są w urządzeniu końcowym Użytkownika do czasu
              wylogowania, opuszczenia strony internetowej lub wyłączenia
              oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies
              przechowywane są w urządzeniu końcowym Użytkownika przez czas
              określony w parametrach plików cookies lub do czasu ich usunięcia
              przez Użytkownika.
            </p>
            <p>
              W wielu przypadkach oprogramowanie służące do przeglądania stron
              internetowych (przeglądarka internetowa) domyślnie dopuszcza
              przechowywanie plików cookies w urządzeniu końcowym Użytkownika.
              Użytkownicy Serwisu mogą dokonać w każdym czasie zmiany ustawień
              dotyczących plików cookies. Ustawienia te mogą zostać zmienione w
              szczególności w taki sposób, aby blokować automatyczną obsługę
              plików cookies w ustawieniach przeglądarki internetowej bądź
              informować o ich każdorazowym zamieszczeniu w urządzeniu
              Użytkownika Serwisu. Szczegółowe informacje o możliwości i
              sposobach obsługi plików cookies dostępne są w ustawieniach
              oprogramowania (przeglądarki internetowej).
            </p>
            <br />
            <span>
              Treść Polityki cookies na tej stronie powstała dzięki uprzejmości
              IAB Polska, które udostępniło jej wzór (© IAB Polska) na stronie
              www.wszystkoociasteczkach.pl.
            </span>
          </div>
        </Wrapper>
      ) : (
        <Wrapper className="mainPage">
          <div className="title">
            <div className="titleLine"></div>
            <h2>Privacy and Cookies Policy</h2>
            <div className="titleLine"></div>
          </div>
          <div className="paddingContainer">
            <h2>Privacy Policy</h2>
            <p>
              According to Art. 13 sec. 1 and sec. 2 of Regulation (EU) 2016/679
              of the European Parliament and of the Council of 27 April 2016 on
              protection of individuals with regard to the processing of
              personal data and on the free movement of such data, and repealing
              Directive 95/46/EC (GDPR), we inform:
            </p>
            <p> The administrator of your personal data is {admin}. </p>
            <p>
              {" "}
              Data protection is carried out in accordance with the general
              requirements applicable law. We respect the right to privacy and
              we care about data security. For this purpose, e.g. secure
              communication encryption protocol (SSL), and data are stored on
              secured servers, computers and u third parties (e.g. accounting
              office, bank). Ordinary countries personal data (e.g. name,
              surname, correspondence address, e-mail address, telephone number,
              billing address, tax identification number) may be provided
              Administrator using the provided telephone number, e-mail address,
              and the form available on the website {website}. Data can also be
              collected during company events such as exhibitions, fairs, shows.{" "}
            </p>
            <p>
              {" "}
              Our website {website} does not collect automatically any
              information except the information contained in the files cookies.
              More about cookies (so-called "cookies") in our cookies policy.{" "}
            </p>
            <p>
              {" "}
              The processing of your personal data will take place on pursuant
              to art. 6 GDPR. The administrator refers to the law legitimate
              interest, which is the collection of statistical data and
              analyzing website traffic. Your data is collected in order to:{" "}
              <li>
                conducting correspondence with clients, including providing
                responses to messages, inquiries and requests for an offer.
              </li>{" "}
              <li>
                conclusion and implementation of the Agreement for the Provision
                of Services or the Agreement Sales.
              </li>{" "}
            </p>
            <p>
              Personal data is processed on the basis of consent expressed by
              Countries:
              <li>
                voluntary consent in the case of data entered in forms in the
                purpose resulting from the function of a specific form, e.g. for
                the purpose contact.
              </li>{" "}
              <li>
                mandatory in order to conclude and perform the Sales Agreement /
                Agreement for the provision of services, being necessary to
                achieve the goals sales or resulting from legal obligations.
              </li>
            </p>
            <p>
              In some situations, the Customer's data may be transferred to
              entities third. The recipients of the Customer's data are:{" "}
              <li>authorized employees to perform their duties</li>
              <li>software and hardware service providers</li>
              <li>Bank</li>
              <li>accounting Office</li>
              <li>Hosting company</li>
              <li>
                Other partners: Facebook, Google AdWords, Google Analytics
              </li>
            </p>
            <p>
              Your personal data will be stored for a period of 5 years until
              use of marketing opportunities and data analysis needed to run a
              business. In case of concluding a contract with us, your personal
              data will be kept by us processed for the entire duration of the
              contract, and also later, i.e. until the expiry of any limitation
              period claims arising from the contract and in connection with the
              implementation of the 5-year period archiving obligation.
            </p>
            <p>
              You have the right to access your personal data, the right to
              rectify them, delete them, as well as the right to restrictions on
              their processing / the right to withdraw consent, the right to
              data transfer, the right to object to processing of your personal
              data. You are entitled to Mrs/Mrs the right to lodge a complaint
              with the supervisory authority, if you in your opinion, the
              processing of your personal data violates the provisions the EU
              GDPR regulation.{" "}
            </p>
            <p>
              Personal data left on the site will not be sold or made available
              to third parties in accordance with the provisions of the
              Protection Act personal data.
            </p>
            <h2>Cookies Policy</h2>
            <p>
              The website does not automatically collect any information, except
              for the information contained in cookies. Cookies are IT data, in
              particular files text files that are stored on the User's end
              device website and are intended for the use of websites Service.
              Cookies usually contain the name of the website, which they come
              from, their storage time on the end device and a unique number.
            </p>
            <p>
              The entity that places on the Website User's end device cookies
              and accessing them is the operator of the Website –{admin}.
            </p>
            <p>
              Cookies are used for: <br /> 1. Customization the content of the
              Website pages to the User's preferences and optimizing the use of
              websites; in particular these files allow to recognize the device
              of the Website User and properly display the website, for to his
              individual needs; <br /> 2. Create statistics that help understand
              how the Website Users use the pages websites, which allows
              improving their structure and content;
            </p>
            <p>
              The Website uses two basic types of cookies: Session cookies and
              persistent cookies. Cookies "Session" files are temporary files
              that are stored on the device end of the User until logging out,
              leaving the page website or disabling the software (browser
              website). Persistent cookies are stored on the device end User for
              the time specified in the cookie parameters or until they are
              removed by the User.
            </p>
            <p>
              In many cases, web browsing software Internet (web browser) allows
              by default storing cookies on the User's end device. The Website
              Users can change the settings at any time regarding cookies. These
              settings can be changed in in particular in such a way as to block
              the automatic handling of files cookies in the web browser
              settings or inform about them each time they are placed on the
              Website User's device. Detailed information on the possibilities
              and methods of handling cookies are available in the software (web
              browser) settings.
            </p>
            <br />
            <span>
              The content of the Cookies Policy on this website was created
              courtesy of IAB Poland, which provided its pattern (© IAB Polska)
              on the website www.wszystkoociasteczkach.pl.
            </span>
          </div>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  width: 82vw;
  min-height: 100vh;
  margin-left: 18vw;
  padding: 10vh 0vw;
  position: relative;
  line-height: 1.4;
  @media screen and (max-width: 800px) {
    width: 100vw;
    min-height: auto;
    margin-left: 0;
    padding: 5vh 0vw;
  }
  .title {
    padding: 0 5vw;
    margin: 10vh auto 5vh;
    justify-content: space-between;
    @media screen and (max-width: 800px) {
      padding: 0;
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
        width: 80vw;
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
            width: 10vw;
          }
        }
      }
    }
  }
  .paddingContainer {
    padding: 0 5vw;
  }
  .titleCookie {
    margin: 10vh auto 10vh;
    text-align: center;
    h2 {
      width: auto;
      text-align: center;
      padding: 2vh;
      background: var(--thirdColor);
      color: #222;
    }
    @media screen and (max-width: 800px) {
      margin: 15vh auto 10vh;
    }
  }
  h2,
  h1 {
    text-align: center;
    text-shadow: none;
    font-family: var(--titleFont);
  }
  h2 {
    color: var(--secondaryColor2);
    text-transform: uppercase;
    margin: 5vh auto;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 2vh;
  }
  button {
    position: absolute;
    top: 5vh;
    right: 5vw;
    font-size: 2rem;
    background: transparent;
    border: none;
    color: var(--secondaryColor);
    cursor: pointer;
    padding: 10px;
    transition: 0.4s;
    :hover {
      color: var(--secondaryColor2);
    }
    @media screen and (max-width: 800px) {
      right: 80vw;
    }
  }
  span {
    color: #999;
  }
  @media screen and (max-width: 800px) {
    p {
      text-align: center;
      padding: 10px;
      font-size: 1.1rem;
      line-height: 1.4;
    }
    h1 {
      font-size: 2rem;
      margin-top: 10vh;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export default RodoCookies;
