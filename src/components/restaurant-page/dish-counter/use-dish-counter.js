import { useState } from 'react';

export const useDishCounter = (value, updateCount) => {
    const [dishCount, setDishCount] = useState({ value: value });

    const onIncrement = () => {
        setDishCount((prevState) => {
            const newValue =
                prevState.value + 1 > 5 ? prevState.value : prevState.value + 1;

            updateCount(newValue);

            return {
                value: newValue
            };
        });
    };

    const onDecrement = () => {
        setDishCount((prevState) => {
            const newValue =
                prevState.value - 1 < 0 ? prevState.value : prevState.value - 1;

            updateCount(newValue);

            return {
                value: newValue
            };
        });
    };

    return {
        count: dishCount.value,
        onIncrement,
        onDecrement
    };
};
