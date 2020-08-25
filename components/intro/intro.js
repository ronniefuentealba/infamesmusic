import { Parallax } from 'react-scroll-parallax'
import {IgFeed, ScrollDown} from './../../components'
import './intro.scss'

const videoSRC = 'https://scontent-scl2-1.cdninstagram.com/v/t50.2886-16/104350026_176616077153318_4775871221876812942_n.mp4?_nc_ht=scontent-scl2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=2257LLZVDPIAX_j-3vV&oe=5F44A001&oh=9bbe95cdfc894bbcb9cdfb9402d04851'
const jayzVideo = 'https://scontent-scl2-1.cdninstagram.com/v/t50.2886-16/61440016_302982623946923_2923373002242201145_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjY0MC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=scontent-scl2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=eF7AZBeq-aQAX9kjQs1&vs=17912046874305911_4246402652&_nc_vs=HBksFQAYJEdCQ0FxUU9yYUt5amp4TUJBRGtXbmNCQjZKRW9ia1lMQUFBRhUAAsgBABUAGCRHQkJfcUFPV2VmQ1A5SllBQUlmeVNjZXVneVV4YmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAABgAFu6nkPqrutE%2FFQIoAkMzLBdASlU%2FfO2RaBgSZGFzaF9iYXNlbGluZV8xX3YxEQB16gcA&oe=5F3EF76D&oh=7de69988ff41831f75fcc91f0b9ad6a9'
const getRandom = (array)=> Math.floor(Math.random() * array.length)

const featurePhotos = [{
  photoURl:'/random/4tokaramazov.jpg',
  label: '4to Karamazov'
},{
  photoURl:'/random/malcriaoahdzousa.jpg',
  label: 'Malcriaoh D`Zousa'
}]

const arrayImages = featurePhotos.map(photo => photo.photoURl)
const randomImage = Math.floor(Math.random() * arrayImages.length)

const words = ["Chileno", "Latino", "Colectivo"];

const Intro = props => {
  const randomNumber = Math.floor(Math.random() * words.length)
  return (
    <div className={'introContainer'}>
      <video autoPlay loop muted id="myVideo" className={'videoBG'}>
        <source src={videoSRC} type="video/mp4"/>
      </video>

      <Parallax x={[50,0]} tagOuter="figure2" styleInner={{  paddingTop:'45vh'}}>
        <svg width="200%" height="200" viewBox="0 0 800 200">
          <text className={'heading'} fill="none" fillOpacity="1" x="-160" y="170" textAnchor="middle" stroke={'white'} strokeWidth="2">Infames Music</text>
        </svg>
      </Parallax>
      <div className={'gridWrapper'}>
        <div className={'featuredWrapper'}>
          <div className={'featured'}>
            <p className={'featureHeading'}>Rap<br/><span>{words[randomNumber]}</span></p>
            <p className={'infamesTxt'}>Fugiat esse et anim sit ipsum pariatur aliqua excepteur elit ipsum dolore deserunt. Quis elit irure ad tempor ullamco adipisicing. Veniam nulla Lorem mollit incididunt laborum reprehenderit do. Tempor qui proident commodo minim Lorem ut tempor ex.</p>
            <p className={'featuredDescription'}>{featurePhotos[randomImage].label}</p>
              <a href={'https://open.spotify.com/playlist/4oCTR88Xx5t9niq1kW4Wv1?si=L-k0wdkWSkiToKrShmQheg'} target="_blank">
            <div className={'playlistWrap'}>
                <span>
                <svg viewBox="-14 -56 100 100" xmlns="http://www.w3.org/2000/svg">
                  <text fill="none" fillOpacity="1" stroke='white' strokeWidth="0.5">Playlist</text>
                </svg>
                </span>
              <svg className={'spinner'} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path id="circlePath"
                        d="M 50, 50
                        m -37, 0
                        a 37,37 0 1,1 74,0
                        a 37,37 0 1,1 -74,0" />
                </defs>
                <text stroke='none' fill="white">
                  <textPath href="#circlePath">
                  Infames Music - Infames Music - Infames Music -
                  </textPath>
                </text>
              </svg>
            </div>
              </a>
          </div>
        </div>
        <div className={'commentsWrapper'}>
          <IgFeed igFeed={props.comments} />
        </div>
      </div>
      <ScrollDown />
    </div>
  )
}
export default Intro