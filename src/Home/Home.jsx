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
      setTodos([...todos, { text: newTodo }]); // todos 배열에 새로운 할 일 추가
      setNewTodo(""); // 필드 입력값 초기화
    }
  };

  // 필드 입력값을 작성하고 엔터 키 누르면 실행
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAddTodo(); // 엔터 키 누르면 todos 배열에 newTodo값을 추가
  };

  // todos 수정 버튼 누르면 입력값 업데이트
  const handleEditChange = (e) => {
    setCurrentTodo(e.target.value);
  };

  // 수정 버튼 클릭 시 호출
  const handleEditClick = (index) => {
    setIsEditing(index); // 해당 할 일 인덱스를 isEditing에 저장
    setCurrentTodo(todos[index].text); // 현재 수정해야 할 할 일 설정
  };

  // 할 일 수정 저장 버튼 클릭 시 호출
  const handleSaveClick = (index) => {
    const updateTodos = [...todos]; // todos 배열 복제
    updateTodos[index].text = currentTodo; // 해당 인덱스의 할 일 내용 수정
    setTodos(updateTodos); // 수정된 todos 배열로 업데이트
    setIsEditing(null); // 수정 완료 후 수정 모드 종료
  };

  // 할 일 수정 취소 버튼 클릭 시 호출
  const handleCancelClick = () => {
    setIsEditing(null); // 수정 모드 종료
  };

  // 할 일 삭제 버튼 클릭 시 호출
  const handleDeleteClick = (index) => {
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index); // 해당 인덱스의 할 일 제외한 새 배열 생성
    setTodos(updatedTodos); // 수정된 할 일 목록으로 업데이트
  };

  // 할 일 체크 버튼 클릭 시 호출
  const handleCheckClick = (index) => {
    if (isEditing !== index) {
      //해당 인덱스의 할 일이 수정 하고있는지 확인 (해당 할 일은 수정하고있을 때 체크 못하도록)
      const updatedTodos = [...todos]; // todos 배열 복제
      updatedTodos[index].isChecked = !updatedTodos[index].isChecked; // 해당 인덱스의 체크 상태 토글
      setTodos(updatedTodos); // 수정된 할 일 목록으로 업데이트
    }
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
          <p>할 일을 만들어 보세요😎</p>
        ) : (
          todos.map((todo, index) => (
            <div key={index} className="todolist-container">
              <div className="checkbox">
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  className={todo.isChecked ? "icon checked" : "icon"}
                  onClick={() => handleCheckClick(index)}
                />
                {isEditing === index ? ( // 수정 중인 할 일 텍스트 필드
                  <input
                    type="text"
                    spellCheck="false"
                    size="20"
                    maxLength="16"
                    value={currentTodo}
                    onChange={handleEditChange}
                    autoFocus
                  />
                ) : (
                  // 수정 중이 아닌 할 일 텍스트 필드
                  <input
                    type="text"
                    spellCheck="false"
                    size="20"
                    maxLength="16"
                    value={todo.text}
                    readOnly
                  />
                )}
              </div>
              {isEditing === index ? (
                // 수정 중인 할 일 저장 및 취소 버튼
                <>
                  <button onClick={() => handleSaveClick(index)}>저장</button>
                  <button onClick={handleCancelClick}>취소</button>
                </>
              ) : (
                // 수정 중이 아닌 할 일 수정 및 삭제 버튼
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
              )}
            </div>
          ))
        )}
      </div>
      <div className="createitem-container">
        <div className="createitem-icon">
          <FontAwesomeIcon icon={faStar} />
          <input
            type="text"
            spellCheck="false"
            size="20"
            maxLength="16"
            placeholder="할 일을 입력해주세요"
            value={newTodo}
            onKeyDown={handleKeyPress}
            onChange={handleInputChange}
            autoFocus
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
