import './Filter.css';

export default function Filter({ops, param}) {

  console.log(param);
  console.log(ops);
 
  function handleChange(e) {
    console.log(e.target.value);
  }

  return(
    <form className='filter' name='filter'>
      <select onChange={handleChange}>
        <option>Выберите {param}</option>
        {ops.map((op) => 
          (<option>{op}</option>)
        )}
      </select>
    </form>
  )
}