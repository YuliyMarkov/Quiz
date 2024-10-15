import React, { useEffect, useState } from 'react';
import { Header } from "../components/Header";
import { AppLabel } from "../components/AppLabel";
import { AppButton } from "../components/AppButton";

const Welcome = () => {
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/; 
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordAgainValue, setPasswordAgainValue] = useState("");
  
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordAgainError, setPasswordAgainError] = useState(false);
  const [checkBtn, setCheckBtn] = useState(true);

  const handleClick = () => {
    if (!emailRegex.test(emailValue)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!passwordRegex.test(passwordValue)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (passwordValue !== passwordAgainValue) {
      setPasswordAgainError(true);
    } else {
      setPasswordAgainError(false);
    }
  };

  useEffect(() => {
    if (emailValue && passwordValue && passwordAgainValue && !passwordError && !passwordAgainError) {
      setCheckBtn(false);
    } else {
      setCheckBtn(true);
    }
  }, [emailValue, passwordValue, passwordAgainValue, passwordError, passwordAgainError]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header headerText="Регистрация" headerType="h1" />
          <form className="welcome__form">
            <AppLabel
              labelText="Введите адрес электронной почты"
              inputPlaceholder="example@email.uz"
              errorText="Введите адрес электронной почты"
              inputType="text"
              id="email"
              isRequired
              labelChange={setEmailValue}
              labelValue={emailValue}
              hasError={emailError}
            />
            <AppLabel
              labelText="Введите пароль"
              inputPlaceholder="Придумайте пароль"
              errorText="Пароль слишком простой"
              inputType="password"
              id="password"
              labelChange={setPasswordValue}
              labelValue={passwordValue}
              hasError={passwordError}
            />
            <AppLabel
              labelText="Повторите пароль"
              inputPlaceholder="Повторите пароль, который вы ввели выше"
              errorText="Пароли должны совпадать"
              inputType="password"
              id="passwordAgain"
              labelChange={setPasswordAgainValue}
              labelValue={passwordAgainValue}
              hasError={passwordAgainError}
            />
            <AppButton
              buttonText="Зарегистрироваться"
              isDisabled={checkBtn}
              id="next-btn"
              buttonClick={handleClick}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
