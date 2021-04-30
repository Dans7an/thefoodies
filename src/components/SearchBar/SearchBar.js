import React, { useState } from 'react';
import "./SearchBar.css";

const sortByOptions = {
  "Best Match" : "best_match", 
  "Highest Rated" : "rating",
  "Most Reviewed" : "review_count",
};

function SearchBar (props) {
    const [option, setOption] = useState(
      { 
        term: '' , 
        location: '' ,
        sortBy: 'best_match' 
      }
    );
    
  //Handle toggling over the sorting options
  function getSortByClass (sortByOption){
    if(option.sortBy === sortByOption){
      return 'active';
    } else {
      return '';
    }
  }
  //retuns search results after pushing the Enter key
  function handleKeyPress(event){
    if(event.key === "Enter"){
      props.searchYelp(option.term, option.location, option.sortBy);
      event.preventDefault();
    }
  }
  function handleSortByChange(sortByOption){
    setOption(prevValue => ({...prevValue, sortBy: sortByOption}));
  }
  //Handle state of the store name and location
  function termLocationChange(event){
    const {name,value} = event.target;
    setOption((prevValue) => ({...prevValue, [name]:value}));
  }
  //Returns search results after the "Let's go" button is pushed on the menu
  function handleSearch(event){
    props.searchYelp(option.term, option.location, option.sortBy);
    event.preventDefault();
  }
  function renderSortByOptions () {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue} className={getSortByClass(sortByOptionValue)} onClick={() => handleSortByChange(sortByOptionValue)}>{sortByOption}</li>
        });
    }
  
        return (
        <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {renderSortByOptions()} 
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input value={option.term} name='term' onChange={termLocationChange} placeholder="Search Businesses" />
          <input value={option.location} name='location' onChange={termLocationChange} onKeyPress={handleKeyPress} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={handleSearch}>Let's Go</a>
        </div>
      </div>)
    
};

export default SearchBar;