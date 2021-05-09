import React from 'react';

const SelectedList = props => {
  return (
    <div style={styles.box}>
      You haven't nominated any titles yet.
    </div>
  )
};

const styles = {
  box: {
    minWidth: '50%',
    backgroundColor: 'red'
  }
}

export default SelectedList;
