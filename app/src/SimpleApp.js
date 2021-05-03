import "./SimpleApp.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components";
import PagesRouter from "./routes";

const SimpleApp = () => (
  <Router>
    <Header />
    <PagesRouter />
  </Router>
);

export default SimpleApp;
