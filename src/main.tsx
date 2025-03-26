import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.tsx"
import './index.css'
import App from './App.tsx'
import Products from "./pages/Products/Products.tsx"
import Cart from './pages/Cart/Cart.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {path: "/", element: <Home />},
      {path: "products", element: <Products />,},
      {path: "cart", element: <Cart />,}
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
