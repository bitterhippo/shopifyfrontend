import React from 'react';
//Imported Subcomponents
import NominatedListItem from './NominatedListItem';
//PPC
import Card from '../PPC/Card';

const NominatedList = ({ listData, onClickHandler }) => {

  const DeleteOne = targetValue => {
    
    let arrayFilter = listData.filter(currentFilm => currentFilm.Title !== targetValue);

    onClickHandler(arrayFilter)
  }

  return (
    <Card>
      <h3 style={{textDecoration: 'underline'}}>Nominated</h3>
      <div style={styles.list}>
        {listData.length > 0
          ? listData.map((currentFilm, key) =>
            <NominatedListItem
              key={key}
              title={currentFilm.Title}
              year={currentFilm.Year}
              onClickDeleteHandler={DeleteOne}
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
    minHeight: '40vh'
  }
}

export default NominatedList;