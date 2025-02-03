import React from 'react';
import PropTypes from 'prop-types';
import { RestaurantPage } from '../restaurant-page/RestaurantPage';
import { ProgressBar } from '../progress-bar/ProgressBar';
import styles from './layout.module.scss';
import classNames from 'classnames';
import { ScrollViewContextProvider } from '../scroll-view-context/scroll-view-context';

export const Layout = () => {
    return (
        <ScrollViewContextProvider>
            <div className={classNames(styles.pageContainer)}>
                <ProgressBar />
                <header>
                    <h2>three is header</h2>
                </header>
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
