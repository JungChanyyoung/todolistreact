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
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [currentTodo, setCurrentTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo }]);
      setNewTodo("");
    }
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAddTodo();
  };

  const handleDeleteClick = (index) => {
    const updateTodo = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updateTodo);
  };

  const handleEditClick = (index) => {
    setIsEditing(index);
    setCurrentTodo(todos[index].text);
  };

  const handleEditChange = (e) => {
    setCurrentTodo(e.target.value);
  };

  return (
    <div>
      <div className="title-container">
        <div className="title-icon">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="title">TodoList</div>
      </div>
      <div className="todolist-content">
        {todos.length === 0 ? (
          <p>할일을 입력해 주세요</p>
        ) : (
          todos.map((todo, index) => (
            <div key={index} className="todolist-container">
              <div className="checkbox">
                <FontAwesomeIcon icon={faSquareCheck} className="icon" />
                {isEditing === index ? (
                  <input
                    type="text"
                    size="20"
                    maxLength="16"
                    value={currentTodo}
                    onChange={handleEditChange}
                    autoFocus
                  />
                ) : (
                  <div>{todo.text}</div>
                )}
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faPencil}
                  className="icon"
                  onClick={() => handleEditClick(index)}
                />
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="icon"
                  onClick={() => handleDeleteClick(index)}
                />
              </div>
            </div>
          ))
        )}
      </div>
      <div className="createitem-container">
        <div className="createitem-icon">
          <FontAwesomeIcon icon={faStar} />
          <input
            type="text"
            size="20"
            maxLength="16"
            placeholder="할 일을 입력해주세요"
            value={newTodo}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
        </div>
        <button className="save" onClick={handleAddTodo}>
          저장
        </button>
      </div>
    </div>
  );
};
