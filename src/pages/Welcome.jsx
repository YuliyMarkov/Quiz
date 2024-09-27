import React from 'react';
import Header from '../components/Header'; 
import AppLabel from '../components/AppLabel';  
import AppButton from '../components/AppButton';  
const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header headerType="h1" headerText="Добро пожаловать в квиз от лучшего учебного центра"/>
          <form className="welcome__form">
            <AppLabel/>
            <AppLabel/>
            {/* <label className="input-wrapper" htmlFor="username">
              Ваше имя
              <input
                required
                type="text"
                name="username"
                id="username"
                placeholder="Ваш ответ"
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label>
            <label className="input-wrapper" htmlFor="username">
              Ваш номер
              <input
                required
                type="tel"
                name="phone"
                id="phone"
                placeholder="+998 9- --- -- -- "
                pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
              />
              <span id="error-message">Введите номер в правильном формате</span>
            </label> */}
            {/* <button disabled type="submit" id="next-btn">
              Далее
            </button> */}
            <AppButton/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
