import React from 'react';

const ListItem = ({ title, year, onClickHandler, nominationList }) => {

  const nominatable = () => {
    return (
      <>
        <h4 style={{ marginLeft: 10 }}>{title} ({year})</h4>
        <button
          style={styles.button}
          onClick={() => onClickHandler(prevState =>
            [...prevState, { Title: title, Year: year }]
          )}>
          Nominate</button>
      </>
    )
  };

  const unnominatable = () => {
    return (
    <>
      <h4 style={{ marginLeft: 10 }}>{title} ({year})</h4>
      <h4 style ={{ marginRight: 10, color: 'red'}}>You have already nominated this film</h4>
    </>
    )
  };

  let filteredNominationList = (nominationList.filter(currentFilm => currentFilm.Title === 'title'))

  return (
    <div style={styles.listItem}>
      {
        filteredNominationList.length < 0 && nominationList.length <= 5 
        ? nominatable()
        : unnominatable()
      }
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
