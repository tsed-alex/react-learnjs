import { createRoot } from 'react-dom/client';
import './index.css';
import {App} from "./components/app/App";

const rootElement = document.getElementById('root');

// const test = createElement(rootElement);

const reactRoot = createRoot(rootElement);
reactRoot.render(<App />)