// Defensive Polyfills for sandboxed/iframe/Vite environment

// 1. Establish process polyfill on globalThis and window
const createSafeProcess = () => {
  return {
    env: {},
    nextTick: (cb: any) => setTimeout(cb, 0),
    emit: () => {},
    on: () => {},
    addListener: () => {},
    removeListener: () => {},
    stderr: { write: () => {} },
    stdout: { write: () => {} },
  };
};

if (typeof globalThis !== 'undefined') {
  if (!(globalThis as any).process) {
    try {
      (globalThis as any).process = createSafeProcess();
    } catch (e) {}
  } else {
    try {
      const proc = (globalThis as any).process;
      if (!proc.emit) proc.emit = () => {};
      if (!proc.on) proc.on = () => {};
      if (!proc.addListener) proc.addListener = () => {};
      if (!proc.removeListener) proc.removeListener = () => {};
      if (!proc.env) proc.env = {};
    } catch (e) {}
  }
}

if (typeof window !== 'undefined') {
  if (!(window as any).process) {
    try {
      (window as any).process = (typeof globalThis !== 'undefined' ? (globalThis as any).process : null) || createSafeProcess();
    } catch (e) {}
  } else {
    try {
      const proc = (window as any).process;
      if (!proc.emit) proc.emit = () => {};
      if (!proc.on) proc.on = () => {};
      if (!proc.addListener) proc.addListener = () => {};
      if (!proc.removeListener) proc.removeListener = () => {};
      if (!proc.env) proc.env = {};
    } catch (e) {}
  }

  // 2. Safeguard window.matchMedia
  if (!window.matchMedia) {
    try {
      window.matchMedia = function(query) {
        return {
          matches: false,
          media: query,
          onchange: null,
          addListener: function() {},
          removeListener: function() {},
          addEventListener: function() {},
          removeEventListener: function() {},
          dispatchEvent: function() { return false; },
        } as any;
      };
    } catch (e) {}
  } else {
    try {
      const originalMatchMedia = window.matchMedia;
      window.matchMedia = function(query) {
        const mql = originalMatchMedia(query);
        if (mql) {
          try {
            if (!mql.addListener) mql.addListener = function() {};
            if (!mql.removeListener) mql.removeListener = function() {};
            if (!mql.addEventListener) mql.addEventListener = function() {};
            if (!mql.removeEventListener) mql.removeEventListener = function() {};
          } catch (err) {}
        }
        return mql;
      };
    } catch (e) {}
  }
}

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
