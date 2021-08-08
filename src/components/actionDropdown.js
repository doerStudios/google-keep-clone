import React, { Component } from "react";
import { ThreeDotsVertical } from "react-bootstrap-icons";

const ActionDropdown = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <ThreeDotsVertical color="black" fontSize="1rem" />
    {children}
  </a>
));

export default ActionDropdown;
