import React, { useState, useEffect } from 'react';

//Components
import List from '../List/List';
import SearchBar from '../SearchBar/SearchBar';
import SelectedBar from '../SelectedList/SelectedList';
//PPCS
import Card from '../PPC/Card'; 

const Display = props => {
  //State Managment 
  const [searchBarValue, setSearchBarValue] = useState('');

  console.log(searchBarValue)

  return (
    <Card>
      <div style={styles.boxWrapper}>
        <SearchBar
          onChangeHandler={setSearchBarValue}
        />
      </div>
      <div style={styles.dualBoxWrapper}>
        <List />
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