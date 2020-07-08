import React from 'react';
import Artist from './Artist';
import { Grid } from '@material-ui/core/';
import { NavLink } from 'react-router-dom';
import './ArtistCard.scss';

const Infames = ({artists}) => {
  return (
    <React.Fragment>
      {artists.map(artist => (
        <Grid item xs={6} sm={3} lg={2} xl={1} key={artist.id}>
          <NavLink to={`/Artist/${artist.id}`}>
            <Artist artist={artist} />
          </NavLink>
        </Grid>
      ))}
    </React.Fragment>
  );
}

export default Infames;
