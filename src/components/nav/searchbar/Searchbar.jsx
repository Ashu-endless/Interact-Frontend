import React from "react";
import './Searchbar.css';



class SearchBar extends React.Component {
  render() {
    return <div id="SearchDiv" > <i class="bi bi-search"></i> <input placeholder="Search Interact" type="text" name="" id="SearchInput" /> </div>
  }
}
 
export default SearchBar;