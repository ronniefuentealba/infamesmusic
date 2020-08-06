const IgFeedItem = props => {
  const date = new Date(props.timestamp).toLocaleDateString()
  return(
    <>
      <p className={props.label}>
        <span className="igFeedDate">{date}</span> <br/>
        <span className="igFeedComment">{props.caption}</span>
      </p>
    </>
  );
}

export default IgFeedItem;