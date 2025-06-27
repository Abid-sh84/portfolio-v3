import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load the blog components for better performance
const ReactHooks = lazy(() => import('./ReactHooks'));
const MernStack = lazy(() => import('./MernStack'));
const TailwindCSS = lazy(() => import('./TailwindCSS'));

export default function BlogRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/react-hooks" element={<ReactHooks />} />
        <Route path="/mern-stack" element={<MernStack />} />
        <Route path="/tailwind-css" element={<TailwindCSS />} />
      </Routes>
    </Suspense>
  );
}
