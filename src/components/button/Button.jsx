import { ThemeContext, THEMES } from '../theme-context';
import classNames from 'classnames';
import styles from './button.module.scss';
import { use } from 'react';

export const Button = ({ title, onClick, className = '' }) => {
    const { theme } = use(ThemeContext);

    return (
        <button
            className={classNames(styles.button, className, {
                [styles.lightTheme]: theme === THEMES.LIGHT,
                [styles.darkTheme]: theme === THEMES.DARK
            })}
            onClick={onClick}
        >
            {title}
        </button>
    );
};
