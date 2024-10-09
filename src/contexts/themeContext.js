import { createContext } from "react";

export const themes = {
    dark: "dark",
    light: "light"
}

const initialState = {
    theme: themes.light,
    toggleTheme: () => {},
};

// Используйте одно и то же имя для контекста
export const ThemeContext = createContext(initialState);
