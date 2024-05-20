import { useState } from 'react';
import './Filter.css';

export default function Filter({ops, param, filterDiscipline, setFilterDiscipline, onFilter}) {
  
  function getValue(e) {
    setFilterDiscipline(e.state.value);
    onFilter(filterDiscipline);
  }

  return(
    <form className='filter' name='filter'>
      <select className='filter__option-box' onChange={getValue}>
        <option className='filter__option'>{param}</option>
        {ops.map((op) => 
          (<option className='filter__option' key={op.id} value={op.id}>{op.title}</option>)
        )}
      </select>
    </form>
  )
}