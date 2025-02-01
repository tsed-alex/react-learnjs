import { useState } from 'react';

export const useCount = ({ min = 0, max = 5 } = {}) => {
    const [count, setCount] = useState(min);

    const onIncrement = () => {
        setCount((prevValue) => Math.min(prevValue + 1, max));
    };

    const onDecrement = () => {
        setCount((prevValue) => Math.max(prevValue - 1, min));
    };

    return {
        count,
        onIncrement,
        onDecrement
    };
};
