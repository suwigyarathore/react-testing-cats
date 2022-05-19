import React from 'react';
import "./Filter.css";

function Filter({filters = {}, setFilters = () => {}}) {
  const { gender } = filters ;

  const handleFilterChange = (e) => {
    debugger;
    console.log(e);
    setFilters(prev => ({...prev, gender: e.target.value}));
  }
  return (
    <div className='pet-filter-container'>
        <div className='filter-container'>
            <label htmlFor="favourite">Favourite</label>
            <select name="favourite" id="favourite" className='form-select'>
                <option value="any">Any</option>
                <option value="favourite">Favourite</option>
                <option value="not favourite">Not favourite</option>
            </select>
         </div>
         <div className='filter-container'>   
            <label htmlFor="gender" filters={filters}>Gender</label>
            <select name="gender" id="gender" value={gender} onChange={handleFilterChange} className='form-select'>
                <option value="any">Any</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
    </div>

  )
}

export default Filter