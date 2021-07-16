/*
 * @Author: Murphy
 * @Date: 2021-07-03 21:18:50
 * @LastEditTime: 2021-07-04 15:53:16
 */
import React from "react";
import Button from "./Button";
import { useLocation } from "react-router";
import PropTypes from "prop-types";

const Header = ({ title, onChangeShow, showAddBtnColor }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAddBtnColor === true ? "red" : "green"}
          text={`${showAddBtnColor === true ? "Close" : "Add"}`}
          onClick={onChangeShow}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
