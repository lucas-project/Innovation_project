import React from "react";

import TopBar from "../../TopBar";

import Hero from "../../Hero";
// Footer Components
import TeachBar from "../../TeachBar";
import Footer from "../../Footer";
import GlobalStyle from "../../GlobalStyle";
import CurrentLearning from "../../CurrentLearning";
import LearningNext from "../../LearningNext";
import HomeRepertoire from "../../home-repertoire";
import HomeComposer from "../../home-composer";
import HomeInstrument from "../../home-instrument";

const home = () => {
  return (
   
      <div className='App'>
          <br/><br/><br/><br/><br/><br/><br/>
      <header>
        <GlobalStyle />
        <TopBar />
        <Hero />
      </header>

      <main>
        <CurrentLearning />
        <LearningNext />
        <HomeRepertoire />
        <HomeComposer />
        <HomeInstrument />
      </main>

      <footer>
        <TeachBar />
        <Footer />
      </footer>
    </div>
    
  );
};

export default home;
