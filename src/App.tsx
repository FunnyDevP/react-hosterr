import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

const App = (): JSX.Element => (
  <div className="main">
    <Header />
    <div>
      <Content />
    </div>
    <Footer />
  </div>
);

export default App;
