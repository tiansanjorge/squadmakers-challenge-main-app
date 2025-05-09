import { render, screen, fireEvent } from "@testing-library/react";
import { Home } from "./Home";
import { MemoryRouter, useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

test("al hacer clic en Comenzar navega a /characters", () => {
  const navigateMock = jest.fn();
  (useNavigate as jest.Mock).mockReturnValue(navigateMock);

  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByText("Comenzar"));
  expect(navigateMock).toHaveBeenCalledWith("/characters");
});
