import React from "react";
import { MfeListWrapper } from "../components/MfeCharacterList";
import { useOutletContext } from "react-router-dom";

type ContextType = {
  searchText: string;
  resetSearch: () => void;
};

export const Characters = () => {
  const { searchText, resetSearch } = useOutletContext<ContextType>();
  return <MfeListWrapper searchText={searchText} resetSearch={resetSearch} />;
};
