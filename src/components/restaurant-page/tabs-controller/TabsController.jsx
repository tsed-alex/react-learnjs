import styles from './tabs-controller.module.scss';
import classNames from 'classnames';
import { Button } from '../../button/Button';
import { useSelector } from 'react-redux';
import { selectRestaurantEntities } from '../../../redux/entities/restaurants/slice';

export const TabsController = ({ restaurantIds, chooseRestaurantFn }) => {
    const restaurants = useSelector(selectRestaurantEntities);

    return (
        <div className={classNames(styles.tabsController)}>
            {restaurantIds.map((id, index) => (
                <Button
                    key={id}
                    onClick={() => chooseRestaurantFn(id)}
                    title={restaurants[id].name}
                    className={classNames(styles.button)}
                />
            ))}
        </div>
    );
};
