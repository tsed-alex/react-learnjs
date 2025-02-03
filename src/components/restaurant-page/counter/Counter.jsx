import { Button } from '../../button/Button';
import styles from './counter.module.scss';

export const Counter = ({ value, onIncrement, onDecrement }) => {
    return (
        <div>
            <Button
                onClick={onIncrement}
                title="+"
                className={styles.counterButton}
            />
            {value}
            <Button
                onClick={onDecrement}
                title="-"
                className={styles.counterButton}
            />
        </div>
    );
};
