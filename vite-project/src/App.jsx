import React from "react"
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'
import { Home } from "./pages/Home"
import { Collection } from "./pages/Collection"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Layout } from "./pages/Layout"
// import { Productitem } from "./components/Productitem"
import { Product } from "./pages/Product"

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout /> ,
    children : [
      {
        path : '',
        element : <Home />,
      },
      {
        path : '/collection',
        element : <Collection/>
      },
      {
        path : '/product/:productId',
        element : <Product />
      },
      {
        path : '/about',
        element : <About />
      },
      {
        path : '/contact',
        element : <Contact />
      }
    ]
  }
])


function App() {
  return(
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] " >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
