import React from 'react';
import { Counter } from '../counter/Counter';

export const DishCounter = ({ value, onChange }) => {
    return (
        <div>
            <span>Rating:</span>
            <Counter value={value} onChange={onChange} />
        </div>
    );
};
