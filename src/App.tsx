import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { MoviesList } from './components/MoviesList'
import { MoviesConteiner } from './styles/MoviesConteiner'
import { MovieService } from './api/MovieService'



function App() {

  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {

    // Obtendo o atributo "data" da resposta da API
    const { data}  = await MovieService.getMovies();

    setMovies(data.results)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <>
      <Header/>

      <MoviesConteiner>
        <MoviesList movies={movies}/>
      </MoviesConteiner>
    </>
  )
}

export default App
