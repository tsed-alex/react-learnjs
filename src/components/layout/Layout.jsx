import React from 'react';
import PropTypes from 'prop-types';

export const Layout = ({children}) => {
    return (
        <div className={'page-container'}>
            <header>
                <h2>three is header</h2>
            </header>
            <main>
                {children}
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
