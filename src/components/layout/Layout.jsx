import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { RestaurantPage } from '../restaurant-page/RestaurantPage';
import { ProgressBar } from '../progress-bar/ProgressBar';
import styles from './layout.module.scss';
import classNames from 'classnames';

export const Layout = () => {
    const viewerRef = useRef(null);

    return (
        <div className={classNames(styles.pageContainer)}>
            <ProgressBar viewerRef={viewerRef} />
            <header>
                <h2>three is header</h2>
            </header>
            <main>
                <RestaurantPage ref={viewerRef} />
            </main>
            <footer>
                <h2>three is footer</h2>
            </footer>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node
};
