import IgFeedItem from "./igFeedItem"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  igFeedContainer: {
    color: 'white',
    margin: '0 30% 0 0'
  }
})
const IgFeed = props => {
  const classes = useStyles()
  const latestFeed = props.igFeed.slice(0,3)

  return(<>
    <div className={classes.igFeedContainer}>
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