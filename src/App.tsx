import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Home } from './views/Home';
import { About } from './views/About';
import { MovieDetail } from './views/MovieDetail';



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
      },
      {
        path: "/movie/:id",
        element: <MovieDetail/>
      }
    ]
  }
]);



const App = () => <RouterProvider router={router}/>

export default App
