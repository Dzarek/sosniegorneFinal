import {
  GiMeal,
  GiBeerStein,
  GiIceSkate,
  GiWhiteTower,
  GiCastle,
  GiFullPizza,
  GiStonePile,
  GiCamel,
} from "react-icons/gi";
import { FaSkiing, FaSwimmer, FaRegEye } from "react-icons/fa";
import {
  MdMuseum,
  MdOutlineSpa,
  MdWater,
  MdChurch,
  MdLocalMovies,
} from "react-icons/md";

// CENNIK
// export const cennik = [
//   {
//     name: "sezon niski",
//     nameEN: "low season",
//     dates: ["1 styczeń - 20 czerwiec", "1 wrzesień - 22 grudzień"],
//     datesEN: ["January 1 - June 20", "September 1 - December 22"],
//     price1: 500,
//     price2: 600,
//   },
//   {
//     name: "sezon wysoki",
//     nameEN: "high season",
//     dates: [
//       "21 czerwiec - 31 sierpień",
//       "Sylwester, Święta Wielkanoce, Święta Bożego Narodzenia, Weekend Majowy, Boże Ciało",
//     ],
//     datesEN: [
//       "June 21 - August 31",
//       "New Year's Eve, Easter, Christmas, May Weekend, Corpus Christi",
//     ],
//     price1: 600,
//     price2: 800,
//   },
// ];

// CENNIK KONIEC

// GALERIA
export const gallery = [
  "/images/gallery/out5.jpg",
  "/images/gallery/out6.jpg",
  "/images/gallery/out7.jpg",
  "/images/gallery/out8.jpg",
  "/images/gallery/out1.jpg",
  "/images/gallery/out2.jpg",
  "/images/gallery/out3.jpg",
  "/images/gallery/out4.jpg",

  "/images/gallery/salon1.jpg",
  "/images/gallery/salon2.jpg",
  // "/images/gallery/aneks1.jpg",

  "/images/gallery/room1.jpg",
  "/images/gallery/room2.jpg",

  "/images/gallery/sauna1.jpg",
  "/images/gallery/sauna2.jpg",
  // "/images/gallery/sauna3.jpg",
  "/images/gallery/sauna4.jpg",
  // "/images/gallery/sauna5.jpg",
  // "/images/gallery/sauna6.jpg",
  // "/images/gallery/sauna7.jpg",

  // "/images/gallery/all1.jpg",
  "/images/gallery/all2.jpg",
  "/images/gallery/all3.jpg",
  "/images/gallery/all4.jpg",
  "/images/gallery/all5.jpg",
  "/images/gallery/all6.jpg",

  "/images/gallery/w-04.jpg",
  "/images/gallery/w-05.jpg",
  "/images/gallery/w-09.jpg",
  "/images/gallery/w-11.jpg",
  "/images/gallery/05.jpg",
  "/images/gallery/06.jpg",
  "/images/gallery/07.jpg",
  "/images/gallery/10.jpg",
  "/images/gallery/14.jpg",
  "/images/gallery/13.jpg",
  "/images/gallery/15.jpg",
  "/images/gallery/17.jpg",
  "/images/gallery/22.jpg",
  "/images/gallery/27.jpg",
  "/images/gallery/29.jpg",
  "/images/gallery/32.jpg",
  "/images/gallery/31.jpg",
  "/images/gallery/33.jpg",
  "/images/gallery/01-2.jpg",
  "/images/gallery/01-6.jpg",
  "/images/gallery/01-8.jpg",
  "/images/gallery/02-2.jpg",
  "/images/gallery/02-3.jpg",
  "/images/gallery/05-1.jpg",
  "/images/gallery/05-2.jpg",
  "/images/gallery/03-2.jpg",
  // "/images/gallery/03-6.jpg",
  "/images/gallery/03-4.jpg",
  "/images/gallery/04-6.jpg",
  "/images/gallery/04-7.jpg",
];
// GALERIA KONIEC

// FAQ
// export const questions = [
//   {
//     id: 1,
//     title: "W jaki sposób dokonać rezerwacji?",
//     titleEN: "How make a reservation?",
//     info: "Rezerwacji można dokonać poprzez stronę internetową, email lub telefonicznie.",
//     infoEN: "Reservations can be made by the website, email or telephone.",
//   },
//   {
//     id: 2,
//     title: "Płatność za rezerwację?",
//     titleEN: "Booking payment?",
//     info: "Płatności można dokonać poprzez przelew bankowy, blik lub kartą płatniczą.",
//     infoEN:
//       "Payment can be made by bank transfer, blik or credit and debit card.",
//   },
//   {
//     id: 3,
//     title: "Ile osób można zakwaterować?",
//     titleEN: "How many people can be accommodated?",
//     info: "W domku może przebywać max 6 os. Domek posiada 2 sypialnie dla 2 osób oraz salon z rozkładaną kanapą dla dwóch osób.",
//     infoEN:
//       "The house can accommodate up to 6 people. The house has 2 bedrooms for 2 people and a living room with a sofa bed for two people.",
//   },
//   {
//     id: 4,
//     title: "Czy można przyjechać ze zwierzęciem?",
//     titleEN: "Can I come with a pet?",
//     info: "Tak, pod warunkiem opłacenia dodatkowej opłaty (100 zł za cały pobyt) oraz wzięcia całkowitej odpowiedzialności za zwierzę jak i ewentualnie wyrządzonych szkód.",
//     infoEN:
//       "Yes, if you pay an additional fee (PLN 100 for the entire stay) and take full responsibility for the animal and any damage caused.",
//   },
//   {
//     id: 5,
//     title: "Jak można się skontaktować z właścicielem?",
//     titleEN: "How can I contact with the owner?",
//     info: "Telefonicznie, sms, whatshap pod nr +48 793 373 246 .",
//     infoEN: "By phone, sms, whatshap nr +48 793 373 246 .",
//   },
//   {
//     id: 6,
//     title: "Co obejmuje cena, opłata za pobyt?",
//     titleEN: "What does the price include?",
//     info: "W cenie jest najem domku wraz z wyposażeniem, korzystanie ze wszystkich urządzeń znajdujących się w domku i wokół niego.",
//     infoEN:
//       "The price includes renting a house with equipment, use of all devices in and around the house.",
//   },
//   {
//     id: 7,
//     title: "Czy jest wyznaczone miejsce do zabawy dla dzieci?",
//     titleEN: "Is there a play area for children?",
//     info: "Na ogrodzie znajduje się piaskownica oraz huśtawka. Nie należy jednak zostawiać dzieci bez opieki z uwagi na bliskość lasu, w którym są strome zbocza. Teren nie jest ogrodzony.",
//     infoEN:
//       "There is a sandbox and a swing in the garden. However, you should not leave children unattended due to the proximity of the forest with steep slopes. The area is not fenced.",
//   },
//   {
//     id: 8,
//     title: "Czy istnieje możliwość wykupienia wyżywienia?",
//     titleEN: "Is it possible to buy meals?",
//     info: "Nie, wyżywienie należy zorganizować we własnym zakresie. W okolicy jest wiele sklepów i restauracji z których można zamówić jedzenie do domku.",
//     infoEN:
//       "No, meals must be arranged on your own. There are many shops and restaurants in the area from which you can order food to the house.",
//   },
//   {
//     id: 9,
//     title:
//       "Od której godziny dostępny jest domek? O której godzinie muszę oddać klucze?",
//     titleEN:
//       "From what time is the house available? What time do I have to return the keys?",
//     info: "Domek jest dostępny w dniu przyjazdu od godz. 15.00, a klucze należy oddać do godziny 11.00 w ostatnim dniu pobytu, chyba że godziny zameldowania i wymeldowania były indywidualnie ustalone w miarę dostępności.",
//     infoEN:
//       "The house is available on the day of arrival from 3 3:00 pm. Keys must be returned by 11.00 am on the last day of stay, unless check-in and check-out times have been individually arranged with owner.",
//   },
//   {
//     id: 10,
//     title:
//       "Jeżeli przyjadę na miejsce o późnej porze, jak mogę odebrać klucze?",
//     titleEN: "If I arrive late, how can I pick up the keys?",
//     info: "Zameldowanie i wymeldowanie odbywa się wg instrukcji którą dostaną Państwo w dniu przyjazdu.",
//     infoEN:
//       "Check-in and check-out takes place according to the instructions you will receive on arrival.",
//   },
//   {
//     id: 11,
//     title: "Jak uruchomić wannę Spa?",
//     titleEN: "How to run the Spa?",
//     info: "Wanna Spa jest uruchamiana ręcznie przyciskami przy wejściu do wanny.",
//     infoEN:
//       "The spa tub is manually activated by push buttons at the tub entrance.",
//   },
// ];
// FAQ KONIEC

