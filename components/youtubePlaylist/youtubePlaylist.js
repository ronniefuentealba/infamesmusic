import { Parallax } from 'react-scroll-parallax';
import './youtubePlaylist.scss';

const YoutubePlaylist = () => (
  <section className={'youtubeSection'}>
    <Parallax y={[0,0]} tagOuter="youtubeSubtitle" styleInner={{  paddingTop:'0vh'}}>
        <svg width="100%" height="270" viewBox="0 0 50 270">
          <text className={'heading youtubeSubtitle'} fill="none" fillOpacity="1" x="0" y="250" textAnchor="middle" stroke={'black'} strokeWidth="2">YouTube</text>
        </svg>
      </Parallax>
    <div className={'youtubeWrapper'}>
      <iframe width="870" height="420" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLM74LAuj7ep7xCUK1-AqTbn5jDUqGI-Qj" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    
  </section>
)

export default YoutubePlaylist;