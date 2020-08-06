
const SocialButton = props => (
  <>
    <a href={props.path} target={"_blank"} className="rrssLink">
        {props.label}
    </a>
  </>
  );

export default SocialButton;