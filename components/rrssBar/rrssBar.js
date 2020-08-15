import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  rrssBar: {
    left: -95,
    position: 'fixed',
    top:'45vh',
    transform: 'rotate(-90deg)',
    textTransform: 'uppercase',
  },
  rrssItem: {
    color: ({theme}) => theme.background,
    marginRight:20,
    textDecoration: 'none'
  }
})

const SocialButton = props => {
  const theme = useTheme()
  const classes = useStyles({theme})

  return (
  <>
    <a href={props.path} target={"_blank"} className={classes.rrssItem}>
        {props.label}
    </a>
  </>
)};

const SocialBar = props => {
  const theme = useTheme()
  const classes = useStyles({theme})

  return (
  <div className={classes.rrssBar}>
    {props.socialLinks.map(button => (
      <SocialButton
        key={button.label}
        path={button.path}
        label={button.label}
        theme={theme}
      />
    ))}
  </div>
)};

export default SocialBar;