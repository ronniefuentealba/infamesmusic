import SocialButton from "../socialButton/socialButton";

const SocialBar = props => (
  <div className="RrssBar">
    {props.socialLinks.map(button => (
      <SocialButton
        key={button.label}
        path={button.path}
        label={button.label}
      />
    ))}
  </div>
);

export default SocialBar;