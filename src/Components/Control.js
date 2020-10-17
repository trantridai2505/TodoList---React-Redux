import React, { Component } from 'react';
import Search from "./Search";
import Sort from "./Sort";



class Control extends Component{
  render(){
    return(
        <div className="search--sort--content">
            {/* Search */}
            <Search onSearch = {this.props.onSearch} />

            {/* Sort */}
            <Sort 
              onSort = {this.props.onSort} 
              sortBy = { this.props.sortBy }
              sortValue = { this.props.sortValue }
            />
        </div>
    );
  }
}

export default Control;