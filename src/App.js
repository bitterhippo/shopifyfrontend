import React from 'react';

//Components
import List from './Components/List/List';
import SearchBar from './Components/SearchBar/SearchBar';
import SelectedBar from './Components/SelectedList/SelectedList';
//PPCS


function App() {
  return (
    <div>
      <SearchBar />
      <List />
      <SelectedBar />
    </div>
  );
}

export default App;


const styles = {
  
}