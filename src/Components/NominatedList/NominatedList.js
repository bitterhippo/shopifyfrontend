import React from 'react';
import NominatedListItem from './NominatedListItem';

const NominatedList = ({ listData }) => {

  return (
    <div style={styles.list}>
      { listData.length > 0
        ? listData.map((currentFilm, key) =>
          <NominatedListItem
            key={key}
            title={currentFilm.Title}
            year={currentFilm.Year}
          />)
        : <h3> You haven't nominated any movies yet!</h3>
      }
    </div>
  )
}

const styles = {
  list: {
    minWidth: '50%'
  }
}

export default NominatedList;