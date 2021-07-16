/*
 * @Author: Murphy
 * @Date: 2021-07-03 21:36:29
 * @LastEditTime: 2021-07-04 12:31:45
 */
import React from "react";
import PorpTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="btn"
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "green",
};

Button.porpTypes = {
  text: PorpTypes.string,
  color: PorpTypes.string,
  onClick: PorpTypes.func,
};
export default Button;
