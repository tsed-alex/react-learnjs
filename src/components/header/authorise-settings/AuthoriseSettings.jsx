import { Button } from '../../button/Button';
import { UserContext } from '../../user-context';
import { use, useCallback } from 'react';

export const AuthoriseSettings = () => {
    const { user, setUser } = use(UserContext);

    const handleAuthorise = useCallback(() => {
        setUser((currentUser) => {
            if (currentUser) {
                return null;
            } else {
                return 'Sanchez';
            }
        });
    }, []);

    return (
        <div>
            {user ? (
                <span style={{ marginRight: '10px' }}>
                    You are welcome `{user}`
                </span>
            ) : null}
            <Button
                title={!!user ? 'Logout' : 'Login'}
                onClick={handleAuthorise}
            />
        </div>
    );
};
