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

  console.log(searchBarValue);
  console.log(searchedValue);

  return (
    <Card>
      <SearchBar
        onChangeHandler={setSearchBarValue}
      />
      <button
        onClick={() => API.GetOneByTitle(searchBarValue, setSearchedValue)}
      />
      <div style={styles.dualBoxWrapper}>
        <List
          searchData={searchedValue}
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
    width: '50%'
  }
}