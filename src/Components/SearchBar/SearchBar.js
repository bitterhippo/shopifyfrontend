import React from 'react';

const SearchBar = ({ onChangeHandler }) => {
  return (
    <React.Fragment>
      <input 
        style={styles.input}
        onChange={(e) => {
          onChangeHandler(e.target.value)
        }}
      />
    </React.Fragment>
  )
};

export default SearchBar;

const styles = {
};