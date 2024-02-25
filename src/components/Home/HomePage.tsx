import React from 'react';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Weather from "./Weather";
import Rain from './Rain';
import "./navbar.css";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Dashboard />
      <Weather />
      <Rain />
    </>
  );
};

export default HomePage;
