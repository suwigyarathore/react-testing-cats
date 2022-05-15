import React, { useState, useEffect } from "react";
import "./Pets.css";
import Filter from "../filter/Filter";
import Cards from "../cards/Cards";

function Pets() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetchCats()
  }, [])
  


  const fetchCats = async () => {
      const data = await (await fetch("http://localhost:4000/cats")).json();
      setCats(data);
  };

  return (
    <div className="container">
      <div className="app-container">
        <Filter />
        <Cards cats={cats} />
      </div>
    </div>
  );
}

export default Pets;
