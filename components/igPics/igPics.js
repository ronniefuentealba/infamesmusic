import Image from './../../components';

const PicsWrapper = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  listStyle: "none",
  margin: "0 0 125px",
  padding: 0
}

const PicContainer = {
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
    <video width="100%" controls>
      <source src={props.src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </>
)




const IgPics = props => (
  <section style={PicsWrapper}>
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