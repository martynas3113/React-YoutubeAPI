import React from 'react';
import  './search.scss';

class Search extends React.Component {
    state = { title: "" };
    onSearchChanged = event => {
      const _title = event.target.value;
      this.setState({ title: _title });
    };
    onSubmit = event => {
      event.preventDefault();
      this.props.onSearch(this.state.title);
    };
    render() {
      return (
        <>
          <form className="search-form">
            <div className="form-controls">
              <label>Search</label>
              <input
                id="video-search"
                type="text"
                value={this.state.title}
                onChange={this.onSearchChanged}
                placeholder="Enter Search Keyword"
              />
            </div>
            <button onClick={this.onSubmit} className="btn btn-primary">Go</button>
          </form>
        </>
      );
    }
  }
  
  export default Search;
