import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Barberos from "./components/Barberos"






  const router = createBrowserRouter(
    [
      {
        path:'/',
        element:<Home/>,
        errorElement:<h1>404 not found</h1>
      },
      {
        path:'/barberos',
        element:<Barberos/>,
        errorElement:<h1>404 not found</h1>
      }

    ]
  )
  function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
