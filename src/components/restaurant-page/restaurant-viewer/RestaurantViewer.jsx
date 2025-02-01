import {Menu} from "../menu/Menu";
import {Reviews} from "../reviews/Reviews";
import {Restaurant} from "../restaurant/Restaurant";
import {ReviewForm} from "../review-form/ReviewForm";

export const RestaurantViewer = ({activeRestaurant}) => {
    return (
        <div className='restaurant-viewer'>
            <Restaurant activeRestaurant={activeRestaurant}>
                <Menu menu={activeRestaurant.menu}></Menu>
                <Reviews reviews={activeRestaurant.reviews} />
                <ReviewForm/>
            </Restaurant>
        </div>
    );
};