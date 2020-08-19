import IgFeedItem from "./igFeedItem"
import { createUseStyles } from "react-jss"
import './igFeed.scss'

const IgFeed = props => {
  const latestFeed = props.igFeed.slice(0,3)

  return(<>
    <div className={'igFeedContainer'}>
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