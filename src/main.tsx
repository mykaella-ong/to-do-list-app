import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log('Starting app initialization'); // Debug log

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

console.log('Root element found, creating root'); // Debug log

const root = createRoot(rootElement);

console.log('Rendering app'); // Debug log

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

console.log('App rendered'); // Debug log
