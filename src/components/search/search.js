import React, { useState } from 'react';
import  './search.scss';


const Search = ({onSearch}) => {
  const [title, setTitle] = useState("");

 const onSearchChanged = (e) => {
    const title = e.target.value;
    setTitle(title);

  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(title);
  };
  return (
    <>
          <form onSubmit={onSubmit} className="search-form">
            <div className="form-controls">
              <label>Search</label>
              <input
                id="video-search"
                type="text"
                value={title}
                onChange={onSearchChanged}
                placeholder="Enter Search Keyword"
              />
            </div>
            <button onClick={onSubmit} className="btn btn-primary">Go</button>
          </form>
        </>
  )
}

export default Search

