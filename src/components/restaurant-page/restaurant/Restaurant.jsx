import styles from './restaurant.module.scss';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    selectRestaurantIds,
    selectRestaurantsById
} from '../../../redux/entities/restaurants/slice';

export const Restaurant = ({ activeRestaurantId, children }) => {
    const restaurant = useSelector((store) =>
        selectRestaurantsById(store, activeRestaurantId)
    );

    return (
        <div>
            <div className={classNames(styles.restaurantName)}>
                {restaurant.name}
            </div>
            {children}
        </div>
    );
};
