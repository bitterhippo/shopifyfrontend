import React, { useState, useEffect } from 'react';

//Components
import List from '../List/List';
import SearchBar from '../SearchBar/SearchBar';
//PPCS
import Card from '../PPC/Card';
//API
import API from '../../API/API';

const Display = props => {

  //State Managment 
  const [searchBarValue, setSearchBarValue] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [nominated, setNominated] = useState([]);

  console.log(nominated)

  return (
    <Card>
      <SearchBar
        onChangeHandler={setSearchBarValue}
      />
      <button
        style={styles.button}
        onClick={() => API.GetOneByTitle(searchBarValue, setSearchedValue)}
      >Search</button>
      <div style={styles.dualBoxWrapper}>
        <List
          listData={searchedValue}
          onClickHandler={setNominated}
          message={'Use the search feature to find titles.'}
        />
        <List 
          listData={nominated}
          message={`You haven't nominated any films yet.`}
        />
      </div>
    </Card>
  );
}

export default Display;

const styles = {
  boxWrapper: {
    width: '100%'
  },
  dualBoxWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15
  },
  button: {
  }
}