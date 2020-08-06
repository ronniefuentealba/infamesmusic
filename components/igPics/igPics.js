const PicsWrapper = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  listStyle: "none",
  margin: 0,
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
    <img style={PicItem} src={props.imageURL} />
  </>
)

const IgPics = props => (
  <ul style={PicsWrapper}>
    {props.igFeed.map(data => (
      <li style={PicContainer}>
        <IgPic imageURL={data.media_url}/>
      </li>
    ))}
  </ul>
)

export default IgPics;