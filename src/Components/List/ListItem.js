import React from 'react';

const ListItem = ({ title, year, nominationHandler }) => {

  return (
    <div style={styles.listItem}>
      <h1>{title} ({year})</h1>
      <button onClick={nominationHandler({ filmName: title, filmYear: year })}>
        Nominate</button>
    </div>
  )
};

export default ListItem;

const styles = {
  listItem: {
    backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row'
  }
}
