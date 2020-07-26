const IgFeedItem = props => (
    <>
      <p className={props.label}>
        <span className="igFeedDate">{props.date}</span>
        <span className="igFeedComment">{props.comment}</span>
      </p>
    </>
);

export default IgFeedItem;