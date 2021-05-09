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
        <h3 style={{textDecoration: 'underline'}}>Results</h3>
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
    minHeight: '40vh'
  }
}

export default List;

