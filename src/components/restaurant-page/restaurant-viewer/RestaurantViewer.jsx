import {restaurants} from "../../../../materials/mock";
import {Counter} from "../counter/Counter";

export const RestaurantViewer = ({activeRestaurant}) => {
    return (
        <div className='restaurant-viewer'>
            {
                [restaurants.find((item, index) => index === activeRestaurant)].map(restaurant => (
                    <div key={restaurant.id}>
                        <div className='restaurant-name'>{restaurant.name}</div>
                        <h3>Menu</h3>
                        <ul>{
                            restaurant.menu.map((item, index) => (
                                <li key={item.id}>
                                    <div className='menu-item'>
                                        <div className='menu-description'>
                                            <div>{item.name}</div>
                                            <div className='ingredients'>({item.ingredients.join('/')})</div>
                                        </div>
                                        <div className='menu-price'>{item.price}$</div>
                                    </div>
                                    <Counter/>
                                </li>
                            ))
                        }</ul>
                        {
                            restaurant.reviews.length ?
                                <>
                                    <h3>Reviews</h3>
                                    <ul>{
                                        restaurant.reviews.map((item, index) => (
                                            <li key={item.id}>
                                                <div>{item.user}:</div>
                                                <div>{item.text}</div>
                                                <div>Rating: {item.rating}</div>
                                            </li>
                                        ))
                                    }</ul>
                                </>
                                : null
                        }
                    </div>
                ))
            }
        </div>
    );
};