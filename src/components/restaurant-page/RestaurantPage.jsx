import { useState } from 'react';
import { TabsController } from './tabs-controller/TabsController';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurants/slice';
import { RestaurantViewer } from './restaurant-viewer/RestaurantViewer';

export const RestaurantPage = () => {
    const restaurantIds = useSelector(selectRestaurantIds);
    const [activeRestaurantId, setActiveRestaurantId] = useState(
        restaurantIds[0]
    );

    const chooseRestaurantFn = (activeId) => {
        setActiveRestaurantId(activeId);
    };

    return (
        <>
            <TabsController
                restaurantIds={restaurantIds}
                chooseRestaurantFn={chooseRestaurantFn}
            />
            <RestaurantViewer
                activeRestaurantId={activeRestaurantId}
                key={activeRestaurantId}
            />
        </>
    );
};
