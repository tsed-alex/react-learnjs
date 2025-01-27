import {Menu} from "../menu/Menu";
import {Reviews} from "../reviews/Reviews";
import {Restaurant} from "../restaurant/Restaurant";

export const RestaurantViewer = ({activeRestaurant}) => {
    return (
        <div className='restaurant-viewer'>
            <Restaurant activeRestaurant={activeRestaurant}>
                <Menu menu={activeRestaurant.menu}></Menu>
                <Reviews reviews={activeRestaurant.reviews} />
            </Restaurant>
        </div>
    );
};