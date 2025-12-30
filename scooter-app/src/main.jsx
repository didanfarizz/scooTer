import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from '@material-tailwind/react';
import VisitorProvider from './utils/VisitorContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <VisitorProvider>
        <App />
      </VisitorProvider>
    </ThemeProvider>
  </StrictMode>
);
