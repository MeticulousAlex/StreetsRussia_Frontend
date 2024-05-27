import './Filter.css';
import React from 'react';

export default function Filter({ops, param, onFilter}) {

  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  function handleOpenFilter() {
    setIsFilterOpen(!isFilterOpen);
  }

  function handleSelectFilter(e) {
    setIsFilterOpen(!isFilterOpen);
    onFilter(e.target.value);
  }

  return(
    <select className={`filter ${isFilterOpen&&'filter__type_opened'}`} onClick={handleOpenFilter} onChange={handleSelectFilter}>
      <option className='filter__title'>{param}</option>
        {ops.map((op) => 
          (<option className='filter__option' key={op.id} value={op.title}>{op.title}</option>)
        )}
    </select>
  )
}