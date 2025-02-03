import { createContext } from 'react';

export const THEMES = {
    LIGHT: 'light',
    DARK: 'dark'
};

export const ThemeContext = createContext(THEMES.LIGHT);
