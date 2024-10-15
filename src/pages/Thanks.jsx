import React from "react";
import { useCourse } from "../contexts/CourseContext"; // Импортируйте контекст

const Thanks = () => {
  const { course } = useCourse(); // Получите курс из контекста

  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <h1>Спасибо за прохождение опроса!</h1>
          {course && <p>Вы выбрали курс: {course}</p>} 
          <button type="button" id="get-link">
            Получить ссылку
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
