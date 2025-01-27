import { useCount } from './use-count';

export const Counter = ({ value, onChange }) => {
    const { count, onDecrement, onIncrement } = useCount(value || 0);

    if (onChange) {
        onChange(count);
    }

    return (
        <div>
            <button onClick={onIncrement}>+</button>
            {count}
            <button onClick={onDecrement}>-</button>
        </div>
    );
};
