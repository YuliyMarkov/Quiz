import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerLabel } from "../components/AnswerLabel";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const StepTwo = () => {
  const [course, setCourse] = useState(null);
  const variants = [
    {
      id: "variant-1",
      courseName: "Frontend",
    },
    {
      id: "variant-2",
      courseName: "Python",
    },
    {
      id: "variant-3",
      courseName: "DATA Analytics",
    },
    {
      id: "variant-4",
      courseName: "UX/UI Design",
    },
  ];
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar />
          <div className="indicator__text">
            <span className="indicator__description">
              Скидка за прохождение опроса:
            </span>
            <span className="indicator__value">15%</span>
          </div>
          <div className="indicator__progressbar">
            <div className="indicator__unit indicator__unit-1 _active"></div>
            <div className="indicator__unit indicator__unit-2"></div>
            <div className="indicator__unit indicator__unit-3"></div>
            <div className="indicator__unit indicator__unit-4"></div>
          </div>
        </div>
        <div className="question">
          <Header headerType="h1" headerText="1. Какой курс Вас интересует?" />
          <ul className="variants">
            {variants.map((elem) => (
              <AnswerLabel
                id={elem.id}
                answerLabel={elem.courseName}
                key={elem.id}
                labelChange={() => setCourse(elem.courseName)}
              />
            ))}
            {/*<li className="variant-wrapper">
                <input required type="radio" name="variant-1" id="variant-1" />
                <label htmlFor="variant-1">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant-2" id="variant-2" />
                <label htmlFor="variant-2">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant-3" id="variant-3" />
                <label htmlFor="variant-3">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant-4" id="variant-4" />
                <label htmlFor="variant-4">Ваш ответ</label>
              </li>*/}
          </ul>
          {!course ?   <AppButton isDisabled/> : <AppButton isDisabled = {false}/>}           
            
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
