import { render, screen } from "@testing-library/react";
import { Characters } from "./Characters";
import { useOutletContext } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useOutletContext: jest.fn(),
}));

jest.mock("../components/MfeCharacterList", () => ({
  MfeListWrapper: ({ searchText }: any) => <div>Lista: {searchText}</div>,
}));

test("consume el contexto y renderiza MfeListWrapper", () => {
  (useOutletContext as jest.Mock).mockReturnValue({
    searchText: "Summer",
    resetSearch: () => {},
  });

  render(<Characters />);
  expect(screen.getByText("Lista: Summer")).toBeInTheDocument();
});
