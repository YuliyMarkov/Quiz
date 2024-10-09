import React, { useState, useEffect, useMemo } from "react";
import { ThemeContext, themes } from "./themeContext";

export const ThemeProvider = ({ children }) => {
    const [themeValue, setThemeValue] = useState(themes.light); 

    useEffect(() => {
        const persistedTheme = JSON.parse(localStorage.getItem("currentTheme"));
        if (persistedTheme) {
            setThemeValue(persistedTheme);
        }
    }, []);

    const toggleTheme = () => {
        setThemeValue((prev) => {
            const newTheme = prev === themes.light ? themes.dark : themes.light;
            localStorage.setItem("currentTheme", JSON.stringify(newTheme));
            return newTheme;
        });
    };

    const contextValue = useMemo(() => ({
        theme: themeValue,
        toggleTheme,
    }), [themeValue]);

    return (
        <ThemeContext.Provider value={contextValue}> {/* Передача значения контекста */}
            {children}
        </ThemeContext.Provider>
    );
};
