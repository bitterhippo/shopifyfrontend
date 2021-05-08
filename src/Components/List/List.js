import React from 'react';

//Subcomponents
import ListItem from './ListItem';

const List = ({ searchData }) => {
  return (
    <React.Fragment>
      {
        searchData !== '' 
        ? <ListItem 
          title={searchData.Title}
          date={searchData.Year}
        />
        : 'no data to list'
      }
    </React.Fragment>
  )
};

export default List;
