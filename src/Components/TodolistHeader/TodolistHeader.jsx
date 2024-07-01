import React from "react";
import "./TodolistHeader.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const TodolistHeader = () => {
  return (
    <div className="title-container">
      <div className="title-icon">
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className="title">TodoList</div>
    </div>
  );
};

export default TodolistHeader;
