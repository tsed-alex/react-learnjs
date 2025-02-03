import { ScrollViewContext } from './index';
import { useState } from 'react';

export const ScrollViewContextProvider = ({ children }) => {
    const [scrollViewRef, setScrollViewRef] = useState(null);

    return (
        <ScrollViewContext value={{ scrollViewRef, setScrollViewRef }}>
            {children}
        </ScrollViewContext>
    );
};
