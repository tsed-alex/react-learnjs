import { useReducer } from 'react';

const INITIAL_VALUE = {
    name: '',
    text: '',
    rating: 0
};

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'SET_NAME_ACTION':
            return {
                ...state,
                name: payload
            };
        case 'SET_TEXT_ACTION':
            return {
                ...state,
                text: payload
            };
        case 'SET_RATING_ACTION':
            return {
                ...state,
                rating: payload
            };
        case 'SET_CLEAR_ACTION':
            return INITIAL_VALUE;
        default:
            return state;
    }
};

export const useReviewForm = () => {
    const [form, dispatch] = useReducer(reducer, INITIAL_VALUE);

    const setName = (value) =>
        dispatch({ type: 'SET_NAME_ACTION', payload: value });
    const setText = (value) =>
        dispatch({ type: 'SET_TEXT_ACTION', payload: value });
    const setRating = (value) => {
        if (form.rating === value) return;

        dispatch({ type: 'SET_RATING_ACTION', payload: value });
    };

    const setClear = () => {
        dispatch({ type: 'SET_CLEAR_ACTION' });
    };

    return {
        form: {
            name: form.name,
            text: form.text,
            rating: form.rating
        },
        updateName: setName,
        updateText: setText,
        updateRating: setRating,
        resetForm: setClear
    };
};
