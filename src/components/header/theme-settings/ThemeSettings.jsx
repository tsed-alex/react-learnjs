import { use } from 'react';
import { ThemeContext, THEMES } from '../../theme-context';
import { Button } from '../../button/Button';

export const ThemeSettings = () => {
    const { theme, toggleTheme } = use(ThemeContext);
    return (
        <div>
            <span style={{ marginRight: '5px' }}>Change your theme on</span>
            <Button
                title={theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT}
                onClick={toggleTheme}
            />
        </div>
    );
};
