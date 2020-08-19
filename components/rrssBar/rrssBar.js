import './rrssBar.scss';

const SocialButton = props => {
  return (
  <>
    <a href={props.path} target={"_blank"} className={'rrssItem'}>
        {props.label}
    </a>
    <span  className={'rrssItem divider'}>
      <svg height="6" width="30">
        <line x1="0" y1="0" x2="40" y2="0" stroke='white' strokeWidth="3" />
      </svg>
    </span>
  </>
)};

const SocialBar = props => {
  return (
  <div className={'rrssBar'}>
    {props.socialLinks.map(button => (
      <SocialButton
        key={button.label}
        path={button.path}
        label={button.label}
      />
    ))}
  </div>
)};

export default SocialBar;

