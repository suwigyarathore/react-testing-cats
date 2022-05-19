import React, { useState, useEffect, useMemo } from "react";
import "./Pets.css";
import Filter from "../filter/Filter";
import Cards from "../cards/Cards";

function Pets() {
  const [cats, setCats] = useState([]);
  const [filters, setFilters] = useState({
    gender: 'any'
  })

  useEffect(() => {
    fetchCats()
  }, [])

  const filteredCats = useMemo(() => {
    const { gender } = filters;
    return gender === 'any' ? cats : cats.filter(c => c.gender === gender);
  }, [filters, cats]);

  const fetchCats = async () => {
      const data = await (await fetch("http://localhost:4000/cats")).json();
      setCats(data);
  };

  return (
    <div className="container">
      <div className="app-container">
        <Filter filters={filters} setFilters={setFilters} />
        <Cards cats={filteredCats}/>
      </div>
    </div>
  );
}

export default Pets;
