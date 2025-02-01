import { useReducer } from 'react';

const INITIAL_VALUE = {
    name: '',
    text: '',
    rating: 0
};

const ACTIONS = {
    SET_NAME_ACTION: 'SET_NAME_ACTION',
    SET_TEXT_ACTION: 'SET_TEXT_ACTION',
    SET_RATING_ACTION: 'SET_RATING_ACTION',
    SET_CLEAR_ACTION: 'SET_CLEAR_ACTION'
};

const reducer = (state, { type, payload }) => {
    switch (type) {
        case ACTIONS.SET_NAME_ACTION:
            return {
                ...state,
                name: payload
            };
        case ACTIONS.SET_TEXT_ACTION:
            return {
                ...state,
                text: payload
            };
        case ACTIONS.SET_RATING_ACTION:
            return {
                ...state,
                rating: payload
            };
        case ACTIONS.SET_CLEAR_ACTION:
            return INITIAL_VALUE;
        default:
            return state;
    }
};

export const useReviewForm = ({ min = 0, max = 5 } = {}) => {
    const [form, dispatch] = useReducer(reducer, INITIAL_VALUE);

    const setName = (value) =>
        dispatch({ type: ACTIONS.SET_NAME_ACTION, payload: value });
    const setText = (value) =>
        dispatch({ type: ACTIONS.SET_TEXT_ACTION, payload: value });

    const setUpRating = () => {
        const updatedRating = Math.min(form.rating + 1, max);
        dispatch({ type: ACTIONS.SET_RATING_ACTION, payload: updatedRating });
    };

    const setLowRating = () => {
        const updatedRating = Math.max(form.rating - 1, min);
        dispatch({ type: ACTIONS.SET_RATING_ACTION, payload: updatedRating });
    };
    // const setRating = (value) => {
    //     if (form.rating === value) return;
    //
    //     dispatch({ type: ACTIONS.SET_RATING_ACTION, payload: value });
    // };

    const setClear = () => {
        dispatch({ type: ACTIONS.SET_CLEAR_ACTION });
    };

    return {
        form: form,
        updateName: setName,
        updateText: setText,
        onIncrement: setUpRating,
        onDecrement: setLowRating,
        // updateRating: setRating,
        resetForm: setClear
    };
};
