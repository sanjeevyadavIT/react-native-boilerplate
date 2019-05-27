import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './';

const ThemeProvider = ({ theme, children }) => (
    <ThemeContext.Provider value={theme}>
        { children }
    </ThemeContext.Provider>
);

ThemeProvider.propTypes = {
    theme: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
}

ThemeProvider.defaultProps = {};

export default ThemeProvider;
export const ThemeConsumer = ThemeContext.Consumer;