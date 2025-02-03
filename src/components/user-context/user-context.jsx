import { UserContext } from './index';
import { useState } from 'react';

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return <UserContext value={{ user, setUser }}>{children}</UserContext>;
};
