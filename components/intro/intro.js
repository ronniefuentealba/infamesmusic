import { Parallax } from 'react-scroll-parallax'
import {createUseStyles, useTheme} from 'react-jss'
import {IgFeed, ScrollDown} from './../../components'

const videoSRC = 'https://scontent-scl2-1.cdninstagram.com/v/t50.2886-16/65506965_477842842965044_6549714377778404183_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=scontent-scl2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=wYGPZ8bRDsQAX-hIdHg&vs=18050498098185983_3925086182&_nc_vs=HBksFQAYJEdKV081d00wMU9sMG1MSUJBRmNid0ZPR1F1VmFia1lMQUFBRhUAAsgBABUAGCRHT0lnNlFPa0VnOXMtb2NCQU1jN29wQlg5NWMxYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAABgAFv6nvKKitZBAFQIoAkMzLBdANAhysCDEnBgSZGFzaF9iYXNlbGluZV8xX3YxEQB16gcA&oe=5F39148E&oh=1e388e9b97e444f49f6f5e42fb5a4e83'
const jayzVideo = 'https://scontent-scl2-1.cdninstagram.com/v/t50.2886-16/117083123_151904226522394_4556345925343925747_n.mp4?_nc_ht=scontent-scl2-1.cdninstagram.com&_nc_cat=110&_nc_ohc=TwS6xOJ34usAX-x0kSR&oe=5F397054&oh=70fa6cb92089e5266b6bd58949bf5b26'

const useStyles = createUseStyles({
  heading: {
    fontFamily: 'MonumentExtended-UltraBold, sans-serif',
    fontSize:'14em',
    textTransform: 'uppercase',
    color: ({ theme }) => theme.background,
  },
  introContainer: {
    display:'block',
    height: '100vh',
    maxHeight: '100vh',
    position:'relative',
    width: '100%'
  },
  videoBG: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    minWidth: '100%',
    minHeight: '100%',
  },
  gridWrapper: {
    display: 'grid',
    height: '100vh',
    position: 'absolute',
    top: 0,
    width:'100%',
      gridTemplateColumns: '60% 40%',
      '@media (min-width: 800px)': {
        gridTemplateColumns: '60% 40%',
      }
  },
  commentsWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  featured: {
    backgroundImage: 'url(/random/4tokaramazov.jpg)',
    backgroundSize: 'cover',
    height: '60vh',
    margin: '0 auto',
    width: '60vh',
  }
})

const Intro = props => {
  const theme = useTheme()
  const classes = useStyles({theme})

  return (
    <div className={classes.introContainer}>
      <video autoPlay loop muted id="myVideo" className={classes.videoBG}>
        <source src={jayzVideo} type="video/mp4"/>
      </video>

      <Parallax x={[50,0]} tagOuter="figure2" styleInner={{  paddingTop:'35vh'}}>
        <svg width="200%" height="200" viewBox="0 0 1000 200">
          <text className={classes.heading} fill="none" fillOpacity="1" x="0" y="170" textAnchor="middle" stroke={theme.background} strokeWidth="2">Infames Music</text>
        </svg>
      </Parallax>
      <div className={classes.gridWrapper}>
        <div className={classes.commentsWrapper}>
          <div className={classes.featured}></div>
        </div>
        <div className={classes.commentsWrapper}>
          <IgFeed igFeed={props.comments} />
        </div>
      </div>
      <ScrollDown />
    </div>
  )
}
export default Intro