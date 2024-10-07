import React from "react";
import { LinkButton } from "../components/LinkButton";
import { ProgressBar } from "../components/ProgressBar";

const StepThree = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={3} />
          <div className="question">
            <h2>3. Занимательный вопрос</h2>
            <ul className="emoji-variants">
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-1" />
                <label htmlFor="variant-1">
                  <img src="./img/laugh.png" alt="laugh" />
                  <p>Ваш ответ 1</p>
                </label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-2" />
                <label htmlFor="variant-2">
                  <img src="./img/hearts.png" alt="hearts" />
                  <p>Ваш ответ 2</p>
                </label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-3" />
                <label htmlFor="variant-3">
                  <img src="./img/smirk.png" alt="smirk" />
                  <p>Ваш ответ 3</p>
                </label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-4" />
                <label htmlFor="variant-4">
                  <img src="./img/fright.png" alt="fright" />
                  <p>Ваш ответ 4</p>
                </label>
              </li>
            </ul>
            <LinkButton path="step-four"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
