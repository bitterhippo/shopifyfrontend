import React from 'react';

const NominatedListItem = ({ title, year}) => {
  return (
    <div style={styles.item}> 
      {title} ({year})
    </div>
  )
};

const styles = {
  item: {
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
    border: '1px solid black'
  }
}

export default NominatedListItem;