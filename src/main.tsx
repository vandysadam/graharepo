import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AppRouter from './../router/app-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/">
        <AppRouter />
    </BrowserRouter>
</StrictMode>
)


