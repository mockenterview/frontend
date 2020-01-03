import React, { useState } from "react";

export default function SearchForm(props) {
  const [results, setResults] = useState();

  const handleChanges = e => {
    setResults(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    
    const filtered = props.data.filter(person => {
      return person.firstName.toLowerCase().indexOf(results.toLowerCase()) !== -1;
    });
    props.search(filtered);
    console.log(filtered);
  };

  return ( 
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <input
          onChange={handleChanges}
          type="text"
          name="interviewer"
          id="interviewer"
          placeholder="Search"
        ></input>
      </form>
    </section>
  );
}
