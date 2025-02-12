import { ThemeContext, THEMES } from './index';
import { useState } from 'react';

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(THEMES.LIGHT);

    const toggleTheme = () => {
        setTheme((currentTheme) => {
            if (currentTheme === THEMES.DARK) {
                return THEMES.LIGHT;
            } else {
                return THEMES.DARK;
            }
        });
    };

    return (
        <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
    );
};
