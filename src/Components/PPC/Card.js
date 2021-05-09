import React from 'react';

const Card = props => {
  return (
    <div style={styles.card}>
      {props.children}
    </div>
  )
};

export default Card;

const styles = {
  card: {
    backgroundColor: '#eeeeee',
    borderRadius: 5,
    border: '1px solid black',
    textAlign: 'center'
  }
}
