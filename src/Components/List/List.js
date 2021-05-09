import React from 'react';

//Subcomponents
import ListItem from './ListItem';

const List = props => {

  console.log(props)

  const { title, year, onNomination } = props.searchData;

  return (
    <div style={styles.list}>
      {
        props.searchData !== ''
          ? <ListItem
            title={props.searchData.Title}
            year={props.searchData.Year}
            nominationHandler={onNomination}
          />
          : 'Use the search feature to find titles.'
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

