import IgFeedItem from "./igFeedItem"
import "./igFeed.scss";

const IgFeed = props => (  
  <>
    <div className="igFeedContainer">
      <h3>Feed</h3>
      {props.igFeed.map(data => (
        <IgFeedItem
          key={data.id}
          timestamp={data.timestamp}
          caption={data.caption}
          imageURL={data.media_url}
        />
      ))}
    </div>
  </>
)

export default IgFeed