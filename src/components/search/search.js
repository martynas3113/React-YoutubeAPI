import React, { useState } from 'react';
import  './search.scss';


const Search = ({onSearch}) => {
  const [title, setTitle] = useState("");
  const [isError, setIsError] = useState(false);

 const onSearchChanged = (e) => {
    const title = e.target.value;
    setTitle(title);
    
  };

  const showResults = (e) => {
    e.preventDefault();
    if(!formValidation()){
      setIsError(false);
       onSubmit();
    }
    else{
      setIsError(true);
    }
  }
  
  const onSubmit = () => {
      onSearch(title);
  };
  const formValidation = () => {
    const nameValid = /[^A-Za-z]/;
    if (nameValid.test(title)) {
        return true;
    } else {
      return false;
    }


}
  return (
    <>
          <form onSubmit={showResults} className="search-form">
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
            <button onClick={showResults} className="btn btn-primary">Go</button>
          </form>
          <div className={isError ? "error active" : "error"}>Error</div>
        </>
  )
}

export default Search

