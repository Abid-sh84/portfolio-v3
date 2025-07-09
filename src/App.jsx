import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Preloader from './components/Preloader'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import AllBlogs from './pages/AllBlogs'
import AllProjects from './pages/AllProjects'
import ReactHooks from './pages/blogs/ReactHooks'
import MernStack from './pages/blogs/MernStack'
import TailwindCSS from './pages/blogs/TailwindCSS'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showPreloader, setShowPreloader] = useState(true)
  const [contentReady, setContentReady] = useState(false)

  useEffect(() => {
    // Simulate loading time and actual resource loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500) // 3.5 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  const handlePreloaderComplete = () => {
    setShowPreloader(false)
    // Give a small delay to ensure smooth transition
    setTimeout(() => {
      setContentReady(true)
    }, 100)
  }

  // Don't render main content until preloader is completely done
  if (showPreloader) {
    return (
      <Preloader 
        isLoading={isLoading} 
        onComplete={handlePreloaderComplete}
      />
    )
  }

  // Render main content only after preloader completion
  return (
    <div 
      style={{ 
        opacity: contentReady ? 1 : 0, 
        transition: 'opacity 0.8s ease-in-out' 
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/blogs/react-hooks" element={<ReactHooks />} />
        <Route path="/blogs/mern-stack" element={<MernStack />} />
        <Route path="/blogs/tailwind-css" element={<TailwindCSS />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
