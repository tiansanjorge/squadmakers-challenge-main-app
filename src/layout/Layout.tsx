import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Layout = () => {
  const [searchText, setSearchText] = useState("");
  const resetSearch = () => setSearchText("");
  return (
    <div className="min-h-screen flex flex-col bg-[#E6E7E3]">
      <Header onSearch={setSearchText} searchText={searchText} />
      <main className="flex-grow">
        <Outlet context={{ searchText, resetSearch }} />
      </main>
      <Footer />
    </div>
  );
};
