import React, { useState } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import Yelp from '../../util/Yelp.js';
import { render } from '@testing-library/react';

function App(){
 const [businesses, setBusinesses] = useState([]);
//Adds state to the returned objects from the Yelp api and stores them in an array
 function searchYelp(term,location,sortBy){
  Yelp.search(term,location,sortBy).then(businesses => setBusinesses(businesses));
}
//The SearchBar passes the info to the searchYelp function and it returns an Array and sends it to BusinessList for displaying
return (
  <div className="App">
  <h1>Foodies</h1>
  <SearchBar searchYelp={searchYelp}/>
  <BusinessList businesses={businesses}/>
</div>
)
}

export default App;
