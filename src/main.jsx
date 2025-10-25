import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './routes/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* this part is for routing this run with the help of router folder router.jsx*/}

    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
