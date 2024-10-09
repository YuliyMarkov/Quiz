import React, { useContext, useEffect, useState } from 'react';
import { Header } from "../components/Header";
import { AppLabel } from "../components/AppLabel";
import { useNavigate } from 'react-router-dom';
import { LinkButton } from "../components/LinkButton";
import { ThemeContext, themes } from "../contexts/themeContext";

const Welcome = () => {
    const navigate = useNavigate();
    const phoneRegex = /^\+?\d{1,4}?[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/;
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}( [a-zA-Zа-яА-ЯёЁ]{1,20})?$/;  
    const { theme, toggleTheme } = useContext(ThemeContext); // Деструктуризация правильна

    const [nameValue, setNameValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");

    const [checkBtn, setCheckBtn] = useState(true);
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    const goToNextPage = () => {
        navigate("/step-one");
    };

    const handleClick = () => {
        const isNameError = !nameRegex.test(nameValue);
        const isPhoneError = !phoneRegex.test(phoneValue);
        
        setNameError(isNameError);
        setPhoneError(isPhoneError);
    
        if (!isNameError && !isPhoneError) {
            goToNextPage();
        }
    };

    useEffect(() => {
        if (nameValue && phoneValue) {
            setCheckBtn(false);
        } else {
            setCheckBtn(true);
        }
    }, [nameValue, phoneValue]);

    return (
        <div className={`container ${theme === themes.dark ? "_dark" : ""}`}>
            <div className="wrapper">
                <div className="welcome">
                    <button onClick={toggleTheme}>Смена темы</button>
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
                        <LinkButton 
                            path="/step-one"
                            buttonText="Далее"
                            isDisabled={checkBtn}
                            handleClick={handleClick}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
