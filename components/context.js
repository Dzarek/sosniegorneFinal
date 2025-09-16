import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [plLanguage, setPlLanguage] = useState(true);
  const [offset, setOffset] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [logoInvert, setLogoInvert] = useState(false);

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
        logoInvert,
        setLogoInvert,
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
