import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import BookService from './components/BookService'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/book-service',
    element:<BookService/>
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
