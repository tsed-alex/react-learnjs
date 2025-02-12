import styles from './tabs-controller.module.scss';
import classNames from 'classnames';
import { Button } from '../../button/Button';

export const TabsController = ({ restaurants, chooseRestaurantFn }) => {
    return (
        <div className={classNames(styles.tabsController)}>
            {restaurants.map((item, index) => (
                <Button
                    key={item.id}
                    onClick={() => chooseRestaurantFn(item)}
                    title={item.name}
                    className={classNames(styles.button)}
                />
            ))}
        </div>
    );
};
