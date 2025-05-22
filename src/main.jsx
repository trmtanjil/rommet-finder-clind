import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 import { RouterProvider } from 'react-router'
import { router } from './layout/router'
import AuthProvider from './context/AuthProvider'
import "intersection-observer";



createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>
)
