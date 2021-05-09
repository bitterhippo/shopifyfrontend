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

  //
  useEffect(() => {
    setSearchBarValue('')
  }, [searchedValue])

  const Banner = () => {
    return (
      <Card>
        <h3>You have reached the maximum amount of nominations!</h3>
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
          onClickHandler={setNominated}
          message={'Use the search feature to find titles and nominate titles.'}
        />
        <NominatedList
          listData={nominated}
          onClickHandler={setNominated}
        />
      </div>
      {nominated.length === 5 && Banner()}
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