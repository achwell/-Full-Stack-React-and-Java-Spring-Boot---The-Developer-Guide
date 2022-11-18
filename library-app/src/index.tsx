import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App';

import './index.scss';
import "bootstrap/scss/bootstrap.scss"
import "bootstrap/dist/js/bootstrap"

let element = document.getElementById('root') as HTMLElement;
const root = createRoot(element);
root.render(<StrictMode><BrowserRouter><App/></BrowserRouter></StrictMode>);
