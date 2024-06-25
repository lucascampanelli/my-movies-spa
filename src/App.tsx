import './App.css'
import { Header } from './components/Header'
import { MoviesList } from './components/MoviesList'
import { MoviesConteiner } from './styles/MoviesConteiner'



function App() {

  return (
    <>
      <Header/>

      <MoviesConteiner>
        <MoviesList movies={[]}/>
      </MoviesConteiner>
    </>
  )
}

export default App
