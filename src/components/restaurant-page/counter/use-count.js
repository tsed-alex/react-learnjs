import { useState } from 'react';

export const useCount = (value) => {
    const [count, setCount] = useState({ value: value });

    const onIncrement = () => {
        setCount((prevState) => {
            const newValue = prevState.value + 1;
            return {
                value: newValue > 5 ? prevState.value : newValue
            };
        });
    };

    const onDecrement = () => {
        setCount((prevState) => {
            const newValue = prevState.value - 1;
            return {
                value: newValue < 0 ? prevState.value : newValue
            };
        });
    };

    return {
        count: count.value,
        onIncrement,
        onDecrement
    };
};
