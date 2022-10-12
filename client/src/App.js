import React, { useState } from "react";
import Navbar from "./components/pages/Navbar/Navbar";
import Composer from "./components/pages/Composer/Composer";
import Repertoire from "./components/pages/Repertoire/Repertoire";
import Instrument from "./components/pages/Instrument/Instrument";
import Recommendation from "./components/pages/Recommendation/Recommendation";
import Forum from "./components/pages/Forum/Forum";
import Home from "./components/pages/Home/Home";
import Sidebar from "./components/pages/Sidebar/Sidebar";
import { Routes, Route, Link} from "react-router-dom";
import Profile from "./components/pages/Profile/Profile";
import ComposerMongodb from "./components/pages/Composer/Profile";
import Ailis from "./components/pages/Recommendation/Ailis";
import Flute from "./components/pages/Instrument/Flute";
import Search from "./components/pages/Search/Search";
import InstrumentChild from "./components/pages/Instrument/InstrumentChild";


const App = () => {
    const [isopen, setisopen] = useState(false);
    const toggle = () => {
        setisopen(!isopen);
    };
  return (
    <>
    <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />

      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/api/composers" element={<Composer />} />
          <Route path="/repertoire" element={<Repertoire />} />
          <Route path="/instrument" element={<Instrument />} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/api/composers/:id" element={<ComposerMongodb />} />

          <Route path="/recommendation/ailis" element={<Ailis />} />
          <Route path="/search/*" element={<Search />} />
          <Route path="/recommendation/flute" element={<Flute />} />
          <Route path="/instrument/:instrument" element={<InstrumentChild />} />

      </Routes>
      
        <br/><br/><br/>
        </>
    
  );
};

export default App;
