import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerLabel } from "../components/AnswerLabel";
import { Header } from "../components/Header";
import { LinkButton } from "../components/LinkButton";
import { useNavigate } from "react-router-dom";

const StepTwo = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const variants = [
    { id: "variant-1", courseName: "Frontend" },
    { id: "variant-2", courseName: "Python" },
    { id: "variant-3", courseName: "DATA Analytics" },
    { id: "variant-4", courseName: "UX/UI Design" },
  ];

  const handleNextClick = () => {
    if (course) {
      navigate("/step-three");
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={2} />
        </div>
        <div className="question">
          <Header headerType="h2" headerText="2. Какой курс Вас интересует?" />
          <ul className="variants">
            {variants.map((elem) => (
              <AnswerLabel
                id={elem.id}
                answerLabel={elem.courseName}
                key={elem.id}
                labelChange={() => setCourse(elem.courseName)}
              />
            ))}
          </ul>
          <LinkButton 
            path="/step-three" 
            buttonText="Далее" 
            isDisabled={!course} 
            handleClick={handleNextClick}
          />
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
