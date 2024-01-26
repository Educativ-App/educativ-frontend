import PropTypes from "prop-types";

const Button = ({ type = "default", text = "Log In", onClick, className }) => {
  return (
    <button className={`btn btn-${type} ${className}`} onClick={onClick}>
      <span className="btn-text">{text}</span>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["default", "success", "danger", "info", "warning"]),
  text: PropTypes.string,
  onClick: PropTypes.any,
  className: PropTypes.string
};

export default Button;
