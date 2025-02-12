import { Layout } from '../layout/Layout';
import { UserContextProvider } from '../user-context/user-context';
import { ThemeContextProvider } from '../theme-context/theme-context';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <UserContextProvider>
                    <Layout />
                </UserContextProvider>
            </ThemeContextProvider>
        </Provider>
    );
};
