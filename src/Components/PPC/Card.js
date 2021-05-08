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
    backgroundColor: 'grey',
    borderRadius: 5,
    justifySelf: 'center'
  }
}
