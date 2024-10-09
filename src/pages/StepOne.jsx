import React, { useState, useEffect } from "react";
import { LinkButton } from "../components/LinkButton";
import { Header } from "../components/Header";
import { AppLabel } from "../components/AppLabel";
import { ProgressBar } from "../components/ProgressBar";

const StepOne = () => {
  const [answerValue, setAnswerValue] = useState("");
  const [answerError, setAnswerError] = useState(false);
  const [checkBtn, setCheckBtn] = useState(true);

  const checkWordCount = (text) => {
    return text.trim().split(/\s+/).length >= 3;
  };

  const handleClick = () => {
    if (!checkWordCount(answerValue)) {
      setAnswerError(true);
    } else {
      setAnswerError(false);
    }
  };

  useEffect(() => {
    if (checkWordCount(answerValue)) {
      setCheckBtn(false);
      setAnswerError(false);
    } else {
      setCheckBtn(true);
    }
  }, [answerValue]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={1} />
          <div className="question">
            <Header
              headerType="h2"
              headerText="1. Какую цель вы хотите достичь с помощью нашего курса?"
            />
            <label className="input-wrapper">
              <AppLabel
                id="quizanswer"
                name="answer"
                inputPlaceholder="Ваш ответ"
                inputType="text"
                isRequired={true}
                labelValue={answerValue}
                labelChange={setAnswerValue}
                hasError={answerError}
                errorText="Введите ответ, содержащий не менее 3 слов"
              />
            </label>
            <LinkButton 
              path="/step-two"
              buttonText="Далее"
              isDisabled={checkBtn}
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
