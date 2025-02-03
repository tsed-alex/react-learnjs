import styles from './header.module.scss';
import { ThemeSettings } from './theme-settings/ThemeSettings';
import { AuthoriseSettings } from './authorise-settings/AuthoriseSettings';

export const Header = () => {
    return (
        <header>
            <div className={styles.headerContainer}>
                <ThemeSettings />

                <AuthoriseSettings />
            </div>
        </header>
    );
};
