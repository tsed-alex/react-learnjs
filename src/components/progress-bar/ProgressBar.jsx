import styles from './progress-bar.module.scss';
import classNames from 'classnames';
import { useProgress } from './use-progress';

export const ProgressBar = ({ viewerRef }) => {
    const progress = useProgress(viewerRef);
    // при переключении активного ресторана, присутствует баг
    // пропадает реакция на скролл

    return (
        <div
            className={classNames(styles.progressBar)}
            style={{
                width: `${progress}%`
            }}
        ></div>
    );
};
