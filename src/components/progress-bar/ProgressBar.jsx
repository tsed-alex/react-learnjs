import styles from './progress-bar.module.scss';
import classNames from 'classnames';
import { useProgress } from './use-progress';
import { use } from 'react';
import { ScrollViewContext } from '../scroll-view-context';

export const ProgressBar = () => {
    const { scrollViewRef } = use(ScrollViewContext);
    const progress = useProgress(scrollViewRef);

    return (
        <div
            className={classNames(styles.progressBar)}
            style={{
                width: `${progress}%`
            }}
        ></div>
    );
};
