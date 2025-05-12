import React from "react";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  onSearch: (text: string) => void;
  searchText: string;
};

export const Header = ({ onSearch, searchText }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header
      className="relative bg-cover bg-center h-[328px] flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage: `
    radial-gradient(
  30% 80% at 50% 50%, 
  rgba(0, 0, 0, 0.3) 25%, 
  rgba(0, 0, 0, 0.7) 100%
),
    url('/portada.jpg')
  `,
        backgroundPosition: "center 40%",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="absolute inset-0"></div>

      <div className="relative z-10 text-center w-full sm:max-w-[75%] ">
        <img
          src={"/brand-logo.svg"}
          alt="Rick and Morty"
          className="mx-auto mb-6 w-72 cursor-pointer"
          onClick={() => navigate("/")}
        />

        <div
          className="flex items-center bg-black border border-white/30 rounded-lg px-4 py-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        >
          <svg
            className="w-5 h-5 text-lime-400 mr-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M16.65 11.5a5.15 5.15 0 11-10.3 0 5.15 5.15 0 0110.3 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Buscar personaje por nombre"
            value={searchText} // <-- controla el valor
            onChange={(e) => onSearch(e.target.value)}
            className="bg-transparent text-white placeholder-white w-full focus:outline-none"
          />
        </div>
      </div>
    </header>
  );
};
