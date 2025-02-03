import React from 'react';
import { DishCounter } from '../dish-counter/DishCounter';
import { useReviewForm } from './use-review-form';
import { Button } from '../../button/Button';

export const ReviewForm = () => {
    const {
        form: { name, text, rating },
        updateName,
        updateText,
        // updateRating,
        onIncrement,
        onDecrement,
        resetForm
    } = useReviewForm();

    // const { count, onIncrement, onDecrement } = useDishCounter(
    //     rating,
    //     updateRating
    // );

    return (
        <div>
            <div>
                <span>Name</span>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => updateName(event.target.value)}
                />
            </div>

            <div>
                <span>Text</span>
                <input
                    type="text"
                    value={text}
                    onChange={(event) => updateText(event.target.value)}
                />
            </div>

            <DishCounter
                count={rating}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
            />

            <Button title="Clear" onClick={resetForm}></Button>
        </div>
    );
};
