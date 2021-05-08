import React from 'react';

//Subcomponents
import ListItems from './ListItems';

const List = props => {
  return (
    <React.Fragment>
      {
        ListItems !== undefined ? 'list data' : 'no data to list'
      }
    </React.Fragment>
  )
};

export default List;

const styles = {

};