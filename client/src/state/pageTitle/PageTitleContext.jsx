import { useState, createContext } from "react";

// Create a context for the page title
export const PageTitleContext = createContext({
  pageTitle: "",
  setPageTitle: () => {},
});

// Create a provider component
export const PageTitleProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("Dashboard");

  return (
    <PageTitleContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
};
