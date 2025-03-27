import React, { createContext } from "react";

interface PageContextType {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

export const pageContext = createContext<PageContextType | null>(null);
