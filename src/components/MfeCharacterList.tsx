import React, { Suspense, lazy } from "react";

const MfeList = lazy(() => import("listApp/CharacterList"));

type Props = {
  searchText: string;
  resetSearch: () => void;
};

export const MfeListWrapper = ({ searchText, resetSearch }: Props) => (
  <Suspense fallback={<p>Cargando Microfrontend List...</p>}>
    <MfeList searchText={searchText} resetSearch={resetSearch} />
  </Suspense>
);
