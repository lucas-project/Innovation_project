import React from "react";

import TopBar from "../../home-topBar";

import HomeSlider from "../../home-slider";
// Footer Components
import HomeFooterJoinUs from "../../home-footer-joinUs";
import Footer from "../../Footer";
import GlobalStyle from "../../GlobalStyle";

import HomePopularTag from "../../home-popular-tag";
import HomeRepertoire from "../../home-repertoire";
import HomeComposer from "../../home-composer";
import HomeInstrument from "../../home-instrument";

import SearchBar from "../../home-searchBar";
const home = () => {
  return (
   
      <div className='App'>
          <br/><br/><br/><br/><br/><br/><br/>
      <header>
        <GlobalStyle />
        <TopBar />
        <SearchBar />
        <HomeSlider />
      </header>

      <main>

        <HomePopularTag />
        <HomeRepertoire />
        <HomeComposer />
        <HomeInstrument />
      </main>

      <footer>
        <HomeFooterJoinUs />
        <Footer />
      </footer>
    </div>
    
  );
};

export default home;
