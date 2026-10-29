import './polyfills';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register service worker safely when supported by the mobile browser/WebView
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  try {
    const updateSW = registerSW({
      onNeedRefresh() {
        console.log('HALABA City FC app update available. Applying update...');
        updateSW(true);
      },
      onOfflineReady() {
        console.log('HALABA City FC is cached and ready for offline stealth execution.');
      },
    });
  } catch (err) {
    console.debug('PWA ServiceWorker registration note:', err);
  }
}

createRoot(document.getElementById('root')!).render(<App />);
