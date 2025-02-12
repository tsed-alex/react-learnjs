import { normalizedReviews } from '../../../../materials/normalized-mock';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ids: normalizedReviews.map((item) => item.id),
    entities: normalizedReviews.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {})
};

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    selectors: {
        selectReviewEntities: (state) => state.entities
    }
});

export const { selectReviewEntities } = reviewsSlice.selectors;
