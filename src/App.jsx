import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import AllBlogs from './pages/AllBlogs'
import AllProjects from './pages/AllProjects'
import ReactHooks from './pages/blogs/ReactHooks'
import MernStack from './pages/blogs/MernStack'
import TailwindCSS from './pages/blogs/TailwindCSS'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<AllBlogs />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/blogs/react-hooks" element={<ReactHooks />} />
      <Route path="/blogs/mern-stack" element={<MernStack />} />
      <Route path="/blogs/tailwind-css" element={<TailwindCSS />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
