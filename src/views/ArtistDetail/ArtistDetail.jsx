import React, { Component } from 'react';
import Artist from '../../components/ArtistCard/Artist';


class ArtistDetail extends Component {
  state = {
    albums: []
  }

  componentWillMount() {
    fetch(`http://localhost:5000/api/v1/artists/${this.props.match.params.id}`)
      .then(res => res.json())
      .then((data) => {
        this.setState(data.artist);
      })
      .catch(error => console.log(error.message));
  }

  componentDidMount() {
  }

  render() {
    const { albums } = this.state
    if(albums.length === 0) {
      return <p>Loading...</p>
    }
    return (
      <React.Fragment>
        <h1>{this.state.artistname}</h1>
        <div><img src={this.state.image} /></div>
        <p>{this.state.description}</p>
        {albums.map(album => (
          <React.Fragment key={album.name}>
              <p>{album.name}</p>
              <div><img src={album.images[0].url} width="100px"/></div>
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}

export default ArtistDetail;