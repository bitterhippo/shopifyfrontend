import React from 'react';

//Subcomponents
import ListItem from './ListItem';

const List = props => {

  const { onClickHandler, message, listData } = props;

  return (
    <div style={styles.list}>
      {
        props.listData !== ''
          ? <ListItem
            key={listData.Title}
            title={listData.Title}
            year={listData.Year}
            onClickHandler={onClickHandler}
          />
          : <h3>{message}</h3>
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

