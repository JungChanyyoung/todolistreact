import React from "react";
import "./TodolistItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const TodolistItem = () => {
  return (
    <div className="todolist-container">
      <div className="checkbox">
        <FontAwesomeIcon icon={faSquareCheck} className="icon" />
        <input
          type="text"
          value="호호"
          spellcheck="false"
          size="20"
          maxlength="16"
        />
      </div>
      <div>
        <FontAwesomeIcon icon={faPencil} className="icon" />
        <FontAwesomeIcon icon={faTrashCan} className="icon" />
      </div>
    </div>
  );
};

export default TodolistItem;
