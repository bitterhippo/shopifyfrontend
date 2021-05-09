import React from 'react';

const NominatedListItem = ({ title, year, onClickDeleteHandler}) => {

  return (
    <div style={styles.item}> 
      <h3>{title} ({year})</h3>
      <button
       onClick={() => onClickDeleteHandler(title)}
      >Delete Me</button>
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
  }
}

export default NominatedListItem;