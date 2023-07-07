import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Menu from './vistas/menu'
import Producto from './vistas/Producto'
import ProductoIndividual from './vistas/productoindividual'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />,
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
