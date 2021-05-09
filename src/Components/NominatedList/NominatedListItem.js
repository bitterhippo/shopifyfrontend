import React from 'react';

const NominatedListItem = ({ title, year, onClickDeleteHandler}) => {

  return (
    <div style={styles.item}> 
      <h3>{title} ({year})</h3>
      <button
      style={styles.button}
       onClick={() => onClickDeleteHandler(title)}
      >Remove</button>
    </div>
  )
};

const styles = {
  item: {
    width: '100%',
    justifyContent: 'space-between',
    display: 'inline-flex',
    marginBottom: 5,
    borderRadius: 5,
    border: '1px solid black'
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'red'
  }
}

export default NominatedListItem;