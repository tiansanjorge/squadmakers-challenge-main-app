import { render, screen } from "@testing-library/react";
import { Layout } from "./Layout";
import { MemoryRouter } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Outlet: () => <div>Contenido de prueba</div>,
}));

test("renderiza Header, Footer y Outlet", () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );

  expect(screen.getByPlaceholderText(/Buscar personaje/i)).toBeInTheDocument();
  expect(screen.getByText(/Contenido de prueba/i)).toBeInTheDocument();
  expect(screen.getByText(/The Cartoon Network/i)).toBeInTheDocument();
});
