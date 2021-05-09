import React from 'react';

const ListItem = ({ title, year, onClickHandler }) => {

  return (
    <div style={styles.listItem}>
      <h1>{title} ({year})</h1>
      <button onClick={() => onClickHandler(currentState =>
        [...currentState, { Title: title, Year: year }])}>
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
