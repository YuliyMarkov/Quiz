import React from "react";
import { Link } from "react-router-dom";
import { AppButton } from "./AppButton";

export const LinkButton = ({ path, buttonText, isDisabled, handleClick }) => {
  const handleLinkClick = (e) => {
    if (isDisabled) {
      e.preventDefault();
    } else {
      handleClick();
    }
  };

  return (
    <Link to={isDisabled ? "#" : path} onClick={handleLinkClick}>
      <AppButton buttonText={buttonText} isDisabled={isDisabled} />
    </Link>
  );
};
