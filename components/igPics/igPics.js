import Image from './../../components';

const PicsWrapper = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  listStyle: "none",
  margin: 0,
  padding: 0,
  alignItems: 'center',
  alignContent: 'center',
}

const PicContainer = {
  backgroundColor: "black",
  flexGrow: 1,
  maxWidth: "20%",
}

const PicItem = {
  width: "100%"
}

const IgPic = props => (
  <>
    <img style={PicItem} src={props.src} />
  </>
)

const IgVideo = props => (
  <>
    <video width="100%" muted autoPlay loop>
      <source src={props.src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </>
)




const IgPics = props => (
  <section className="home-part" style={PicsWrapper}>
    {props.igFeed.map(data => 
      data.media_type == "IMAGE" ?
      (<div style={PicContainer} key={data.id}>
        <IgPic src={data.media_url} />
      </div>) :
      (<div style={PicContainer} key={data.id}>
        <IgVideo src={data.media_url} />
      </div>)
    )}
  </section>
)

export default IgPics;