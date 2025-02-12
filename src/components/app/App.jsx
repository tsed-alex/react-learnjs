import { Layout } from '../layout/Layout';
import { UserContextProvider } from '../user-context/user-context';
import { ThemeContextProvider } from '../theme-context/theme-context';

export const App = () => {
    return (
        <ThemeContextProvider>
            <UserContextProvider>
                <Layout />
            </UserContextProvider>
        </ThemeContextProvider>
    );
};
