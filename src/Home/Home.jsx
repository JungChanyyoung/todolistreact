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

function Home() {
  const [todos, setTodos] = useState([]); // todos : 할 일 목록이 저장된 배열
  const [newTodo, setNewTodo] = useState(""); // 새로운 할 일 입력값 저장
  const [isEditing, setIsEditing] = useState(null); // isEditing : 수정 index, null : 수정 모드가 아니다!
  const [currentTodo, setCurrentTodo] = useState(""); // currentTodo : 현재 수정해야 할 일

  // 새로운 할 일을 입력할 때마다 newTodo가 업데이트 되는 것
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  // 저장 버튼을 눌렀을 때 실행
  // todos 배열에 newTodo값을 추가
  const handleAddTodo = (e) => {
    if (newTodo.trim() !== "") {
      // newTodo값이 빈 문자열이 아닌 경우
      // trim : 앞 뒤 공백 제거
      setTodos([...todos, { text: newTodo }]); //todos배열을 객체로 접근
      setNewTodo(""); //필드 입력값 초기화
    }
  };

  // 필드 입력값을 작성하고 엔터 키 누르면 실행
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAddTodo(); // 엔터 키 누느면 todos 배열에 newTodo값을 추가
  };

  // todos 수정 버튼 누르면 입력값 업데이트
  const handleEditChange = (e) => {
    setCurrentTodo(e.target.value);
  };

  // 수정 버튼 클릭 시 호출
  const handleEditClick = (index) => {
    setIsEditing(index); // 해당 할 일 인덱스를 isEditing에 저장
    setCurrentTodo(todos[index].text); // currentTodo 업데이트 = 상태 설정
  };

  const handleSaveClick = (index) => {
    const updateTodos = [...todos]; // updateTodos는 todos의 배열
    updateTodos[index].text = currentTodo; // 인텍스를 찾아 수정할 텍스트 저장
    setTodos(updateTodos);
    setIsEditing(null); //저장 후 수정모드가 아님
  };

  const handleCancelClick = () => {
    setIsEditing(null);
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
        {todos.map((todo, index) => (
          <div key={index} className="todolist-container">
            <div className="checkbox">
              <FontAwesomeIcon icon={faSquareCheck} className="icon" />
              {isEditing === index ? ( // isEditing이 인덱스와 같을때 수정 필드를 보여줌
                <input
                  type="text"
                  spellcheck="false"
                  size="20"
                  maxlength="16"
                  value={currentTodo} // 할 일 수정 내용
                  onChange={handleEditChange}
                />
              ) : (
                // 그렇지 않으면 할 일 리스트 그대로 보여주기 모드
                <input
                  type="text"
                  spellcheck="false"
                  size="20"
                  maxlength="16"
                  value={todo.text}
                />
              )}
            </div>
            {isEditing === index ? (
              // isEditing이 현재 인덱스와 같을 때 수정 모드로 저장/취소 버튼 생성
              // 인덱스 매개변수를 handleSaveClick 이벤트에 넘겨주어 저장 버튼을 클릭시 즉시 실행되는것이 아니라 인덱스를 찾고 실행됨
              // 취소 버튼은 인덱스가 필요 없기 때문에 즉시 실행
              <>
                <button onClick={() => handleSaveClick(index)}>저장</button>
                <button onClick={handleCancelClick}>취소</button>
              </>
            ) : (
              // 그렇지 않으면 수정/ 삭제 버튼 생성
              <div>
                <FontAwesomeIcon
                  icon={faPencil}
                  className="icon"
                  onClick={() => handleEditClick(index)}
                />
                <FontAwesomeIcon icon={faTrashCan} className="icon" />
              </div>
            )}
          </div>
        ))}
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
            value={newTodo}
            onKeyPress={handleKeyPress}
            onChange={handleInputChange}
          />
        </div>
        <button className="save" onClick={handleAddTodo}>
          저장
        </button>
      </div>
    </div>
  );
}

export default Home;
