/*
 * @Author: Murphy
 * @Date: 2021-07-04 15:37:09
 * @LastEditTime: 2021-07-04 15:50:50
 */
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p> Copyright &copy; 2021</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
