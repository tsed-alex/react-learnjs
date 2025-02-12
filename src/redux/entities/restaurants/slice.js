import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../../materials/normalized-mock';

const initialState = {
    ids: normalizedRestaurants.map((item) => item.id),
    entities: normalizedRestaurants.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {})
};

export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    selectors: {
        selectRestaurantIds: (state) => state.ids,
        selectRestaurantEntities: (state) => state.entities,
        selectRestaurantsById: (state, id) => state.entities[id]
    }
});

export const {
    selectRestaurantIds,
    selectRestaurantsById,
    selectRestaurantEntities
} = restaurantsSlice.selectors;
