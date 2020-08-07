
function truncate(str, n){
  return (str.length > n) ? str.substr(0, n-1) + '...' : str;
};

const IgFeedItem = props => {
  const date = new Date(props.timestamp).toLocaleDateString()
  const maxCaption = truncate(props.caption,130)

  return(
    <>
      <p className={props.label}>
        <span className="igFeedDate">{date}</span> <br/>
        <span className="igFeedComment">{maxCaption}</span>
      </p>
    </>
  );
}

export default IgFeedItem;