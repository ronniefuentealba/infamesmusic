import './Artist.scss';
import React from 'react';

const Artist = ({artist}) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${artist.image})` }}>
      <div className="card__body">
        <h5 className="card__body--title">{artist.artistname}</h5>
      </div>
    </div>
  );
};

export default Artist;
