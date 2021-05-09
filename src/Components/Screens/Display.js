import React, { useState, useEffect } from 'react';

//Components
import List from '../List/List';
import SearchBar from '../SearchBar/SearchBar';
import NominatedList from '../NominatedList/NominatedList';
//PPCS
import Card from '../PPC/Card';
//API

const Display = props => {

  //State Managment 
  const [searchBarValue, setSearchBarValue] = useState('');
  const [searchedValue, setSearchedValue] = useState('');
  const [nominated, setNominated] = useState([]);

  console.log(nominated)

  //
  useEffect(() => {
    setSearchBarValue('')
  }, [searchedValue])

  return (
    <>
      <SearchBar
        onChangeHandler={setSearchBarValue}
        buttonValue={searchBarValue}
        buttonHandler={setSearchedValue}
      />
      <div style={styles.dualBoxWrapper}>
        <List
          listData={searchedValue}
          onClickHandler={setNominated}
          message={'Use the search feature to find titles and nominate titles.'}
        />
        <NominatedList
          listData={nominated}
        />
      </div>
    </>
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