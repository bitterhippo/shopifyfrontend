import React from 'react';

const SearchBar = props => {
  return (
    <React.Fragment>
      <input 
        style={styles.input}
      />
    </React.Fragment>
  )
};

export default SearchBar;

const styles = {
  input: {
    width: "100%",
    height: "33%",
    backgroundColor: 'red'
  }
};