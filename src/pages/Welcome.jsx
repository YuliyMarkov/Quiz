import React, { useEffect, useState } from 'react';
import { Header } from "../components/Header";
import { AppLabel } from "../components/AppLabel";
import { AppButton } from "../components/AppButton";

const Welcome = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Регулярное выражение для проверки email
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordAgainValue, setPasswordAgainValue] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const [checkBtn, setCheckBtn] = useState(true);

  const handleClick = () => {
    if (!emailRegex.test(emailValue)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (passwordValue.length < 8) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    // Проверка совпадения паролей
    if (passwordValue !== passwordAgainValue) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }
  };

  useEffect(() => {
    // Разблокировка кнопки, если все поля заполнены
    if (emailValue && passwordValue && passwordAgainValue) {
      setCheckBtn(false);
    } else {
      setCheckBtn(true);
    }
  }, [emailValue, passwordValue, passwordAgainValue]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header headerText="Регистрация" headerType="h1" />
          <form className="welcome__form">
            <AppLabel
              labelText="Введите адрес электронной почты"
              inputPlaceholder="example@email.uz"
              errorText="Введите корректный адрес электронной почты"
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
              errorText="Пароль должен быть не менее 8 символов"
              inputType="password"
              id="password"
              isRequired
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
              isRequired
              labelChange={setPasswordAgainValue}
              labelValue={passwordAgainValue}
              hasError={passwordMatchError}
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
