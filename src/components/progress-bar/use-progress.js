import { useEffect, useState } from 'react';

export const useProgress = (viewerRef) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const callBack = () => {
            const scrollTop = viewerRef.current.scrollTop;
            const scrollHeight = viewerRef.current.scrollHeight;
            const clientHeight = viewerRef.current.clientHeight;

            if (scrollHeight === clientHeight) {
                setProgress(0);
            } else {
                const newProgress =
                    (100 * scrollTop) / (scrollHeight - clientHeight);
                setProgress(newProgress);
                console.log('newProgress', newProgress);
            }
        };
        viewerRef.current.addEventListener('scroll', callBack);

        return () => {
            viewerRef.current.removeEventListener('scroll', callBack);
            console.log('clearUp');
        };
    }, []);

    return progress;
};
