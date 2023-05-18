import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Productos from "./components/Productos"
import Clientes from "./components/Clientes"
import Barberos from "./components/Barberos"




function App() {

  const router = createBrowserRouter(
    [
      {
        path:'/',
        element:<Home/>,
        errorElement:<h1>404 not found</h1>
      },
      {
        path:'/productos',
        element:<Productos/>,
        errorElement:<h1>404 not found</h1>
      },
      {
        path:'/clientes',
        element:<Clientes/>,
        errorElement:<h1>404 not found</h1>
      },
      {
        path:'/barberos',
        element:<Barberos/>,
        errorElement:<h1>404 not found</h1>
      }

    ]
  )
  

  return (
    <RouterProvider router={router}/>
  )
}

export default App
