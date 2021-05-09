import React from 'react';

const ListItem = ({ title, year, onClickHandler, nominationList }) => {

  //This logic determines which subrender will run. If the nomination list doesnt contain a title with the same name is the current film button will be allowed to run.
  let filteredNominationList = nominationList.filter(currentFilm => currentFilm.Title === title);

  //Subrender function to create the 'NominateOne' button.
  const button = () =>
    <button
      style={styles.button}
      onClick={() => onClickHandler(prevState =>
        [...prevState, { Title: title, Year: year }]
      )}>Add One</button>

  //Subrender function for error case.
  const warning = () => <h4 style={{marginRight: 10, color: 'red'}}>You have already added a film with the same name</h4>

  return (
    <div style={styles.listItem}>
      <h4 style={{ marginLeft: 10 }}>{title} ({year})</h4>
      {
        filteredNominationList.length === 0
          ? button()
          : warning()
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
