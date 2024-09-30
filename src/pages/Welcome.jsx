import React, { useEffect, useState } from 'react';
import { Header } from "../components/Header";
import { AppLabel } from "../components/AppLabel";
import { AppButton } from "../components/AppButton";

const Welcome = () => {
  const phoneRegex = /^\+?\d{1,4}?[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/;
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/;  
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const [checkBtn, setCheckBtn]=useState(true)
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleClick = () => {
    if (!nameRegex.test(nameValue)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!phoneRegex.test(phoneValue)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };
  useEffect(() => {
    if(nameValue && phoneValue){
      setCheckBtn(false)
    } else{
      setCheckBtn(true)
    }
  }, [nameValue, phoneValue]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header
            headerType="h1"
            headerText="Добро пожаловать в квиз от лучшего учебного центра"
          />
          <form className="welcome__form">
            <AppLabel
              labelText="Ваше имя"
              errorText="Введите имя в правильном формате"
              id="username"
              isRequired
              inputPlaceholder="Иван Иванов"
              inputType="text"
              labelChange={setNameValue}
              labelValue={nameValue}
              hasError={nameError}
            />
            <AppLabel 
            labelText="Ваш номер"
            errorText="Введите номер в правильном формате, например"
            id="phone"
            inputPlaceholder="+998 9- --- -- --"
            inputType="tel"
            isRequired={true}
            labelChange={setPhoneValue}
            labelValue={phoneValue}
            hasError={phoneError}
            />
            <AppButton
            buttonText="Далее"
            isDisabled={checkBtn}
            buttonClick={handleClick}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
