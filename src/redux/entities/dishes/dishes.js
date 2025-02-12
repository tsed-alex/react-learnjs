import { normalizedDishes } from '../../../../materials/normalized-mock';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ids: normalizedDishes.map((item) => item.id),
    entities: normalizedDishes.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {})
};

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    selectors: {
        selectDishEntities: (state) => state.entities
    }
});

export const { selectDishEntities } = dishesSlice.selectors;
