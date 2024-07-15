import React, { useState } from "react";
import "../Components/TodolistHeader/TodolistHeader";
import "../Components/TodolistItem/TodolistItem";
import "../Components/CreateItem/CreateItem";
import "../Components/TodolistContent/TodolistContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faTrashCan,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

export const Home2 = () => {
  return (
    <div>
      <div className="title-container">
        <div className="title-icon">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="title">TodoList</div>
      </div>
      <div className="todolist-content">
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
      </div>
      <div className="createitem-container">
        <div className="createitem-icon">
          <FontAwesomeIcon icon={faStar} />
          <input
            type="text"
            spellcheck="false"
            size="20"
            maxlength="16"
            placeholder="할 일을 입력해주세요"
          />
        </div>
        <button className="save">저장</button>
      </div>
    </div>
  );
};
