import React, { useState } from "react";
import Navbar from "./components/nav/Navbar/Navbar";
import Composer from "./components/nav/Composer/Composer";
import Repertoire from "./components/nav/Repertoire/Repertoire";
import Instrument from "./components/nav/Instrument/Instrument";
import Recommendation from "./components/nav/Recommendation/Recommendation";
import Forum from "./components/nav/Forum/Forum";
import Home from "./components/nav/Home/Home";
import Sidebar from "./components/nav/Sidebar/Sidebar";
import { Routes, Route, Link} from "react-router-dom";


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

        <Route path="/home" element={<Home />} />
          <Route path="/composer" element={<Composer />} />
          <Route path="/repertoire" element={<Repertoire />} />
          <Route path="/instrument" element={<Instrument />} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/forum" element={<Forum />} />

      </Routes>
      
        <br/><br/><br/>
        </>
    
  );

};

export default App;
