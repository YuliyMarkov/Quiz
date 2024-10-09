import React from "react";

export const ProgressBar = ({ currentStep }) => {
  const variants = [1, 2, 3, 4];
  
  const discountPercentage = currentStep * 15;

  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">
          Скидка за прохождение опроса:
        </span>
        <span className="indicator__value">{discountPercentage}%</span>
      </div>
      <div className="indicator__progressbar">
        {variants.map((elem, idx) => (
          <div
            key={idx}
            className={`indicator__unit indicator__unit-${elem} ${currentStep > idx ? "_active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};
