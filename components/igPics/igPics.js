import Image from './../../components';

const PicsWrapper = {
  margin: 0,
  padding: 0,
}

const MediaContainer = {
  alignItems: 'center',
  alignContent: 'center',
  backgroundColor: 'black',
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
}

const PicContainer = {
  backgroundColor: "black",
  flexGrow: 1,
  maxWidth: "20%",
  margin: 0,
  padding: 0,
}

const PicItem = {
  width: "100%",
  margin: 0,
  padding: 0,
}

const IgPic = props => (
  <>
    <img style={PicItem} src={props.src} />
  </>
)

const IgVideo = props => (
  <>
    <video style={PicItem} muted autoPlay loop>
      <source src={props.src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </>
)

const IgPics = props => (
  <section className="home-part" style={PicsWrapper}>
    <div className="mediaContainer" style={MediaContainer}>
      {props.igFeed.map(data => 
        data.media_type == "IMAGE" ?
        (<div style={PicContainer} key={data.id}>
          <IgPic src={data.media_url} />
        </div>) :
        (<div style={PicContainer} key={data.id}>
          <IgVideo src={data.media_url} />
        </div>)
      )}
    </div>
  </section>
)

export default IgPics;