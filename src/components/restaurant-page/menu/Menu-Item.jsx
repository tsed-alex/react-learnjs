import React from 'react';
import { Counter } from '../counter/Counter';
import { useCount } from './use-count';

export const MenuItem = ({ item }) => {
    const { count, onIncrement, onDecrement } = useCount();

    return (
        <>
            <div className="menu-item">
                <div className="menu-description">
                    <div>{item.name}</div>
                    <div className="ingredients">
                        ({item?.ingredients?.join('/')})
                    </div>
                </div>
                <div className="menu-price">{item.price}$</div>
            </div>
            <Counter
                value={count}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
            />
        </>
    );
};
