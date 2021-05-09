import React from 'react';

//Subcomponents
import ListItem from './ListItem';

const List = ({ searchData }) => {

  return (
    <div style={styles.list}>
      {
        searchData !== ''
          ? <ListItem
            title={searchData.Title}
            date={searchData.Year}
          />
          : 'no data to list'
      }
    </div>
  )
};

const styles = {
  list: {
    minWidth: '50%'
  }
}

export default List;

