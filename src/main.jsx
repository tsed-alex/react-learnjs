import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './components/app/App';
import { StrictMode } from 'react';

const rootElement = document.getElementById('root');

// const test = createElement(rootElement);

const reactRoot = createRoot(rootElement);
reactRoot.render(
    <StrictMode>
        <App />
    </StrictMode>
);
