import {useState} from "react";
import {TabsController} from "./tabs-controller/TabsController";
import {RestaurantViewer} from "./restaurant-viewer/RestaurantViewer";
import {restaurants} from "../../../materials/mock";

export const RestaurantPage = () => {
    const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

    const chooseRestaurantFn = (active) => {
        setActiveRestaurant(active);
    }

    return (
        <>
            <TabsController restaurants={restaurants} chooseRestaurantFn={chooseRestaurantFn}/>
            <RestaurantViewer activeRestaurant={activeRestaurant} />
        </>
    );
};