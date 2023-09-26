import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [plLanguage, setPlLanguage] = useState(true);
  const [offset, setOffset] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    fetch("http://ip-api.com/json")
      .then((res) => res.json())
      .then((response) => {
        if (response.countryCode !== "PL") {
          setPlLanguage(false);
        }
      })
      .catch((err) => {
        console.log("Request failed:", err);
      });
  }, []);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
    setWindowHeight(window.innerHeight - 150);
  }, []);

  return (
    <AppContext.Provider
      value={{
        plLanguage,
        setPlLanguage,
        offset,
        setOffset,
        windowHeight,
        setWindowHeight,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
