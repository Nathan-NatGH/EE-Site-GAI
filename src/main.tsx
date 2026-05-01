import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';

try {
  import('./App.tsx').then(module => {
    const App = module.default;
    const rootEl = document.getElementById('root');
    if (rootEl) {
      createRoot(rootEl).render(
        <StrictMode>
          <App />
        </StrictMode>,
      );
    }
  }).catch(err => {
    document.body.innerHTML = `<div style="color:red;padding:20px;font-family:monospace;"><h3>Import Error</h3><p>${err.message}</p><pre>${err.stack}</pre></div>`;
  });
} catch (err) {
  document.body.innerHTML = `<div style="color:red;padding:20px;font-family:monospace;"><h3>Sync Error</h3><p>${err}</p></div>`;
}
