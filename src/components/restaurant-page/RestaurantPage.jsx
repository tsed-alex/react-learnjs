import {useState} from "react";
import {TabsController} from "./tabs-controller/TabsController";
import {RestaurantViewer} from "./restaurant-viewer/RestaurantViewer";

export const RestaurantPage = () => {
    const [activeRestaurant, setActiveRestaurant] = useState(0);

    const chooseRestaurantFn = (index) => {
        setActiveRestaurant(index);
    }

    return (
        <>
            <TabsController chooseRestaurantFn={chooseRestaurantFn}/>
            <RestaurantViewer activeRestaurant={activeRestaurant} />
        </>
    );
};