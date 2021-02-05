import React, { useState } from 'react';
import  './search.scss';
import axios from 'axios';
import { ImCross } from 'react-icons/im';
import { BiSearch } from 'react-icons/bi'



const Search = ({onSearch}) => {
  const [title, setTitle] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");

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

      const item = {
        search: title
      }
      
      axios.post('http://localhost:5000/search/add', item)

  };
  const formValidation = () => {
    const nameValid = /[A-Za-z/s]/;
    if (!nameValid.test(title)) {
        setErrorText("Only characters are allowed!")
        return true;
    } else if(title === "") {
      setErrorText("Search field can not be empty")
      return true;
    }
    else if (title.split("").length > 20){
      setErrorText("Keyword can not be longer than 20 symbols")
      return true;
    }
    else{
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
                className="textbox"
                type="text"
                value={title}
                onChange={onSearchChanged}
                placeholder="Enter Search Keyword"
              />
              <button data-testid = "search-button" onClick={showResults} className="btn btn-primary"><BiSearch/></button>
            </div>
          </form>
          <div className={isError ? "error active" : "error"}><ImCross className="cross"/>{errorText}</div>
        </>
  )
}

export default Search

