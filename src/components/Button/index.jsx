import React from "react";

import "./style.scss";

const Button = ({ label, width, height, maxWidth }) => {
  return (
    <div
      style={{ height: height, maxWidth: maxWidth }}
      className="button_container"
    >
      <p>{label}</p>
    </div>
  );
};

export default Button;
