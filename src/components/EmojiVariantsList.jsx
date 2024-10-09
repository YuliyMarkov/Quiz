import React from "react";
import EmojiVariant from "./EmojiVariant";

const EmojiVariantsList = () => {
  return (
    <ul className="emoji-variants">
      <EmojiVariant id="1" imgSrc="./img/laugh.png" altText="laugh" label="Фигня, справимся!" />
      <EmojiVariant id="2" imgSrc="./img/hearts.png" altText="hearts" label="Вообще по кайфу, братан!" />
      <EmojiVariant id="3" imgSrc="./img/smirk.png" altText="smirk" label="Думаю, справлюсь..." />
      <EmojiVariant id="4" imgSrc="./img/fright.png" altText="fright" label="Да ладно? 3 2-часовых урока!?" />
    </ul>
  );
};

export default EmojiVariantsList;
