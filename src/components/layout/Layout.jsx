import React from 'react';
import PropTypes from 'prop-types';
import {RestaurantPage} from "../restaurant-page/RestaurantPage";

export const Layout = () => {
    return (
        <div className={'page-container'}>
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
    );
};

Layout.propTypes = {
    children: PropTypes.node
};
