import React, { use } from 'react';
import { Counter } from '../../counter/Counter';
import { useCount } from '../use-count';
import styles from './menu-item.module.scss';
import classNames from 'classnames';
import { UserContext } from '../../../user-context';

export const MenuItem = ({ item }) => {
    const { count, onIncrement, onDecrement } = useCount();
    const { user } = use(UserContext);

    return (
        <>
            <div className={classNames(styles.menuItem)}>
                <div className="menu-description">
                    <div>{item.name}</div>
                    <div className={classNames(styles.ingredients)}>
                        ({item?.ingredients?.join('/')})
                    </div>
                </div>
                <div className="menu-price">{item.price}$</div>
            </div>

            {user ? (
                <Counter
                    value={count}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                />
            ) : null}
        </>
    );
};
