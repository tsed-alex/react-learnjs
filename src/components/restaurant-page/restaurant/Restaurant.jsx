import styles from './restaurant.module.scss';
import classNames from 'classnames';

export const Restaurant = ({ activeRestaurant, children }) => {
    return (
        <div>
            <div className={classNames(styles.restaurantName)}>
                {activeRestaurant.name}
            </div>
            {children}
        </div>
    );
};
