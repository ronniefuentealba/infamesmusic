
const SocialButton = props => (
  <a href={props.path} target={"_blank"}>
      <div
        className={`SocialButton`}
      >
        <span className="Label">{props.label}</span>
      </div>
  </a>
  );

export default SocialButton;