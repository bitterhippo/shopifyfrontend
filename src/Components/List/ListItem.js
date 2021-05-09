import React from 'react';

const ListItem = ({ title, year }) => {

  return (
    <div style={styles.listItem}>
      <h1>{title}</h1>
      <h1>{year}</h1>
    </div>
  )
};

export default ListItem;

const styles = {
  listItem: {
    backgroundColor: 'green'
  }
}
