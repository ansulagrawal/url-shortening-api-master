import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import BoastLinksSection from "./components/BoastLinksSection";
import UrlShortnerSection from "./components/UrlShortnerSection";
import AdvanceStatstics from "./components/AdvanceStatstics";
import DisplayUrl from "./components/DisplayUrl";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <UrlShortnerSection />
      <DisplayUrl />
      <AdvanceStatstics />
      <BoastLinksSection />
      <Footer />
    </>
  );
}

export default App;
