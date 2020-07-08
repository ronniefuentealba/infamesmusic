
import React, { Component } from 'react';
import './Rrss.scss'

class Rrss extends Component {
  render() {
    return (
      <ul className="rrss-menu">
        <li className="rrss-menu-link"><a className="facebook" target="_blank" href="https://www.facebook.com/infameslabel" title="Facebook"><i className="fab fa-facebook"></i></a></li>
        <li className="rrss-menu-link"><a className="twitter" target="_blank" href="https://twitter.com/infameslabel" title="Twitter"><i className="fab fa-twitter"></i></a></li>
        <li className="rrss-menu-link"><a className="instagram" target="_blank" href="https://www.instagram.com/infamesmusic/" title="Instagram"><i className="fab fa-instagram"></i></a></li>
        <li className="rrss-menu-link"><a className="soundcloud" target="_blank" href="https://soundcloud.com/infames" title="SoundCloud"><i className="fab fa-soundcloud"></i></a></li>
        <li className="rrss-menu-link"><a className="youtube" target="_blank" href="https://www.youtube.com/channel/UClO95bMuAW8mcTXJz2oZsWQ" title="Youtube"><i className="fab fa-youtube"></i></a></li>
      </ul>

    );
  }
}

export default Rrss;