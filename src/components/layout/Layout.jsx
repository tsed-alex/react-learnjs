import React from 'react';
import PropTypes from 'prop-types';
import { RestaurantPage } from '../restaurant-page/RestaurantPage';
import { ProgressBar } from '../progress-bar/ProgressBar';
import styles from './layout.module.scss';
import { ScrollViewContextProvider } from '../scroll-view-context/scroll-view-context';
import { Header } from '../header/Header';
import { ThemeContextProvider } from '../theme-context/theme-context';

export const Layout = () => {
    return (
        <ThemeContextProvider>
            <ScrollViewContextProvider>
                <div className={styles.pageContainer}>
                    <ProgressBar />
                    <Header />
                    <main>
                        <RestaurantPage />
                    </main>
                    <footer>
                        <h2>three is footer</h2>
                    </footer>
                </div>
            </ScrollViewContextProvider>
        </ThemeContextProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node
};
