import React from "react";
import { AppButton } from "./AppButton";
import { Link } from "react-router-dom";

export const LinkButton = ({ path, buttonText, ...props }) => {
  return (
    <Link to={path} {...props}>
      <AppButton buttonText={buttonText} />
    </Link>
  );
};