// UDOGODNIENIA
// export const udogodnienia = [
//   {
//     name: "pokoje",
//     nameEN: "bedrooms",
//     img: "/images/gallery/03-4.jpg",
//     details: [
//       "2 łóżka pojedyncze",
//       "pościel",
//       "ręczniki",
//       "komoda",
//       "klimatyzacja",
//     ],
//     detailsEN: [
//       "2 single beds",
//       "bed linen",
//       "towels",
//       "commode",
//       "air conditioning",
//     ],
//   },
//   {
//     name: "aneks kuchenny",
//     nameEN: "kitchenette",
//     img: "/images/gallery/01-6.jpg",
//     details: [
//       "Lodówka z zamrażarką",
//       "Przybory kuchenne",
//       "płyta kuchenna",
//       "ekspres do kawy",
//       "czajnik",
//       "zmywarka",
//       "stolik z krzesłami",
//     ],
//     detailsEN: [
//       "Fridge with freezer",
//       "Kitchen tools",
//       "cooker plate",
//       "Coffee machine",
//       "kettle",
//       "dishwasher",
//       "table with chairs",
//     ],
//   },
//   {
//     name: "łazienka",
//     nameEN: "bathroom",
//     img: "/images/gallery/bathroom.jpg",
//     details: [
//       "Ręczniki",
//       "ogrzewanie podłogowe",
//       "prysznic z deszczownicą i hydromasażem",
//       "suszarka do włosów",
//     ],
//     detailsEN: [
//       "Towels",
//       "floor heating",
//       "shower with hydromassage",
//       "hair dryer",
//     ],
//   },
//   {
//     name: "salon",
//     nameEN: "living room",
//     img: "/images/gallery/01-1.jpg",
//     details: [
//       "smart TV",
//       "stolik kawowy",
//       "sofa",
//       "klimatyzacja",
//       "rekuperator",
//     ],
//     detailsEN: [
//       "smart TV",
//       "coffee table",
//       "sofa",
//       "air conditioning",
//       "recuperator",
//     ],
//   },
//   {
//     name: "taras",
//     nameEN: "terrace",
//     img: "/images/gallery/06-1.jpg",
//     details: [
//       "wanna spa",
//       "meble ogrodowe",
//       "grill",
//       "huśtawka",
//       "piaskownica",
//     ],
//     detailsEN: ["spa tub", "garden furniture", "grill", "swing", "sandpit"],
//   },
// ];
// UDOGODNIENIA KONIEC

// REGULAMINY
// export const regulationShort = {
//   title: "Regulamin Skrócony",
//   titleEN: "Short Terms",
//   firstInfo:
//     "Dokonanie rezerwacji jest jednoznaczne z akceptacją postanowień niniejszego regulaminu.",
//   firstInfoEN:
//     "By making a reservation, you accept the provisions of these regulations.",
//   content: [
//     "Doba rozpoczyna się od godz. 15:00 w dniu przyjazdu, a kończy się o godz. 11:00 w dniu wyjazdu.",
//     "W dniu przyjazdu Klient otrzyma wiadomość sms z instrukcją dotyczącą zameldowania.",
//     "Warunkiem rezerwacji jest wpłata zadatku w terminie określonym w potwierdzeniu rezerwacji.",
//     "W razie odwołania przyjazdu, wpłacony zadatek nie podlega zwrotowi.",
//     "Opłata za cały okres deklarowanego pobytu regulowana jest jednorazowo przed przyjazdem przelewem lub kartą.",
//     "W przypadku nie zameldowania się w dobie przyjazdu (także w przypadku rezygnacji do 3 dni przed przyjazdem), Klient zobowiązany jest do uiszczenia całkowitej kwoty za pobyt.",
//     "Dzień przed wymeldowaniem prosimy o kontakt tel. (lub sms) pod nr tel. +48793373246 w celu poinformowania o planowanej godzinie wyjazdu.",
//   ],
//   contentEN: [
//     "Check-in starts at 15:00 on the day of arrival. Check-out ends at 11:00 on the day of departure.",
//     "On the day of arrival, the customer will receive a text message with check-in instructions.",
//     "The condition of the reservation is the advance payment within the period specified in the booking confirmation.",
//     "If the arrival is cancelled, the advance payment is non-refundable.",
//     "The payment for the entire period of the declared stay is made before arrival by bank transfer or credit card.",
//     "In no-show case on the day of arrival (also in case of cancellation up to 3 days before arrival), the Customer is obliged to pay the total amount for the stay.",
//     "The day before check-out, please contact us by phone (or SMS) at +48793373246 to inform about the planned departure time.",
//   ],
// };

