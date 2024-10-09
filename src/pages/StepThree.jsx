import React from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";
import EmojiVariantsList from "../components/EmojiVariantsList";
import { Header } from "../components/Header";
import { LinkButton } from "../components/LinkButton";

const StepThree = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/step-four");
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <div className="question-block">
          <ProgressBar currentStep={3} />
            <Header
              headerType="h2"
              headerText="1. Какая картинка лучше всего отображает ваши эмоции от потенциальных 3 2-часовых уроков в неделю?"
            />
            <EmojiVariantsList />
            <LinkButton path="/step-four" buttonText="Далее" handleClick={handleNext} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
