import logo from "/brand-logo.svg";

export const Header = () => {
  return (
    <header
      className="relative bg-cover bg-center h-64 flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage: `url('/portada.jpg')`,
        backgroundPositionY: "40%",
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center w-full max-w-3xl">
        <img src={logo} alt="Rick and Morty" className="mx-auto mb-6 w-72" />

        <div className="flex items-center bg-black bg-opacity-40 border border-white/30 rounded-lg px-4 py-2">
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
            className="bg-transparent text-white placeholder-white w-full focus:outline-none"
          />
        </div>
      </div>
    </header>
  );
};
