import React from 'react';

const ListItem = ({ title, year, onClickHandler }) => {

  return (
    <div style={styles.listItem}>
      <h4 style={{marginLeft: 10}}>{title} ({year})</h4>
      <button
        style={styles.button}
        onClick={() => onClickHandler(prevState =>
          [...prevState, { Title: title, Year: year }]
        )}>
        Nominate</button>
    </div>
  )
};

export default ListItem;

const styles = {
  listItem: {
    width: '100%',
    justifyContent: 'space-between',
    display: 'inline-flex',
    marginBottom: 5,
    borderRadius: 5,
    border: '1px solid black',
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'green'
  }
}
