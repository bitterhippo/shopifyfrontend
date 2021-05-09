import React, { useState, useEffect } from 'react';

//Components
import List from '../List/List';
import SearchBar from '../SearchBar/SearchBar';
import NominatedList from '../NominatedList/NominatedList';
//PPCS
import Card from '../PPC/Card';

const Display = props => {

  //State Managment 
  const [searchBarValue, setSearchBarValue] = useState('');
  const [searchedValue, setSearchedValue] = useState('');
  const [nominated, setNominated] = useState([]);

  const Banner = () => {
    return (
      <Card>
        <h3>You can make {5 - nominated.length} more nominations.</h3>
      </Card>
    )
  };

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
          nominationList={nominated}
          onClickHandler={setNominated}
          message={'Use the search feature to find titles and nominate titles.'}
        />
        <NominatedList
          listData={nominated}
          onClickHandler={setNominated}
        />
      </div>
      {nominated.length > 0 && Banner()}
    </>
  );
}

export default Display;

const styles = {
  boxWrapper: {
    maxWidth: '80',
    marginLeft: 300,
    marginRight: 300
  },
  dualBoxWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'center',
    gap: 25
  }
}