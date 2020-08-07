import IgFeedItem from "./igFeedItem"
import "./igFeed.scss";

const IgFeed = props => {
  const latestFeed = props.igFeed.slice(0,7)

  return(<>
    <div className="igFeedContainer">
      <h3>feed</h3>
      {latestFeed.map(data => (
        <IgFeedItem
          key={data.id}
          timestamp={data.timestamp}
          caption={data.caption}
          imageURL={data.media_url}
        />
      ))}
    </div>
  </>)
}  
  


export default IgFeed