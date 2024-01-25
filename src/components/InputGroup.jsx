import React, { forwardRef, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

import "../assets/css/InputGroup.css";

const InputGroup = forwardRef((props, ref) => {
  const { error, errorMessage, label, type, id } = props;

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
      {error && <h5 className="error_message">{errorMessage}</h5>}
    </div>
  );
});

export default InputGroup;
