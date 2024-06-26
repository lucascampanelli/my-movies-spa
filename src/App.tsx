import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Home } from './views/Home';
import { About } from './views/About';



// Rotas possíveis da aplicação de página única
const router = createBrowserRouter([
  {
    path: "",
    element: <div><Header/><Outlet/></div>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      }
    ]
  }
]);



const App = () => <RouterProvider router={router}/>

export default App
