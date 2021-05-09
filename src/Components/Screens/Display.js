import React, { useState, useEffect } from 'react';

//Components
import List from '../List/List';
import SearchBar from '../SearchBar/SearchBar';
import SelectedBar from '../SelectedList/SelectedList';
//PPCS
import Card from '../PPC/Card';
//API
import API from '../../API/API';

const Display = props => {

  //State Managment 
  const [searchBarValue, setSearchBarValue] = useState('');
  const [searchedValue, setSearchedValue] = useState('');
  const [nominated, setNominated] = useState([]);

  console.log(searchedValue)

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
          searchData={searchedValue}
          onNomination={setNominated}
        />
        <SelectedBar />
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