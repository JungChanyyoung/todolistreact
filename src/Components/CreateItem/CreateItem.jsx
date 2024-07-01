import React from "react";
import "./CreateItem.scss";
import "../TodolistHeader/TodolistHeader.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export const CreateItem = () => {
  return (
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
  );
};
