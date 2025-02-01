import styles from './tabs-controller.module.scss';
import classNames from 'classnames';

export const TabsController = ({ restaurants, chooseRestaurantFn }) => {
    return (
        <div className={classNames(styles.tabsController)}>
            {restaurants.map((item, index) => (
                <button
                    className={classNames(styles.button)}
                    key={item.id}
                    onClick={() => chooseRestaurantFn(item)}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );
};
