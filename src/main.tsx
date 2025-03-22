import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    children: [
      // {path: "products", element: <Products />,}
      // {path: "cart", element: <Cart />,}
      // {path: "about", element: <About />,}
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}>

    <App />
    </RouterProvider>
  </StrictMode>,
)
