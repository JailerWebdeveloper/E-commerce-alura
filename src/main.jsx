import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Producto from './pages/Producto'
import ProductoIndividual from './pages/productoindividual'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>error</h1>,
  },
  {
    path: '/listaproductos',
    element: <Producto />,
  },
  {
    path: '/productoindividual',
    element: <ProductoIndividual />,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router}/>
   </React.StrictMode>,
)
