import React from "react";
import { lazy, Suspense } from "react";

const MfeList = lazy(() => import("listApp/CharacterList"));

export const MfeListWrapper = () => (
  <Suspense fallback={<p>Cargando Microfrontend List...</p>}>
    <MfeList />
  </Suspense>
);
