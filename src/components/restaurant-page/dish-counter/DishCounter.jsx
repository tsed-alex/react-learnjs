import { Counter } from '../counter/Counter';

export const DishCounter = ({ count, onIncrement, onDecrement }) => {
    return (
        <div>
            <span>Rating:</span>
            <Counter
                value={count}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
            />
        </div>
    );
};