// export const regulationFull = {
//   title: "Regulamin Pełny",
//   titleEN: "Full Terms",
//   firstInfo:
//     "Firma Usługowa Jerzy Góra ul. Westerplatte 12/3a 31-033 Kraków NIP 7381732843 będąca stroną umowy najmu domku na pobyt wypoczynkowy lub turystyczny z Klientem. Klient– osoba fizyczna albo prawna, będąca stroną umowy o czasowe korzystanie z domu (umowy najmu domku na pobyt wypoczynkowy lub turystyczny), będącego własnością Firma Usługowa Jerzy Góra Domki na wynajem -dom , szczegółowo opisany w ofercie przedstawionej na stronie internetowej www.sosniegorne.pl , który Klient wynajmuje na pobyt czasowy w celach wypoczynkowych/turystycznych.",
//   firstInfoEN:
//     "Firma Usługowa Jerzy Góra ul. Westerplatte 12/3a 31-033 Cracow TAX ID. 7381732843 being a side to the rental agreement for a house for a holiday or tourist stay with the Customer. Client – a natural or legal person who is a side to a contract for the temporary use of a house (house rental contract for a holiday or tourist stay), owned by Firma Usługowa Jerzy Góra Houses for rent - a house, described in detail in the offer presented on the website www.sosniegorne.pl, which the Customer rents for a temporary stay for leisure/tourism purposes.",
//   content: [
//     {
//       nr: 1,
//       name: "Postanowienia ogólne",
//       details: [
//         "Niniejsze ogólne warunki korzystania z domku, zwane dalej Warunkami, stanowią integralną część umowy najmu domu mieszkalnego na pobyt wypoczynkowy lub turystyczny zawartej pomiędzy Klientem a Firma Usługowa Jerzy Góra",
//         "W ramach umowy najmu, Firma Usługowa Jerzy Góra zobowiązuje się przygotować domek dla Klienta oraz udostępnić go w zamian za ustalone wynagrodzenie.",
//       ],
//     },
//     {
//       nr: 2,
//       name: "Rezerwacja",
//       details: [
//         "Przed dokonaniem rezerwacji i zawiązaniem umowy najmu, Klient zobowiązuje się zapoznać się z treścią niniejszego Regulaminu. Dokonanie rezerwacji równoznaczne jest z zaakceptowaniem Regulaminu.",
//         "Aktualny opis ,zdjęcia domków do krótkotrwałego, turystycznego wynajmu wraz z ich szczegółowym opisem znajduje się na stronie www.sosniegorne.pl",
//         "Rezerwacji domku Klient może dokonywać w następujący sposób: on-line, poprzez stronę internetową, drogą mailową, poprzez pocztę elektroniczną (adres e- mail:rezerwacja@sosniegorne.pl, telefonicznie, pod numerem +48793373246",
//         "Klient po dokonaniu rezerwacji domku on-line lub drogą mailową, otrzyma na swoją elektroniczną skrzynkę pocztową e-mail potwierdzenie rezerwacji z informacja o wpłacie zadatku, nr konta oraz terminem wpłaty. Rezerwacja otrzymuje status pełnej po zaksięgowaniu zadatku na koncie w wyznaczonym w potwierdzeniu rezerwacji terminie do wpłaty.",
//         "W przypadku dokonania rezerwacji i nieotrzymania zadatku w terminie określonym w mailowym potwierdzeniu rezerwacji, rezerwacja zostanie anulowana.",
//         "Zdjęcia, wyposażenie i udogodnienia Domu oraz podane na stronie internetowej ceny mają jedynie charakter informacyjny, poglądowy i reklamowy.",
//       ],
//     },
//     {
//       nr: 3,
//       name: "Opłata za usługę i warunki płatności",
//       details: [
//         "Wysokość opłaty za wynajem domku na pobyt turystyczny jest każdorazowo podana w potwierdzeniu rezerwacji otrzymywanym po dokonaniu rezerwacji lub telefonicznie przy dokonywaniu rezerwacji.",
//         "Opłata wskazana w ofercie cenowej na stronie internetowej i w formularzu rezerwacyjnym zawiera 8% podatek od towarów i usług.",
//         "Opłata za wynajem Domu obejmuje: a. opłatę za przygotowanie domku, b. opłatę za pobyt w domku maksymalnie 6 osób",
//         "Do opłaty za wynajem doliczane mogą być dodatkowe opłaty i kaucje, wskazane w formularzu rezerwacyjnym lub umowie.",
//         "Umowa najmu nie obejmuje dodatkowego sprzątania, dodatkowej wymiany bielizny i ręczników, pobytu zwierzęcia (informacja w mailu rezerwacyjnym jeśli dotyczy).",
//         "Po dokonaniu rezerwacji w ciągu 3 dni Klient zobowiązany jest wpłacić na rachunek bankowy wskazaną w formularzu rezerwacyjnym opłatę rezerwacyjną w wysokości 30% opłaty za wynajem domku. Liczy się data księgowania na koncie. W przypadku braku wpłaty w tym terminie zastrzegamy sobie możliwość anulowania rezerwacji. Opłata rezerwacyjna jest bezzwrotna.",
//         "Opłata rezerwacyjna stanowi wyłącznie opłatę za przygotowanie domku i nie stanowi opłaty za pobyt w domku. W przypadku wpłaty opłaty rezerwacyjnej w terminie, klientowi nie będzie przysługiwało prawo do odstąpienia od przygotowania domku, a tym samym, prawo do zwrotu opłaty rezerwacyjnej. W przypadku braku wpływu opłaty rezerwacyjnej do dnia wskazanego w formularzu, rezerwacja ulega anulowaniu.",
//         "Opłata rezerwacyjna wpłacona po terminie wskazanym w formularzu przywraca rezerwację, o ile nadal dysponuje wolnymi miejscami.",
//         "Pozostałą część opłaty za wynajem domku (70%) w postaci opłaty za pobyt w domku należy opłacić przelewem do 7 dni przed przyjazdem.",
//       ],
//     },
//     {
//       nr: 4,
//       name: "Zmiana oraz anulowanie rezerwacji przez Klienta",
//       details: [
//         "Zmiana terminu rezerwacji jest możliwa wyłącznie, gdy domek jest dostępny w nowym zaproponowanym przez Klienta terminie. W takim przypadku zmiana terminu rezerwacji nie podlega dodatkowej opłacie. Do 14 dni przed planowanym przyjazdem jest możliwość bezkosztowej zmiany terminu rezerwacji pod warunkiem dostępności.",
//       ],
//     },
//     {
//       nr: 5,
//       name: "Zmiana oraz anulowanie rezerwacji",
//       details: [
//         "Zmiana rezerwacji przez Firma Usługowa Jerzy Góra jest możliwa wyłącznie w przypadku wystąpienia siły wyższej, uniemożliwiającej spełnienie świadczenia ze strony Firmy Usługowej Jerzy Góra . Przez siłę wyższą rozumie się: kataklizmy przyrody, zajęcie domku przez jakikolwiek organ władzy państwowej w jakimkolwiek celu, strajki, wojny i zamieszki oraz pozbawienie przez dostawcę domku prądu, gazu, energii grzewczej lub wody. Wówczas Firma Usługowa Jerzy Góra ma obowiązek zaproponować Klientowi inny termin lub odstąpić od umowy, zwracając Klientowi wpłaconą opłatę rezerwacyjną (anulacja rezerwacji).",
//         "W wyjątkowych sytuacjach (awarii w domku lub innego zdarzenia losowego) Firma Usługowa Jerzy Góra zastrzega sobie możliwość udostępnienia lokalu zamiennego o parametrach i powierzchni podobnej do zarezerwowanego domku, w tej samej miejscowości. W wypadku braku zgody Klienta na dom zastępczy umowa ulega rozwiązaniu, a Firma Usługowa Jerzy Góra ma obowiązek zwrócić Klientowi wpłaconą przez niego opłatę rezerwacyjną.",
//         "Firma Usługowa Jerzy Góra zastrzega sobie prawo do odwołania bez podania powodu rezerwacji w ciągu 24 h od jej dokonania. W przypadku anulowania rezerwacji Klient otrzyma zwrot wszystkich wpłaconych środków.",
//       ],
//     },
//     {
//       nr: 6,
//       name: "Procedura pobytu Klienta",
//       details: [
//         "Pobyt w domku zaczyna się od godziny 15.00 w pierwszym dniu zarezerwowanego terminu. Klient zobowiązany jest dokonać odbioru domku o ustalonej przez Strony godzinie, sprawdzając jego stan techniczny i czystość. W razie jakichkolwiek uwag proszę o natychmiastowe poinformowanie pod podanym nr telefonu. 24 h przed przyjazdem klient powinien skontaktować się z przedstawicielem pod nr tel +48793373246 w celu poinformowania o planowanej godzinie przyjazdu.",
//         "Zakończenie pobytu następuje o godzinie 11:00 w ostatnim dniu zarezerwowanego terminu. Do godz. 11:00 lub innej ustalonej Klient jest zobowiązany zwrócić klucze w wyznaczonym do tego miejscu.",
//         "Klient zobowiązany jest do przestrzegania ciszy nocnej, zasad BHP oraz PPOŻ obiektu. W godzinach od 22:00 do 06:00 zabronione są wszelkie zachowania zakłócające wypoczynek mieszkańców.",
//         "Klient zobowiązuje się do eksploatacji domku zgodnie z jego przeznaczeniem, nie usuwania z domku jakichkolwiek elementów jego wyposażenia i dekoracji, jak również zobowiązuje się do nie kopiowania oddanych mu na czas pobytu kluczy do domku.",
//         "Palenie papierosów w domkach jest surowo zabronione. Klient nie przestrzegający tego zakazu zostanie obciążony opłatą w wysokości 500 złotych, stanowiącą równoważność kosztów prania zasłon i narzut w domku.",
//         "Klient jest zobowiązany każdorazowo zabezpieczyć domek w przypadku jego opuszczenia, zamykając okna i drzwi wejściowe na klucz oraz mieć staranną pieczę nad kluczem.",
//         "Klient zobowiązuje się do dopilnowania, aby liczba osób przebywających z nim w domku nie przekraczała tej, która została określona jako maksymalna w katalogu, na stronie internetowej lub w formularzu rezerwacyjnym.",
//         "Klient oraz osoby mu towarzyszące są zobowiązane do umożliwienia przedstawicielowi Firma Usługowa Jerzy Góra ich czasowego zameldowania w domku.",
//         "Grupa Firma Usługowa Jerzy Góra nie ponosi odpowiedzialności za niedogodności powstałe podczas pobytu gości związane z: pracami budowlanymi lub wykończeniowymi jakie mogą być prowadzone na terenie obiektu w którym usytuowany jest dom jak i wokół niego, przerwaniem z przyczyn niezależnych od obiektu dostawy mediów (m.in. prądu, wody, c.o.), emisjami hałasu z nieruchomości sąsiednich.",
//         "W przypadku naruszenia zasad określonych w niniejszym paragrafie Firma Usługowa Jerzy Góra ma prawo domagać się od Klienta wynagrodzenia za pobyt osoby niezgłoszonej, kosztów doprowadzenia domku do stanu pierwotnego bądź należytego, jak i innych odszkodowań. Klient zobowiązany jest niezwłocznie pokryć tę różnicę.",
//         "W przypadku wyjątkowo rażącego lub chuligańskiego naruszenia zasad określonych w niniejszym paragrafie, Firma Usługowa Jerzy Góra ma prawo do wypowiedzenia umowy ze skutkiem natychmiastowym i usunięcia Klienta wraz z osobami mu towarzyszącymi z domku.",
//         "W trakcie pobytu w domku Klient ma prawo zgłaszać wszelkie uwagi i żądania pod numer telefonu znajdujący się w pisemnej informacji znajdującej się w Domu.",
//         "Klient ponosi odpowiedzialność finansową za zniszczenia powstałe z winy i nieodpowiedniego użytkowania domku przez Klienta.",
//         "W przypadku pobytu wraz ze zwierzęciem klient jest odpowiedzialny za jego opiekę ,sprzątanie po nim oraz za szkody wyrządzone przez niego.",
//       ],
//     },
//     {
//       nr: 7,
//       name: "Dane kontaktowe",
//       mainInfo:
//         "Firma Usługowa Jerzy Góra korzysta z następujących danych kontaktowych:",
//       details: [
//         "nr. telefonu: +48 793373246",
//         "adres strony internetowej: www.sosniegorne.pl",
//         "adres poczty elektronicznej: rezerwacja@sosniegorne.pl",
//       ],
//     },
//     {
//       nr: 8,
//       name: "Odstąpienie od umowy",
//       details: [
//         "Jeżeli Klient wykonuje prawo odstąpienia od umowy, ma obowiązek zapłaty za świadczenia spełnione wobec niego do chwili odstąpienia od umowy. Dotyczy to zarówno zapłaty za przygotowanie domku do jego użytkowania przez Klienta, jak i zapłaty za pobyt w Domu, który został już zrealizowany.",
//         "Odstąpienia od umowy należy dokonać poprzez kontakt telefoniczny lub mailowy wskazany w § 7.",
//       ],
//     },
//     {
//       nr: 9,
//       name: "Reklamacje",
//       details: [
//         "Klient korzysta z prawa do reklamacji usługi i dochodzenia roszczeń z tego tytułu, stosownie do obowiązujących w tej mierze przepisów prawa.",
//         "Warunkiem rozpatrzenia reklamacji jest jej zgłoszenie pisemnie na adres mailowy: rezerwacja@sosniegorne.pl.",
//         "Reklamacje zostaną rozpatrzone w terminie 30 dni od ich otrzymania. Informacja o skutku rozpatrzenia reklamacji zostanie przesłana Klientowi na wskazany przez niego adres poczty elektronicznej, adres pocztowy lub drogą telefoniczną. W przypadku uwzględnienia reklamacji Klient otrzyma rekompensatę pieniężną w wysokości proporcjonalnej do poniesionej szkody.",
//         "Jeżeli Firma Usługowa Jerzy Góra nie uznała reklamacji Klienta, a ten nie zgadza się z jego decyzją, może zwrócić się o mediację do Ośrodka Mediacji przy Okręgowej Izbie Radców Prawnych w Warszawie zgodnie z Regulaminem Ośrodka Mediacji przy Okręgowej Izbie Radców Prawnych w Warszawie. Wniosek o rozpatrzenie sporu należy kierować do Ośrodka Mediacji przy Okręgowej Izbie Radców Prawnych w Warszawie na adres: ul. Żytnia 15 lok. 16, 01-104 Warszawa.",
//       ],
//     },
//   ],
//   contentEN: [
//     {
//       nr: 1,
//       name: "General provisions",
//       details: [
//         "These general terms and conditions for the use of the house, hereinafter referred to as the Terms and Conditions, constitute an integral part of the rental agreement for a residential house for a holiday or tourist stay concluded between the Client and Firma Usługowa Jerzy Góra",
//         "Under the lease agreement, Firma Usługowa Jerzy Góra undertakes to prepare a house for the client and make it available in exchange for salary.",
//       ],
//     },
//     {
//       nr: 2,
//       name: "Reservation",
//       details: [
//         "Before making a reservation and concluding a rental contract, the Customer undertakes to read these Regulations. Making a reservation is tantamount to accepting the Regulations.",
//         "The current description, photos of houses for short-term tourist rental with their detailed description can be found at www.sosniegorne.pl",
//         "The customer can book a house in the following ways: on-line, via the website, by e-mail, via e-mail (e-mail address: rezerwacja@sosniegorne.pl, by phone, at +48793373246",
//         "After booking a house on-line or by e-mail, the customer will receive an e-mail confirmation of the reservation to his mailbox with information about the advance payment, account number and payment date.",
//         "If a reservation is made and the deposit is not received within the time limit specified in the e-mail confirmation of the reservation, the reservation will be canceled.",
//         "Photos, equipment and amenities of the House as well as prices provided on the website are for information, illustrative and advertising purposes only.",
//       ],
//     },
//     {
//       nr: 3,
//       name: "Service fee and payment terms",
//       details: [
//         "The amount of the fee for renting a cottage for a tourist stay is each time specified in the booking confirmation received after making the reservation or by phone when making the reservation.",
//         "The fee indicated in the price offer on the website and in the booking form includes 8% tax on goods and services.",
//         "The fee for renting a house includes: a. a fee for preparing the house, b. a fee for staying in a house for up to 6 people",
//         "Additional fees and deposits may be added to the rental fee, as indicated in the booking form or contract.",
//         "The rental agreement does not include additional cleaning, additional change of linen and towels, pet's stay (information in the booking e-mail if applicable).",
//         "After making the reservation, within 3 days, the customer is obliged to pay to the bank account indicated in the reservation form the reservation fee in the amount of 30% of the fee for renting the house. The date of posting on the account is important. If the payment is not made within this period, we reserve the right to cancel the reservation. The booking fee is non-refundable.",
//         "The reservation fee is only a fee for preparing the house and is not a fee for staying in the house. If the reservation fee is paid on time, the client will not be entitled to withdraw from the preparation of the house, and thus, the right to return the reservation fee. receipt of the reservation fee by the date indicated in the form, the reservation is cancelled.",
//         "The reservation fee paid after the date indicated in the form restores the reservation, provided that there are still free places.",
//         "The remaining part of the fee for renting a house (70%) in the form of a fee for staying in a house should be paid by bank transfer up to 7 days before arrival.",
//       ],
//     },
//     {
//       nr: 4,
//       name: "Change and cancellation of the reservation by the Customer",
//       details: [
//         "Changing the booking date is possible only when the house is available on the new date proposed by the Customer. In this case, changing the booking date is not subject to an additional fee. Up to 14 days before the planned arrival, it is possible to change the booking date free of charge.",
//       ],
//     },
//     {
//       nr: 5,
//       name: "Changing and canceling a reservation",
//       details: [
//         "Changing the reservation by Firma Usługowa Jerzy Góra is possible only in the event of force majeure, preventing the fulfillment of the service by Firma Usługowa Jerzy Góra. Force majeure is understood as: natural disasters, seizure of the house by any state authority for any purpose, strikes, wars and riots, as well as deprivation of electricity, gas, heating energy or water by the supplier of the house, then the Firma Usługowa Jerzy Góra is obliged to offer the Customer a different date or withdraw from the contract, returning the paid reservation fee to the Customer (cancellation of the reservation).",
//         "In exceptional situations (failure in the house or other random event), Firma Usługowa Jerzy Góra reserves the right to provide replacement premises with parameters and an area similar to the booked house, in the same town. Firma Usługowa Jerzy Góra is obliged to return the booking fee paid by the Customer.",
//         "Firma Usługowa Jerzy Góra reserves the right to cancel the reservation without giving a reason within 24 hours of making it. In the event of cancellation of the reservation, the Customer will receive a refund of all funds paid.",
//       ],
//     },
//     {
//       nr: 6,
//       name: "Client stay procedure",
//       details: [
//         "The stay in the house begins at 3.00 pm on the first day of the booked period. The customer is obliged to pick up the house at the time agreed by the Sides, checking its technical condition and cleanliness. In case of any comments, please inform immediately at the telephone number provided. 24 hours before upon arrival, the customer should contact the representative on tel +48793373246 in order to inform about the planned time of arrival.",
//         "The stay ends at 11:00 am. on the last day of the booked period. Until 11:00 am. or another agreed time, the customer is obliged to return the keys to the designated place.",
//         "The client is obliged to respect the quiet hours, health and safety and fire protection rules of the facility. From 22:00 to 06:00, any behavior disturbing the rest of the residents is prohibited.",
//         "The client undertakes to use the house in accordance with its intended purpose, not to remove any elements of its equipment and decorations from the house, and undertakes not to copy the keys to the house given to him for the duration of his stay.",
//         "Smoking in the house is strictly prohibited. A customer who does not comply with this ban will be charged a fee of PLN 500, which is equivalent to the cost of washing curtains and bedspreads in the house.",
//         "The customer is obliged to secure the house each time he leaves it, closing the windows and entrance doors with a key and having careful custody of the key.",
//         "The customer undertakes to ensure that the number of people staying with him in the house does not exceed the maximum number stated in the catalogue, on the website or in the booking form.",
//         "The client and the persons accompanying him are obliged to allow the representative of Firma Usługowa Jerzy Góra to temporarily check in at the cottage.",
//         "Firma Usługowa Jerzy Góra is not responsible for any inconvenience caused during the stay of guests related to: construction or finishing works that may be carried out in the facility where the house is located and around it, interruption of media supplies for reasons beyond the facility's control (m. electricity, water, central heating), noise emissions from neighboring properties.",
//         "In the case of a breach of the rules set out in this paragraph, the Firma Usługowa Jerzy Góra has the right to demand from the Client remuneration for the stay of an unreported person, costs of bringing the house to its original or proper condition, as well as other compensation. The Client is obliged to immediately cover the difference.",
//         "In the case of an exceptionally gross or hooligan violation of the rules set out in this paragraph, the Firma Usługowa Jerzy Góra has the right to terminate the contract with immediate effect and remove the customer together with his accompanying persons from the house.",
//         "During his stay in the house, the Customer has the right to submit any comments and requests to the telephone number provided in the written information in the House.",
//         "The customer is financially responsible for damage caused by the fault and improper use of the house by the customer.",
//         "In the case of staying with an animal, the client is responsible for its care, cleaning up after it and for damage caused by it.",
//       ],
//     },
//     {
//       nr: 7,
//       name: "Contact details",
//       mainInfo: "Firma Usługowa Jerzy Góra uses the following contact details:",
//       details: [
//         "phone number: +48 793373246",
//         "website: www.sosniegorne.pl",
//         "email address: rezerwacja@sosniegorne.pl",
//       ],
//     },
//     {
//       nr: 8,
//       name: "Withdrawal from the contract",
//       details: [
//         "If the Customer uses the right to withdraw from the contract, he is obliged to pay for the services provided to him until the withdrawal from the contract. This applies both to the payment for preparing the house for its use by the Customer, and to payment for the stay in the House that has already been completed.",
//         "Withdrawal from the contract should be made by telephone or e-mail contact indicated in § 7.",
//       ],
//     },
//     {
//       nr: 9,
//       name: "Complaints",
//       details: [
//         "The customer uses the right to complain about the service and pursue claims in this respect, in accordance with applicable law.",
//         "The condition for considering the complaint is its submission in writing to the e-mail address: rezerwacja@sosniegorne.pl.",
//         "Complaints will be considered within 30 days of their receipt. Information about the effect of considering the complaint will be sent to the Customer to the e-mail address, postal address or telephone provided by him. If the complaint is accepted, the Customer will receive monetary compensation in proportion to the damage suffered.",
//         "If the Firma Usługowa Jerzy Góra did not accept the client's complaint and the client does not agree with his decision, he may apply for mediation to the Mediation Center at the District Chamber of Legal Advisers in Warsaw in accordance with the Regulations of the Mediation Center at the District Chamber of Legal Advisers in Warsaw. consideration of the dispute should be directed to the Mediation Center at the District Chamber of Legal Advisers in Warsaw at the address: Żytnia 15/16, 01-104 Warsaw.",
//       ],
//     },
//   ],
// };
// REGULAMINY KONIEC

