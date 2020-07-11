import React from 'react'
import PropTypes from 'prop-types';

const Search = ({ isDisabled, handleSearch }) => (
  <div className='app__search'>
    <div className='app__container'>
      <h1>Search for users on GitHub</h1>
      <input 
      type='search' 
      placeholder='Enter the username'
      disabled={isDisabled}
      onKeyUp={handleSearch}
      />      
    </div>
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
