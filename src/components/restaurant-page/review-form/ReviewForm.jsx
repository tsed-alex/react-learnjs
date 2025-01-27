import React from 'react';
import { DishCounter } from '../dish-counter/DishCounter';
import { useReviewForm } from './use-review-form';

export const ReviewForm = () => {
    const {
        form: { name, text, rating },
        updateName,
        updateText,
        updateRating,
        resetForm
    } = useReviewForm();

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
                value={rating}
                onChange={(event) => updateRating(event)}
            />

            {/*// не обновляется стейт компонента рейтинга, почему?*/}
            <button onClick={resetForm}>Clear</button>
        </div>
    );
};
