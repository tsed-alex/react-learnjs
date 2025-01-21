import { createRoot } from 'react-dom/client';
import './index.css';
import {restaurants} from "../materials/mock";

const rootElement = document.getElementById('root');

const reactRoot = createRoot(rootElement);

reactRoot.render(
    <div className='restaurant-wrapper'>
        {restaurants.map((restaurant, index) => (
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
                        </li>
                    ))
                }</ul>
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
            </div>
        ))}
    </div>
);