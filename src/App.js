import React, { useState, useEffect } from 'react';

//Components
import List from './Components/List/List';
import SearchBar from './Components/SearchBar/SearchBar';
import SelectedBar from './Components/SelectedList/SelectedList';
//PPCS
import Card from './Components/PPC/Card'


function App() {
  return (
    <Card>
      <div style={styles.boxWrapper}>
        <SearchBar />
      </div>
      <div style={styles.dualBoxWrapper}>
        <List />
        <SelectedBar />
      </div>
    </Card>
  );
}

export default App;

const styles = {
  boxWrapper: {
    width: '100%'
  },
  dualBoxWrapper: {
    width: '50%'
  }
}