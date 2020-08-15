import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  scrollDownWrap: {
    border: '1px solid white',
    borderRadius: 100,
    '& span': {
      display:'block',
      fontSize: '2em',
      padding:10,
      transform: 'rotate(90deg)'
    },
    margin: '0 auto',
    position:'relative',
    width: '100px'
  }
})

const ScrollDown = () => {
  const classes = useStyles()

  return (
    <div className={classes.scrollDownWrap}><span>{'->'}</span></div>
  )}

export default ScrollDown