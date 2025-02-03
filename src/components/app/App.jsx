import { Layout } from '../layout/Layout';
import { UserContextProvider } from '../user-context/user-context';

export const App = () => {
    return (
        <UserContextProvider>
            <Layout />
        </UserContextProvider>
    );
};
