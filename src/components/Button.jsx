import PropTypes from "prop-types";


const Button = ({ type = "default", text = "Log In", onClick }) => {
 

  return (
    <button
      className={`btn btn-${type}`}
      onClick={() => onClick }
    >
      <span className="btn-text">{text}</span>
    </button>
  );
};



Button.propTypes = {
  type: PropTypes.oneOf(["default", "success", "danger", 'info', 'warning']),
  text: PropTypes.string,
  onClick: PropTypes.any
};


export default Button
