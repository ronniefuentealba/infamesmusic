import React, {Component} from 'react';
import Infames from '../../components/ArtistCard/ArtistsCard';

// ES6
class Artists extends Component {
  state = {
    infames: []
  };

  componentWillMount() {
    fetch('http://localhost:5000/api/v1/artists')
      .then(res => res.json())
      .then(data => {
        this.setState({infames: data.artist});
      })
      .catch((error) => console.log(error.message));
  }

  render() {
    const {infames} = this.state
    if(infames.length === 0) {
      return <p>Loading...</p>
    }
    return (
      <React.Fragment>
        <Infames artists={infames} />
      </React.Fragment>
    );
  }
}

export default Artists;
