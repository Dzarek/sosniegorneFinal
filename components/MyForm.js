import { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { useGlobalContext } from "./context";
import Link from "next/link";

const MyForm = () => {
  const { plLanguage } = useGlobalContext();

  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [box, setBox] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_ACCOUNT
      )
      .then(
        () => {
          e.target.reset();
          setStatus("SUCCESS");
          setTimeout(() => {
            setStatus("");
            setName("");
            setSubject("");
            setEmail("");
            setPhone("");
            setText("");
            setBox(false);
          }, 3000);
        },
        () => {
          setStatus("ERROR");
          setTimeout(() => {
            setStatus("");
            setName("");
            setSubject("");
            setEmail("");
            setPhone("");
            setText("");
            setBox(false);
          }, 3000);
        }
      );
  };

  return (
    <>
      <Wrapper onSubmit={(e) => sendEmail(e)}>
        <div className="inputs">
          <input
            type="text"
            name="name"
            placeholder={
              plLanguage ? "Imię i Nazwisko" : "First name and last name"
            }
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="subject"
            placeholder={plLanguage ? "Temat" : "Subject"}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="inputs">
          <input
            type="email"
            name="email"
            placeholder={plLanguage ? "Adres E-mail" : "E-mail Adress"}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            name="phone"
            placeholder={plLanguage ? "Numer Telefonu" : "Phone Number"}
            minLength={9}
            maxLength={20}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <br />
        <textarea
          placeholder={plLanguage ? "Twoja wiadomość..." : "Your message"}
          name="message"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="labelCookieContainer">
          <label className="labelCheck" htmlFor="accept">
            <p>
              <input
                type="checkbox"
                id="accept"
                name="accept"
                required
                checked={box}
                onChange={() => setBox(!box)}
              />
              {plLanguage
                ? "Wyrażam zgodę na przetwarzanie danych osobowych w celu odpowiedzi na mojego e-maila"
                : "I agree to the processing of personal data in order to reply to my e-mail"}
              <span className="cookieLink">
                <Link href="/polityka-prywatnosci">
                  {plLanguage ? "(Polityka Prywatności)" : "(Privacy Policy)"}
                </Link>
              </span>
            </p>
          </label>
        </div>
        <>
          {status === "SUCCESS" ? (
            <p className="messageAlert">
              {plLanguage ? "Wiadomość wysłana!" : "Message sent!"}{" "}
            </p>
          ) : (
            <button>{plLanguage ? "Wyślij" : "Send"}</button>
          )}
          {status === "ERROR" && (
            <p className="messageAlert">
              {plLanguage
                ? "ups... coś poszło nie tak!"
                : "ups... something went wrong!"}
            </p>
          )}
        </>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    width: 95%;
    height: auto;
  }
  input,
  select {
    padding: 15px 20px;
    font-size: 1rem;
    border: 2px solid var(--thirdColor);
    font-family: var(--textFont);
    @media screen and (max-width: 800px) {
      font-size: 1rem;
      width: 100%;
      padding: 10px 20px;
    }
    ::placeholder {
      color: #888;
    }
  }
  .selectDisabled {
    opacity: 0.4;
  }
  .inputName {
    width: 100%;
    margin-bottom: 2vh;
  }
  .inputs {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2vh;
    @media screen and (max-width: 800px) {
      flex-direction: column;
      margin-bottom: 0;
    }
    input {
      width: 48%;
      @media screen and (max-width: 800px) {
        width: 100%;
        margin-bottom: 2vh;
      }
    }
  }
  textarea {
    margin-top: -2vh;
    width: 100%;
    min-height: 20vh;
    padding: 20px 20px;
    font-size: 1rem;
    border: 2px solid var(--thirdColor);
    font-family: var(--textFont);
    line-height: 1.2;
    @media screen and (max-width: 800px) {
      font-size: 1rem;
      padding: 15px 20px;
      min-height: 20vh;
      border: 2px solid var(--secondaryColor);
    }
  }
  .labelCookieContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: var(--textFont);
    font-size: 1rem;
    line-height: 1.2;
    label {
      margin: 3vh auto 0;
      @media screen and (max-width: 800px) {
        font-size: 1rem;
      }
      input {
        margin-right: 10px;
        cursor: pointer;
        @media screen and (max-width: 800px) {
          font-size: 1rem;
          width: auto;
          padding: 0px;
          width: 18px;
          height: 18px;
        }
      }
    }
    .cookieLink a {
      color: var(--secondaryColor3);
      cursor: pointer;
      /* margin-left: 5px; */
      font-weight: 600;
      text-decoration: none;
    }
  }
  button {
    width: 20%;
    border: none;
    font-size: 1.2rem;
    font-family: var(--navFont);
    text-transform: uppercase;
    padding: 10px 0px;
    margin: 5vh auto 0;
    font-weight: 500;
    color: #fff;
    background: var(--secondaryColor);
    transition: 0.4s;
    cursor: pointer;
    :hover {
      background: var(--secondaryColor2);
    }
    @media screen and (max-width: 800px) {
      width: 50%;
      padding: 10px 0px;
      font-weight: 500;
    }
  }
  .messageAlert {
    font-family: var(--textFont);
    font-size: 1.2rem;
    text-transform: uppercase;
    color: var(--secondaryColor);
    margin-top: 3vh;
  }
`;

export default MyForm;
