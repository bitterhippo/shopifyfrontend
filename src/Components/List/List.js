import React from 'react';

//Subcomponents
import ListItem from './ListItem';

const List = props => {

  const { handler, message } = props;

  return (
    <div style={styles.list}>
      {
        props.listData.length > 0
          ? <ListItem
            title={props.listData.Title}
            year={props.listData.Year}
            onClickHandler={handler}
          />
          : `${message}`
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

