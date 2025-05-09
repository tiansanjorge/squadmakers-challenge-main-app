import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${"/portada.jpg"})` }}
    >
      {/* Overlay negro con opacidad */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Contenido centrado */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-12/12 sm:w-10/12 md:w-8/12 lg:w-6/12 p-8 rounded-xl text-center text-white">
          <img
            src="/brand-logo.svg"
            alt="Rick and Morty logo"
            className="mx-auto mb-6"
          />
          <h2 className="text-2xl font-semibold mb-4">
            Bienvenido a Rick and Morty
          </h2>
          <p className="mb-6">
            En esta prueba, evaluaremos su capacidad para construir la
            aplicación mediante el análisis de código y la reproducción del
            siguiente diseño.
          </p>
          <button
            className="bg-lime-500 hover:bg-lime-600 text-black font-semibold py-2 px-6 rounded-full shadow-md transition"
            onClick={() => navigate("/characters")}
          >
            Comenzar
          </button>
        </div>
      </div>
    </div>
  );
};
