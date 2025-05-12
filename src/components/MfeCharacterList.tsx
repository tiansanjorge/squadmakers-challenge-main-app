import React, { Suspense, lazy } from "react";
import { ClipLoader } from "react-spinners";

const MfeList = lazy(() => import("listApp/CharacterList"));

type Props = {
  searchText: string;
  resetSearch: () => void;
};

export const MfeListWrapper = ({ searchText, resetSearch }: Props) => (
  <Suspense
    fallback={
      <div className="tw-flex tw-justify-center tw-items-center tw-h-32">
        <div className="tw-w-fit">
          <ClipLoader
            color="#B6DA8B"
            size={100}
            cssOverride={{
              display: "block",
              margin: "5% auto",
              borderWidth: "6px",
            }}
          />
        </div>
      </div>
    }
  >
    <MfeList searchText={searchText} resetSearch={resetSearch} />
  </Suspense>
);
