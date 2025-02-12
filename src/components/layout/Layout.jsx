import React from 'react';
import PropTypes from 'prop-types';
import { RestaurantPage } from '../restaurant-page/RestaurantPage';
import { ProgressBar } from '../progress-bar/ProgressBar';
import styles from './layout.module.scss';
import { ScrollViewContextProvider } from '../scroll-view-context/scroll-view-context';
import { Header } from '../header/Header';

export const Layout = () => {
    return (
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
    );
};

Layout.propTypes = {
    children: PropTypes.node
};
