export const Counter = ({ value, onIncrement, onDecrement }) => {
    return (
        <div>
            <button onClick={onIncrement}>+</button>
            {value}
            <button onClick={onDecrement}>-</button>
        </div>
    );
};
