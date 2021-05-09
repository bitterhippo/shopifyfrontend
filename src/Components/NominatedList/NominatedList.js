import React from 'react';
//Imported Subcomponents
import NominatedListItem from './NominatedListItem';
//PPC
import Card from '../PPC/Card';

const NominatedList = ({ listData, onClickHandler }) => {

  return (
    <Card>
      <div style={styles.list}>
        {listData.length > 0
          ? listData.map((currentFilm, key) =>
            <NominatedListItem
              key={key}
              title={currentFilm.Title}
              year={currentFilm.Year}
            />)
          : <h3> You haven't nominated any movies yet!</h3>
        }
      </div>
    </Card>
  )
}

const styles = {
  list: {
    width: '45vw',
    minHeight: '25vh'
  }
}

export default NominatedList;