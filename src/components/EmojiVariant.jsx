import React from "react";

const EmojiVariant = ({ id, imgSrc, altText, label }) => {
  return (
    <li className="variant-wrapper">
      <input required type="radio" name="variant" id={`variant-${id}`} />
      <label htmlFor={`variant-${id}`}>
        <img src={imgSrc} alt={altText} />
        <p>{label}</p>
      </label>
    </li>
  );
};

export default EmojiVariant;
