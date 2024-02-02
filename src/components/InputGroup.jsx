/* eslint-disable react/display-name */
import React, { forwardRef, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import PropTypes from "prop-types";

import "../assets/css/InputGroup.css";

const InputGroup = forwardRef((props, ref) => {
  const { error, errormessage, label, type, id } = props;

  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="input_group">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <div className={`input_field ${error && "error"}`}>
        <input ref={ref} {...props} className="input" type={inputType} />
        {type === "password" && (
          <button
            className="eye_icon"
            type="button"
            onClick={showPasswordHandler}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
      {error && <h5 className="error_message">{errormessage}</h5>}
    </div>
  );
});

InputGroup.propTypes = {
  error: PropTypes.bool,
  errormessage: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
};

export default InputGroup;
