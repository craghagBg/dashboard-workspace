import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="p-3 text-center">
    <h1>DASHBOARD WORKSPACE</h1>
    <p>Awesome tool for professional traders.</p>
    <Link to="dashboard" className="btn btn-primary btn-lg">
      Start
    </Link>
  </div>
);

export default HomePage;
