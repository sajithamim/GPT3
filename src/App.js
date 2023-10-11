import React from "react";

import "./App.css";
import { Article, Brand, Cta, Feature, Navbar } from "./components/index";
import {
  Footer,
  Blog,
  Features,
  Header,
  WhatGPT3,
  Possibility,
} from "./containers/index";

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