// ATRAKCJE
export const atractionsData = [
  {
    category: "gastronomia",
    categoryEN: "gastronomy",
    image: "/images/attractions/gastronomy.jpg",
    places: [
      {
        name: "Proste Bistro",
        nameEN: "Proste Bistro",
        icon: <GiMeal />,
        address: "Kazimierza Wielkiego 19, 33-330 Grybów",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.5903458623716!2d20.940627815518813!3d49.62432725442426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de825d91eac39%3A0xbf9909f5658a7c1e!2sProste%20Bistro%20Gryb%C3%B3w!5e0!3m2!1spl!2spl!4v1678571561569!5m2!1spl!2spl",
      },
      {
        name: "Afiyet Kebab",
        nameEN: "Afiyet Kebab",
        icon: <GiMeal />,
        address: "Grunwaldzka 14, 33-330 Grybów",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.5759854071757!2d20.94867481551882!3d49.624597954404905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de9c3bb3aefcd%3A0xb76988fa00ca6c07!2sAfiyet%20Kebab!5e0!3m2!1spl!2spl!4v1678579833673!5m2!1spl!2spl",
      },
      {
        name: "Browar Grybów",
        nameEN: "Browar Grybów",
        icon: <GiBeerStein />,
        address: "Siołkowa 264, 33-330 Siołkowa",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d323.0809791114899!2d20.912007123621965!3d49.62324359140846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de9b557c0b293%3A0x91f6f9305524cde4!2sBrowar%20Pilsweizer%20S.A.!5e0!3m2!1spl!2spl!4v1678644978694!5m2!1spl!2spl",
      },
      {
        name: "Stołówka miejska",
        nameEN: "Stołówka miejska",
        icon: <GiMeal />,
        address: "Ogrodowa 4, 33-330 Grybów",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.5431741764846!2d20.93995301551883!3d49.62521645436092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de825c1a53eeb%3A0xe8e74dd6552cc67e!2zU3RvxYLDs3drYSBNaWVqc2th!5e0!3m2!1spl!2spl!4v1678579956989!5m2!1spl!2spl",
      },
      {
        name: "Słoneczne Tarasy",
        nameEN: "Słoneczne Tarasy",
        icon: <GiMeal />,
        address: "Biała Niżna 652a, 33-330 Biała Niżna",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8791352139115!2d20.96615298472745!3d49.628107126437904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dc27eb33f9cc3%3A0x893ecc8823281919!2sRestauracja%20Hotelu%20S%C5%82oneczne%20Tarasy%20Dom%20weselny!5e0!3m2!1spl!2spl!4v1679059060288!5m2!1spl!2spl",
      },
      {
        name: "Pizzeria Family",
        nameEN: "Pizzeria Family",
        icon: <GiFullPizza />,
        address: "Tadeusza Kościuszki 9, 33-330 Grybów",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.610659402134!2d20.94510679095164!3d49.62394433470365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de8279596221d%3A0x97afa633ac8b1951!2sFamily%20Pizza!5e0!3m2!1spl!2spl!4v1679059150741!5m2!1spl!2spl",
      },
      {
        name: "Pizzeria Bazyliszek",
        nameEN: "Pizzeria Bazyliszek",
        icon: <GiFullPizza />,
        address: "Tadeusza Kościuszki 5, 33-330 Grybów",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.601739013732!2d20.94365083098932!3d49.62411248846307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de939fd3290bd%3A0xf7f420c331006a6d!2sPizza%20Bazyliszek%20Club!5e0!3m2!1spl!2spl!4v1679059248384!5m2!1spl!2spl",
      },
      {
        name: "Pizzeria Rynek",
        nameEN: "Pizzeria Rynek",
        icon: <GiFullPizza />,
        address: "Rynek 19, 33-330 Grybów",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2173.3289141846076!2d20.943179309806833!3d49.62531006774123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de82605ea73b7%3A0xbb42a8185ff65641!2sPizzeria!5e0!3m2!1spl!2spl!4v1679059406428!5m2!1spl!2spl",
      },
    ],
  },
  {
    category: "sport",
    categoryEN: "sport",
    image: "/images/attractions/sport.jpg",
    places: [
      {
        name: "Centrum Sportów Zimowych Ptaszkowa",
        nameEN: "Winter Sports Center Ptaszkowa",
        icon: <FaSkiing />,
        address: "Ptaszkowa 883, 33-333 Ptaszkowa",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34782.12739402959!2d20.81113636371347!3d49.612888985571296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de883ed37ded3%3A0xbbc001ff0c75b89c!2sCentrum%20Sport%C3%B3w%20Zimowych%20Ptaszkowa!5e0!3m2!1spl!2spl!4v1678651918791!5m2!1spl!2spl",
      },
      {
        name: "Stacja Narciarska w Kamiannej",
        nameEN: "Ski Station in Kamianna",
        icon: <FaSkiing />,
        address: "Stacja Narciarska, 33-336 Łabowa",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2589.938541757759!2d20.93128801551541!3d49.52343596160335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dddd2845f0ff9%3A0x6b8f6fa6f5de2841!2sStacja%20Narciarska%20w%20Kamiannej%20KAMIANNASKI!5e0!3m2!1spl!2spl!4v1679059912870!5m2!1spl!2spl",
      },
      {
        name: "Cieniawa-Ski. Stacja narciarska",
        nameEN: "Cieniawa-Ski. Ski Station",
        icon: <FaSkiing />,
        address: "Cieniawa 290, 33-333 Cieniawa",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.637028846011!2d20.824565716846198!3d49.62344725511347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de8a1dc56006d%3A0x4f1424493df7d3dc!2sCieniawa-Ski.%20Stacja%20narciarska!5e0!3m2!1spl!2spl!4v1679059982676!5m2!1spl!2spl",
      },
      {
        name: "Lodowisko",
        nameEN: "Ice rink",
        icon: <GiIceSkate />,
        address: "33-330 Biała Niżna",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14616.505959498982!2d20.967833117697175!3d49.638138019241346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dc27a696ac7c5%3A0x194b3f8e4eec83b5!2sLODOWISKO%2FKORT%20TENISOWY!5e0!3m2!1spl!2spl!4v1678652064607!5m2!1spl!2spl",
      },
      {
        name: "Aquapark w Muszynie",
        nameEN: "Aquapark in Muszyna",
        icon: <FaSwimmer />,
        address: "Złockie 107, 33-370 Złockie",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24721.494260923202!2d20.868094832723628!3d49.36110069899488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e77c263ef3941%3A0x7d8602aaf95e7234!2sAquapark%20w%20Muszynie!5e0!3m2!1spl!2spl!4v1678651972785!5m2!1spl!2spl",
      },
      {
        name: "Kryta Pływalnia MOSiR",
        nameEN: "Swimming pool MOSiR",
        icon: <FaSwimmer />,
        address: "Nadbrzeżna 34, 33-300 Nowy Sącz",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.566899771907!2d20.712015573336846!3d49.618939627533585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de546b3165acd%3A0xe64757d7c65c2f48!2sKryta%20P%C5%82ywalnia%20MOSiR!5e0!3m2!1spl!2spl!4v1679059646810!5m2!1spl!2spl",
      },
      {
        name: "Pływania OSiR",
        nameEN: "Swimming pool OSiR",
        icon: <FaSwimmer />,
        address: "Sportowa 2, 38-300 Gorlice",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5165.972025799539!2d21.155097493885727!3d49.65456281242128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dc68bf7396df3%3A0xfa103fb8fdb78dfe!2zUMWCeXdhbmlhICJPU2lSIg!5e0!3m2!1spl!2spl!4v1679059724253!5m2!1spl!2spl",
      },
    ],
  },
  {
    category: "historia",
    categoryEN: "history",
    image: "/images/attractions/history.jpg",
    places: [
      {
        name: "Muzeum Parafialne",
        nameEN: "Museum Parafialne",
        icon: <MdMuseum />,
        address: "Kościelna 3, 33-330 Grybów",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8693.447256162515!2d20.93556765246368!3d49.62457255686518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de828892330db%3A0x5503651031ce6d14!2sMuzeum%20Parafialne!5e0!3m2!1spl!2spl!4v1678652215854!5m2!1spl!2spl",
      },
      {
        name: "Zamek Stara Baśń",
        nameEN: "Castle Stara Baśń",
        icon: <GiCastle />,
        address: "Grottgera 15, 33-330 Grybów",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8693.447256162515!2d20.93556765246368!3d49.62457255686518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dc29df1d1f9b3%3A0x661359aa5866259f!2zWmFtZWsgU3RhcmEgQmHFm8WE!5e0!3m2!1spl!2spl!4v1678652250859!5m2!1spl!2spl",
      },
      {
        name: "Rynek XIX w.",
        nameEN: "Rynek XIX w.",
        icon: <GiWhiteTower />,
        address: "Rynek, 33-330 Grybów",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.5589936304013!2d20.942776115518846!3d49.62491825438211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de8261658bde3%3A0x13a172b0d0f5f995!2sRynek%20G%C5%82%C3%B3wny%20w%20Grybowie!5e0!3m2!1spl!2spl!4v1678652369945!5m2!1spl!2spl",
      },
      {
        name: "Bazylika Mniejsza pw. św. Katarzyny w Grybowie",
        nameEN: "Minor Basilica of St. st. Catherine in Grybów",
        icon: <MdChurch />,
        address: "Kościelna 3, 33-330 Grybów",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5169.045275327648!2d20.942983744089886!3d49.625603569904264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de828a02edfcf%3A0x41424c3764201ea1!2sBazylika%20Mniejsza%20pw.%20%C5%9Bw.%20Katarzyny%20w%20Grybowie!5e0!3m2!1spl!2spl!4v1679060463396!5m2!1spl!2spl",
      },
      {
        name: "Dwór Hoschów",
        nameEN: "Manor Hoschów",
        icon: <MdMuseum />,
        address: "Rynek 10, 33-330 Grybów",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1292.2810181023908!2d20.944240316526553!3d49.62486090107432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de99ba228cce9%3A0x7c08114795148f1e!2zRHfDs3IgSG9zY2jDs3c!5e0!3m2!1spl!2spl!4v1679060610056!5m2!1spl!2spl",
      },
      {
        name: "Muzeum Pszczelarstwa w Stróżach",
        nameEN: "Beekeeping Museum in Stróże",
        icon: <MdMuseum />,
        address: "Stróże 235, 33-331 Stróże",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12281.769272856875!2d20.953437021712286!3d49.67457140781393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de94fa400e087%3A0xfcd3c5f938e34bf5!2sMuzeum%20Pszczelarstwa%20w%20Str%C3%B3%C5%BCach!5e0!3m2!1spl!2spl!4v1679060789112!5m2!1spl!2spl",
      },
      {
        name: "Muzeum Pszczelarstwa w Kamiannej",
        nameEN: "Beekeeping Museum in Kamianna",
        icon: <MdMuseum />,
        address: "33-336 Kamianna",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2177.8115339361607!2d20.934059696458668!3d49.524749349481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ddc304ec0d499%3A0x432cf56d440b07aa!2sMuzeum%20Pszczelarstwa%20w%20Kamiannej!5e0!3m2!1spl!2spl!4v1679061132185!5m2!1spl!2spl",
      },

      {
        name: "Miasteczko Galicyjskie",
        nameEN: "Galician town",
        icon: <MdMuseum />,
        address: "Lwowska 226, 33-300 Nowy Sącz",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.754990963003!2d20.737832115518668!3d49.621223554645205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de57a989faa01%3A0x6495817f74ba7f9!2sMiasteczko%20Galicyjskie.%20Oddzia%C5%82%20Muzeum%20Okr%C4%99gowego%20w%20Nowym%20S%C4%85czu!5e0!3m2!1spl!2spl!4v1679060894900!5m2!1spl!2spl",
      },
      {
        name: "Skansen Wsi Pogórzańskiej",
        nameEN: "Village open-air museum Pogórzańskiej",
        icon: <MdMuseum />,
        address: "38-311 Szymbark",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1536.8722403554086!2d21.09319113737052!3d49.62224671393384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dc48a95555555%3A0x4c065d4bf19b0aaa!2sSkansen%20Wsi%20Pog%C3%B3rza%C5%84skiej%20im.%20prof.%20R.%20Reinfussa!5e0!3m2!1spl!2spl!4v1679061022513!5m2!1spl!2spl",
      },
    ],
  },
  {
    category: "inne",
    categoryEN: "others",
    image: "/images/attractions/inne.jpg",
    places: [
      {
        name: "Mini Zoo Hacjenda Alpaka",
        nameEN: "Mini Zoo Hacjenda Alpaka",
        icon: <GiCamel />,
        address: "Ubiad 47, 33-311",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.916522460321!2d20.707091173332476!3d49.68289920463689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473df1cb0f77841d%3A0x32de667a343a4dae!2sMini%20Zoo%20Hacjenda%20Alpaka!5e0!3m2!1spl!2spl!4v1679430591400!5m2!1spl!2spl",
      },
      {
        name: "Pijalnia Główna w Krynicy Zdroju",
        nameEN: "Pijalnia Główna in Krynica Zdrój",
        icon: <MdOutlineSpa />,
        address: "aleja Nowotarskiego 9/4, 33-380 Krynica-Zdrój",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5191.15502009479!2d20.948442667722713!3d49.41689491537672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e7621718bd4d1%3A0xa23ce35a0f2918d1!2sPijalnia%20G%C5%82%C3%B3wna%20w%20Krynicy%20Zdroju!5e0!3m2!1spl!2spl!4v1678652518114!5m2!1spl!2spl",
      },
      {
        name: "Wieża widokowa w Krynicy",
        nameEN: "Observation Tower in Krynica Zdrój",
        icon: <FaRegEye />,
        address: "Słotwińska 51A, 33-380 Krynica-Zdrój",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.8536306960905!2d20.923313415512208!3d49.430581168201165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ddf546a7da1dd%3A0x45b713e7bd907bcf!2sWie%C5%BCa%20widokowa%20Krynica-Zdr%C3%B3j!5e0!3m2!1spl!2spl!4v1678652563251!5m2!1spl!2spl",
      },
      {
        name: "Wieża widokowa Jaworze",
        nameEN: "Observation Tower Jaworze",
        icon: <FaRegEye />,
        address: "33-334 Ptaszkowa",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.218106165796!2d20.910885315517156!3d49.57477465795151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de78d05f199ab%3A0xd14e53094b2d42fb!2sWie%C5%BCa%20widokowa%20Jaworze%20882%20m%20n.p.m.!5e0!3m2!1spl!2spl!4v1679061728020!5m2!1spl!2spl",
      },
      {
        name: "Skamieniałe Miasto",
        nameEN: "Stone City",
        icon: <GiStonePile />,
        address: "Krynicka, 33-190 Ciężkowice",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4333.1071284090585!2d20.957715814395296!3d49.77702057777845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d95401dd3bab5%3A0x72473fe2b6a953f!2sSkamienia%C5%82e%20Miasto%20Rezerwat%20Przyrody%20Nieo%C5%BCywionej!5e0!3m2!1spl!2spl!4v1679061927042!5m2!1spl!2spl",
      },
      {
        name: "Diable Skały",
        nameEN: "Devil Rocks",
        icon: <GiStonePile />,
        address: "33-322 Bukowiec",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.8738027826635!2d20.8462328155231!3d49.750818245408574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ded1be7f5b531%3A0x3fe99b4cb43ba3a1!2sDiable%20Ska%C5%82y!5e0!3m2!1spl!2spl!4v1679062160357!5m2!1spl!2spl",
      },
      {
        name: "Jezioro Klimkowskie",
        nameEN: "Klimkówka Lake",
        icon: <MdWater />,
        address: "Klimkówka 117, 38-312",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20711.3558623247!2d21.090908966343516!3d49.54267172622221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ddac2d0d46c61%3A0x99e3746cbcc941e9!2sJezioro%20Klimkowskie!5e0!3m2!1spl!2spl!4v1678652656746!5m2!1spl!2spl",
      },
      {
        name: "Kino Biała",
        nameEN: "Cinema Biała",
        icon: <MdLocalMovies />,
        address: "Tadeusza Kościuszki 7, 33-330 Grybów",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.627676410054!2d20.94616281551871!3d49.62362355447423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de827bf0c8a73%3A0xff53dd82906701ab!2sKino%20Bia%C5%82a!5e0!3m2!1spl!2spl!4v1679061517955!5m2!1spl!2spl",
      },
    ],
  },
];
// ATRAKCJE KONIEC
