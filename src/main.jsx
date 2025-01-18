import { createRoot } from 'react-dom/client';
import './index.css';
import {restaurants} from "../materials/mock";

const rootElement = document.getElementById('root');

const reactRoot = createRoot(rootElement);

reactRoot.render(
    <div className='restaurant-wrapper'>
        {restaurants.map((restaurant, index) => (
            <div>
                <div className='restaurant-name'>{restaurant.name}</div>
                <h3>Menu</h3>
                <ul>{
                    restaurant.menu.map((item, index) => (
                        <li key={index}>
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
                        <li>
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