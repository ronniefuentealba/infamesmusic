import React, {Component} from 'react';
import {Grid} from '@material-ui/core/';
import Infames from '../../components/ArtistCard/ArtistsCard';
import './home.scss';

// ES6
class Home extends Component {
  state = {
    infames: [],
  };

  componentDidMount() {
    fetch('http://localhost:5000/api/v1/artists')
      .then(res => res.json())
      .then(data => {
        this.setState({infames: data.artist});
      })
      .catch(console.log);
  }

  render() {
    return (
      <React.Fragment>
        <Grid className="featured" item xs={8} sm={6}>
          <h2>Escucha lo más nuevo de Predicto</h2>
          <h1>Mi Origen</h1>
        </Grid>
        <Grid className="featured event" item xs sm>
          <h2>Próximo Evento</h2>
          <h3>Infames Regional United</h3>
        </Grid>
        <Infames artists={this.state.infames} />
      </React.Fragment>
    );
  }
}

export default Home;
