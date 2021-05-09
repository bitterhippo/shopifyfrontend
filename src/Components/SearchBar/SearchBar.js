import React from 'react';
//API Module Import
import API from '../../API/API';
//PPC
import Card from '../PPC/Card';

const SearchBar = ({ onChangeHandler, buttonValue, buttonHandler }) => {
  return (
    <Card>
      <h3> Enter the name of title you would like to nominate.</h3>
      <div style={styles.wrapper}>
        <input
          style={styles.input}
          onChange={(e) => {
            e.preventDefault();
            onChangeHandler(e.target.value);
          }}
        />
        <button
          placeholder="film name EX: Braveheart"
          value={buttonValue}
          style={styles.button}
          onClick={() => {
            API.GetOneByTitle(buttonValue, buttonHandler);
          }}
        >Search</button>
      </div>
    </Card>
  )
};

export default SearchBar;

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '3vh'
  }
};