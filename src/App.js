import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";

export default function App() {
  return (
    <div>
      <Navbar />
      <Card img="Cats.png" rating="5.0" reviewCount={6} country="USA" />
    </div>
  );
}
