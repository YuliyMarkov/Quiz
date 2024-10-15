import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";

const StepFour = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextClick = () => {
    navigate("/thanks");
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={4} />
          <div className="question">
            <h2>4. Мне влом придумывать вопрос. Это ведь не проблема?</h2>
            <ul className="level-variants">
              {[1, 2, 3, 4, 5].map((num) => (
                <li key={num} className="variant-wrapper">
                  <input
                    required
                    type="radio"
                    name="variant"
                    id={`variant-${num}`}
                    value={num}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor={`variant-${num}`}>{num}</label>
                </li>
              ))}
            </ul>

            <button
              type="button"
              id="next-btn"
              onClick={handleNextClick}
              disabled={!selectedOption}
            >
              Далее
            </button>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default StepFour;
