const IgFeedItem = props => {
  const date = new Date(props.timestamp)
  const stDate = date.toLocaleDateString()
  return(
    <>
      <p className={props.label}>
        <span className="igFeedDate">{stDate}</span> <br/>
        <span className="igFeedComment">{props.caption}</span>
      </p>
    </>
);
}

export default IgFeedItem;