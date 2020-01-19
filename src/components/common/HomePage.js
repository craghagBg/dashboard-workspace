import React from "react";
import Header from "../header/Header";

const HomePage = () => (
  <>
    <Header />
    <div className="p-3 text-center">
      <h1>DASHBOARD WORKSPACE</h1>
      <p>Awesome tool for professional traders.</p>
      <a href="/dashboard" className="btn btn-primary btn-lg">
        Start
      </a>
    </div>
  </>
);

export default HomePage;
