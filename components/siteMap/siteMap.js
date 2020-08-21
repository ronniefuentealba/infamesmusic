import Infames from './../infames/infames'
import {infames, Playlist} from "./../../config";
import './siteMap.scss'
const NavItem = ({children}) => <li className={'navItem'}>{children}</li>

const SiteMap = (props) => (
  <nav>
    <div className={'navFooterWrapper'}>
    <h4>Crew</h4>
    <ul className={'navContainer'}>
      {infames.map( infame => <NavItem key={infame.artist}>{infame.artist}</NavItem>)}
    </ul>
  </div>
  <div className={'navFooterWrapper'}>
    <h4>Playlist</h4>
    <ul className={'navContainer'}>
    {Playlist.map( playlist => <NavItem key={playlist.playlistName}>{playlist.playlistName}</NavItem>)}
    </ul>
  </div>
  </nav>
)

export default SiteMap