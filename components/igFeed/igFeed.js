import IgFeedItem from "./igFeedItem"

const IgFeed = props => (
  <div className="igFeed">
    <h3>Feed</h3>
    {props.igFeed.map(feed => (
      <IgFeedItem
        key={feed.date}
        date={feed.date}
        comment={feed.comment}
      />
    ))}
  </div>
)

export default IgFeed