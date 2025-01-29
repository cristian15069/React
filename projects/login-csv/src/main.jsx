import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './controller/App.jsx'
import './styles/main.scss';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
