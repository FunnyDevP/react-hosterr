import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = (): JSX.Element => (
  <div className="main">
    <Header />
    <div style={{ border: "1px solid" }}>2</div>
    <Footer />
  </div>
);

export default App;
