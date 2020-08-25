import { Parallax } from 'react-scroll-parallax';
import './youtubePlaylist.scss';

const YoutubePlaylist = () => (
  <section className={'youtubeSection home-part'}>
    <Parallax y={[0,0]} tagOuter="youtubesubtitle" styleInner={{  paddingTop:'0vh'}}>
        <svg width="100%" height="270" viewBox="0 0 50 270">
          <text className={'heading youtubeSubtitle'} fill="none" fillOpacity="1" x="0" y="250" textAnchor="middle" stroke={'black'} strokeWidth="2">YouTube</text>
        </svg>
      </Parallax>
    <div className={'youtubeWrapper'}>
    <iframe width="870" height="420" src="https://www.youtube.com/embed/videoseries?list=PLM74LAuj7ep6b4fcT016lB_oG2rlsk4c5" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    
  </section>
)

export default YoutubePlaylist;