
function truncate(str, n){
  return (str.length > n) ? str.substr(0, n-1) + '...' : str;
};

const IgFeedItem = props => {
  const date = new Date(props.timestamp).toLocaleDateString()
  const dateF = new Date(props.timestamp)
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(dateF)
  const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(dateF)
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateF)
  const dateFormatted = `${day}.${month}.${year}`
  const maxCaption = truncate(props.caption,130)

  return(
    <>
      <p>
        <span className="igFeedDate">{dateFormatted}</span> <br/>
        <span className="igFeedComment">{maxCaption}</span>
      </p>
    </>
  );
}

export default IgFeedItem;