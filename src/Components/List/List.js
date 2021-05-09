import React from 'react';

//Subcomponents
import ListItem from './ListItem';

//PPC
import Card from '../PPC/Card';

const List = props => {

  const { onClickHandler, message, listData } = props;

  return (
    <Card>
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
    </Card>
  )
};

const styles = {
  list: {
    width: '45vw',
    minHeight: '20vh'
  }
}

export default List;

