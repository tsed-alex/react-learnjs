import { useEffect, useState } from 'react';

export const useProgress = (viewerRef) => {
    const [progress, setProgress] = useState(0);
    let callBack = () => {};

    useEffect(() => {
        if (viewerRef?.current) {
            callBack = () => {
                const scrollTop = viewerRef.current.scrollTop;
                const scrollHeight = viewerRef.current.scrollHeight;
                const clientHeight = viewerRef.current.clientHeight;

                if (scrollHeight === clientHeight) {
                    setProgress(0);
                } else {
                    const newProgress =
                        (100 * scrollTop) / (scrollHeight - clientHeight);
                    setProgress(newProgress);
                }
            };
            viewerRef.current.addEventListener('scroll', callBack);
        }

        return () => {
            viewerRef?.current?.removeEventListener('scroll', callBack);
            setProgress(0);
        };
    }, [viewerRef]);

    return progress;
};
