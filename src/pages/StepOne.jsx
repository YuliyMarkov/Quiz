import React, { useState, useEffect } from "react";
import { AppButton } from "../components/AppButton";

const StepOne = () => {
  const [answerValue, setAnswerValue] = useState("");
  const [answerError, setAnswerError] = useState(false);
  const [checkBtn, setCheckBtn] = useState(true);

  const answerRegex = /^[0-9]+$/;


  const handleClick = () => {
    if (!answerRegex.test(answerValue)) {
      setAnswerError(true);
    } else {
      setAnswerError(false);
    }
  };

  
  useEffect(() => {
    if (answerValue && !answerError) {
      setCheckBtn(false);
    } else {
      setCheckBtn(true);
    }
  }, [answerValue, answerError]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder="Ваш ответ"
                value={answerValue}
                onChange={(e) => setAnswerValue(e.target.value)}
              />
              {answerError && (
                <span id="error-message" style={{ color: 'red' }}>
                  Введите номер в правильном формате, например: 123
                </span>
              )}
            </label>
            <AppButton
              buttonText="Далее"
              isDisabled={checkBtn}
              id="next-btn"
              buttonClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
